var _ApiUpdatesManager = (function () {
    var updatesState = {
        pendingPtsUpdates: [],
        pendingSeqUpdates: {},
        syncPending: false,
        syncLoading: true
    };
    var channelStates = {};

    var myID = 0;
    _MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });


    function popPendingSeqUpdate () {
        var nextSeq = updatesState.seq + 1,
            pendingUpdatesData = updatesState.pendingSeqUpdates[nextSeq];
        if (!pendingUpdatesData) {
            return false;
        }
        var updates = pendingUpdatesData.updates;
        var i, length;
        for (var i = 0, length = updates.length; i < length; i++) {
            saveUpdate(updates[i]);
        }
        updatesState.seq = pendingUpdatesData.seq;
        if (pendingUpdatesData.date && updatesState.date < pendingUpdatesData.date) {
            updatesState.date = pendingUpdatesData.date;
        }
        delete updatesState.pendingSeqUpdates[nextSeq];

        if (!popPendingSeqUpdate() &&
            updatesState.syncPending &&
            updatesState.syncPending.seqAwaiting &&
            updatesState.seq >= updatesState.syncPending.seqAwaiting) {
            if (!updatesState.syncPending.ptsAwaiting) {
                clearTimeout(updatesState.syncPending.timeout);
                updatesState.syncPending = false;
            } else {
                delete updatesState.syncPending.seqAwaiting;
            }
        }

        return true;
    }

    function popPendingPtsUpdate (channelID) {
        var curState = channelID ? getChannelState(channelID) : updatesState;
        if (!curState.pendingPtsUpdates.length) {
            return false;
        }
        curState.pendingPtsUpdates.sort(function (a, b) {
            return a.pts - b.pts;
        });

        var curPts = curState.pts;
        var goodPts = false;
        var goodIndex = false;
        var update;
        for (var i = 0, length = curState.pendingPtsUpdates.length; i < length; i++) {
            update = curState.pendingPtsUpdates[i];
            curPts += update.pts_count;
            if (curPts >= update.pts) {
                goodPts = update.pts;
                goodIndex = i;
            }
        }

        if (!goodPts) {
            return false;
        }

        curState.pts = goodPts;
        for (i = 0; i <= goodIndex; i++) {
            update = curState.pendingPtsUpdates[i];
            saveUpdate(update);
        }
        curState.pendingPtsUpdates.splice(0, goodIndex + 1);

        if (!curState.pendingPtsUpdates.length && curState.syncPending) {
            if (!curState.syncPending.seqAwaiting) {
                clearTimeout(curState.syncPending.timeout);
                curState.syncPending = false;
            } else {
                delete curState.syncPending.ptsAwaiting;
            }
        }

        return true;
    }

    function forceGetDifference () {
        if (!updatesState.syncLoading) {
            getDifference();
        }
    }

    function processUpdateMessage (updateMessage) {
        var processOpts = {
            date: updateMessage.date,
            seq: updateMessage.seq,
            seqStart: updateMessage.seq_start
        };

        switch (updateMessage._) {
            case 'updatesTooLong':
            case 'new_session_created':
                forceGetDifference();
                break;

            case 'updateShort':
                processUpdate(updateMessage.update, processOpts);
                break;


            case 'updateShortMessage':
            case 'updateShortChatMessage':
                var isOut  = updateMessage.flags & 2;
                var fromID = updateMessage.from_id || (isOut ? myID : updateMessage.user_id);
                var toID   = updateMessage.chat_id
                    ? -updateMessage.chat_id
                    : (isOut ? updateMessage.user_id : myID);

                processUpdate({
                    _: 'updateNewMessage',
                    message: {
                        _: 'message',
                        flags: updateMessage.flags,
                        pFlags: updateMessage.pFlags,
                        id: updateMessage.id,
                        from_id: fromID,
                        to_id: AppPeersManager.getOutputPeer(toID),
                        date: updateMessage.date,
                        message: updateMessage.message,
                        fwd_from_id: updateMessage.fwd_from_id,
                        fwd_date: updateMessage.fwd_date,
                        reply_to_msg_id: updateMessage.reply_to_msg_id,
                        entities: updateMessage.entities
                    },
                    pts: updateMessage.pts,
                    pts_count: updateMessage.pts_count
                }, processOpts);
                break;

            case 'updatesCombined':
            case 'updates':
                _AppUsersManager.saveApiUsers(updateMessage.users);
                _AppChatsManager.saveApiChats(updateMessage.chats);

                angular.forEach(updateMessage.updates, function (update) {
                    processUpdate(update, processOpts);
                });
                break;

            default:
                console.warn(dT(), 'Unknown update message', updateMessage);
        }
    }

    function getDifference () {
        // console.trace(dT(), 'Get full diff');
        if (!updatesState.syncLoading) {
            updatesState.syncLoading = true;
            updatesState.pendingSeqUpdates = {};
            updatesState.pendingPtsUpdates = [];
        }

        if (updatesState.syncPending) {
            clearTimeout(updatesState.syncPending.timeout);
            updatesState.syncPending = false;
        }

        _MtpApiManager.invokeApi('updates.getDifference', {pts: updatesState.pts, date: updatesState.date, qts: -1}).then(function (differenceResult) {
            if (differenceResult._ == 'updates.differenceEmpty') {
                console.log(dT(), 'apply empty diff', differenceResult.seq);
                updatesState.date = differenceResult.date;
                updatesState.seq = differenceResult.seq;
                updatesState.syncLoading = false;
                $rootScope.$broadcast('stateSynchronized');
                return false;
            }

            _AppUsersManager.saveApiUsers(differenceResult.users);
            _AppChatsManager.saveApiChats(differenceResult.chats);

            // Should be first because of updateMessageID
            // console.log(dT(), 'applying', differenceResult.other_updates.length, 'other updates');
            angular.forEach(differenceResult.other_updates, function(update) {
                if (update._ == 'updateChannelTooLong') {
                    var channelID = update.channel_id;
                    var channelState = channelStates[channelID];
                    if (channelState !== undefined && !channelState.syncLoading) {
                        getChannelDifference(channelID);
                    }
                    return;
                }
                saveUpdate(update);
            });

            // console.log(dT(), 'applying', differenceResult.new_messages.length, 'new messages');
            angular.forEach(differenceResult.new_messages, function (apiMessage) {
                saveUpdate({
                    _: 'updateNewMessage',
                    message: apiMessage,
                    pts: updatesState.pts,
                    pts_count: 0
                });
            });

            var nextState = differenceResult.intermediate_state || differenceResult.state;
            updatesState.seq = nextState.seq;
            updatesState.pts = nextState.pts;
            updatesState.date = nextState.date;

            // console.log(dT(), 'apply diff', updatesState.seq, updatesState.pts);

            if (differenceResult._ == 'updates.differenceSlice') {
                getDifference();
            } else {
                // console.log(dT(), 'finished get diff');
                $rootScope.$broadcast('stateSynchronized');
                updatesState.syncLoading = false;
            }
        });
    }

    function getChannelDifference (channelID) {
        var channelState = getChannelState(channelID);
        if (!channelState.syncLoading) {
            channelState.syncLoading = true;
            channelState.pendingPtsUpdates = [];
        }
        if (channelState.syncPending) {
            clearTimeout(channelState.syncPending.timeout);
            channelState.syncPending = false;
        }
        // console.log(dT(), 'Get channel diff', _AppChatsManager.getChat(channelID), channelState.pts);
        _MtpApiManager.invokeApi('updates.getChannelDifference', {
            channel: _AppChatsManager.getChannelInput(channelID),
            filter: {_: 'channelMessagesFilterEmpty'},
            pts: channelState.pts,
            limit: 30
        }).then(function (differenceResult) {
            // console.log(dT(), 'channel diff result', differenceResult);
            channelState.pts = differenceResult.pts;

            if (differenceResult._ == 'updates.channelDifferenceEmpty') {
                console.log(dT(), 'apply channel empty diff', differenceResult);
                channelState.syncLoading = false;
                $rootScope.$broadcast('stateSynchronized');
                return false;
            }

            if (differenceResult._ == 'updates.channelDifferenceTooLong') {
                console.log(dT(), 'channel diff too long', differenceResult);
                channelState.syncLoading = false;
                delete channelStates[channelID];
                saveUpdate({_: 'updateChannelReload', channel_id: channelID});
                return false;
            }

            _AppUsersManager.saveApiUsers(differenceResult.users);
            _AppChatsManager.saveApiChats(differenceResult.chats);

            // Should be first because of updateMessageID
            console.log(dT(), 'applying', differenceResult.other_updates.length, 'channel other updates');
            angular.forEach(differenceResult.other_updates, function(update){
                saveUpdate(update);
            });

            console.log(dT(), 'applying', differenceResult.new_messages.length, 'channel new messages');
            angular.forEach(differenceResult.new_messages, function (apiMessage) {
                saveUpdate({
                    _: 'updateNewChannelMessage',
                    message: apiMessage,
                    pts: channelState.pts,
                    pts_count: 0
                });
            });

            console.log(dT(), 'apply channel diff', channelState.pts);

            if (differenceResult._ == 'updates.channelDifference' &&
                !differenceResult.pFlags['final']) {
                getChannelDifference(channelID);
            } else {
                console.log(dT(), 'finished channel get diff');
                $rootScope.$broadcast('stateSynchronized');
                channelState.syncLoading = false;
            }
        });
    }

    function addChannelState (channelID, pts) {
        if (!pts) {
            throw new Error('Add channel state without pts ' + channelID);
        }
        if (channelStates[channelID] === undefined) {
            channelStates[channelID] = {
                pts: pts,
                pendingPtsUpdates: [],
                syncPending: false,
                syncLoading: false
            };
            return true;
        }
        return false;
    }

    function getChannelState (channelID, pts) {
        if (channelStates[channelID] === undefined) {
            addChannelState(channelID, pts);
        }
        return channelStates[channelID];
    }

    function processUpdate (update, options) {
        var channelID = false;
        switch (update._) {
            case 'updateNewChannelMessage':
                channelID = -AppPeersManager.getPeerID(update.message.to_id);
                break;
            case 'updateDeleteChannelMessages':
                channelID = update.channel_id;
                break;
        }
        if (channelID && !_AppChatsManager.hasChat(channelID)) {
            // console.log(dT(), 'skip update, missing channel', channelID, update);
            return false;
        }
        var curState = channelID ? getChannelState(channelID, update.pts) : updatesState;

        // console.log(dT(), 'process', channelID, curState, update);

        if (curState.syncLoading) {
            return false;
        }

        if (update._ == 'updateNewMessage') {
            var message = update.message;
            var fwdPeerID = message.fwd_from_id ? AppPeersManager.getPeerID(message.fwd_from_id) : 0;
            var toPeerID = AppPeersManager.getPeerID(message.to_id);
            if (message.from_id && !_AppUsersManager.hasUser(message.from_id) ||
                fwdPeerID > 0 && !_AppUsersManager.hasUser(fwdPeerID) ||
                fwdPeerID < 0 && !_AppChatsManager.hasChat(-fwdPeerID) ||
                toPeerID > 0 && !_AppUsersManager.hasUser(toPeerID) ||
                toPeerID < 0 && !_AppChatsManager.hasChat(-toPeerID)) {
                console.warn(dT(), 'Short update not enough data', message);
                forceGetDifference();
                return false;
            }
        }

        var popPts, popSeq;

        if (update.pts) {
            var newPts = curState.pts + (update.pts_count || 0);
            if (newPts < update.pts) {
                console.warn(dT(), 'Pts hole', curState, update, channelID && _AppChatsManager.getChat(channelID));
                curState.pendingPtsUpdates.push(update);
                if (!curState.syncPending) {
                    curState.syncPending = {
                        timeout: setTimeout(function () {
                            if (channelID) {
                                getChannelDifference(channelID);
                            } else {
                                getDifference();
                            }
                        }, 5000)
                    };
                }
                curState.syncPending.ptsAwaiting = true;
                return false;
            }
            if (update.pts > curState.pts) {
                curState.pts = update.pts;
                popPts = true;
            }
            if (channelID && options.date && updatesState.date < options.date) {
                updatesState.date = options.date;
            }
        }
        else if (!channelID && options.seq > 0) {
            var seq = options.seq;
            var seqStart = options.seqStart || seq;

            if (seqStart != curState.seq + 1) {
                if (seqStart > curState.seq) {
                    console.warn(dT(), 'Seq hole', curState, curState.syncPending && curState.syncPending.seqAwaiting);

                    if (curState.pendingSeqUpdates[seqStart] === undefined) {
                        curState.pendingSeqUpdates[seqStart] = {seq: seq, date: options.date, updates: []};
                    }
                    curState.pendingSeqUpdates[seqStart].updates.push(update);

                    if (!curState.syncPending) {
                        curState.syncPending = {
                            timeout: setTimeout(function () {
                                getDifference();
                            }, 5000)
                        };
                    }
                    if (!curState.syncPending.seqAwaiting ||
                        curState.syncPending.seqAwaiting < seqStart) {
                        curState.syncPending.seqAwaiting = seqStart;
                    }
                    return false;
                }
            }

            if (curState.seq != seq) {
                curState.seq = seq;
                if (options.date && curState.date < options.date) {
                    curState.date = options.date;
                }
                popSeq = true;
            }
        }

        saveUpdate(update);

        if (popPts) {
            popPendingPtsUpdate(channelID);
        }
        else if (popSeq) {
            popPendingSeqUpdate();
        }
    }

    function saveUpdate (update) {
        $rootScope.$broadcast('apiUpdate', update);
    }

    function attach () {
        _MtpNetworkerFactory.setUpdatesProcessor(processUpdateMessage);
        _MtpApiManager.invokeApi('updates.getState', {}, {noErrorBox: true}).then(function (stateResult) {
            updatesState.seq = stateResult.seq;
            updatesState.pts = stateResult.pts;
            updatesState.date = stateResult.date;
            setTimeout(function () {
                updatesState.syncLoading = false;
            }, 1000);

            // updatesState.seq = 1;
            // updatesState.pts = stateResult.pts - 5000;
            // updatesState.date = 1;
            // getDifference();
        })
    }


    return {
        processUpdateMessage: processUpdateMessage,
        addChannelState: addChannelState,
        attach: attach
    }
})();