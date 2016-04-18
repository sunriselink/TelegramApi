var _AppProfileManager = (function () {
    var botInfos = {};
    var chatsFull = {};
    var chatFullPromises = {};

    function saveBotInfo (botInfo) {
        var botID = botInfo && botInfo.user_id;
        if (!botID) {
            return false;
        }
        var commands = {};
        angular.forEach(botInfo.commands, function (botCommand) {
            commands[botCommand.command] = botCommand.description;
        })
        return botInfos[botID] = {
            id: botID,
            version: botInfo.version,
            shareText: botInfo.share_text,
            description: botInfo.description,
            rAbout: RichTextProcessor.wrapRichText(botInfo.share_text, {noLinebreaks: true}),
            commands: commands
        };
    }

    function getProfile (id, override) {
        return _MtpApiManager.invokeApi('users.getFullUser', {
            id: _AppUsersManager.getUserInput(id)
        }).then(function (userFull) {
            if (override && override.phone_number) {
                userFull.user.phone = override.phone_number;
                if (override.first_name || override.last_name) {
                    userFull.user.first_name = override.first_name;
                    userFull.user.last_name = override.last_name;
                }
                _AppUsersManager.saveApiUser(userFull.user);
            } else {
                _AppUsersManager.saveApiUser(userFull.user, true);
            }

            //AppPhotosManager.savePhoto(userFull.profile_photo, {
            //    user_id: id
            //});

            _NotificationsManager.savePeerSettings(id, userFull.notify_settings);

            userFull.bot_info = saveBotInfo(userFull.bot_info);

            return userFull;
        });
    }

    function getPeerBots (peerID) {
        var peerBots = [];
        if (peerID >= 0 && !_AppUsersManager.isBot(peerID) ||
            (_AppPeersManager.isChannel(peerID) && !_AppPeersManager.isMegagroup(peerID))) {
            return $q.when(peerBots);
        }
        if (peerID >= 0) {
            return getProfile(peerID).then(function (userFull) {
                var botInfo = userFull.bot_info;
                if (botInfo && botInfo._ != 'botInfoEmpty') {
                    peerBots.push(botInfo);
                }
                return peerBots;
            });
        }

        return getChatFull(-peerID).then(function (chatFull) {
            angular.forEach(chatFull.bot_info, function (botInfo) {
                peerBots.push(saveBotInfo(botInfo));
            });
            return peerBots;
        });

    }

    function getChatFull(id) {
        if (_AppChatsManager.isChannel(id)) {
            return getChannelFull(id);
        }
        if (chatsFull[id] !== undefined) {
            var chat = _AppChatsManager.getChat(id);
            if (chat.version == chatsFull[id].participants.version ||
                chat.pFlags.left) {
                return $q.when(chatsFull[id]);
            }
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }
        console.trace(dT(), 'Get chat full', id, _AppChatsManager.getChat(id));
        return chatFullPromises[id] = _MtpApiManager.invokeApi('messages.getFullChat', {
            chat_id: _AppChatsManager.getChatInput(id)
        }).then(function (result) {
            _AppChatsManager.saveApiChats(result.chats);
            _AppUsersManager.saveApiUsers(result.users);
            var fullChat = result.full_chat;
            if (fullChat && fullChat.chat_photo.id) {
                //AppPhotosManager.savePhoto(fullChat.chat_photo);
            }
            _NotificationsManager.savePeerSettings(-id, fullChat.notify_settings);
            delete chatFullPromises[id];
            chatsFull[id] = fullChat;
            $rootScope.$broadcast('chat_full_update', id);

            return fullChat;
        });
    }

    function getChatInviteLink (id, force) {
        return getChatFull(id).then(function (chatFull) {
            if (!force &&
                chatFull.exported_invite &&
                chatFull.exported_invite._ == 'chatInviteExported') {
                return chatFull.exported_invite.link;
            }
            var promise;
            if (_AppChatsManager.isChannel(id)) {
                promise = _MtpApiManager.invokeApi('channels.exportInvite', {
                    channel: _AppChatsManager.getChannelInput(id)
                });
            } else {
                promise = _MtpApiManager.invokeApi('messages.exportChatInvite', {
                    chat_id: _AppChatsManager.getChatInput(id)
                });
            }
            return promise.then(function (exportedInvite) {
                if (chatsFull[id] !== undefined) {
                    chatsFull[id].exported_invite = exportedInvite;
                }
                return exportedInvite.link;
            });
        });
    }

    function getChannelParticipants (id) {
        return _MtpApiManager.invokeApi('channels.getParticipants', {
            channel: _AppChatsManager.getChannelInput(id),
            filter: {_: 'channelParticipantsRecent'},
            offset: 0,
            limit: _AppChatsManager.isMegagroup(id) ? 50 : 200
        }).then(function (result) {
            _AppUsersManager.saveApiUsers(result.users);
            var participants = result.participants;

            var chat = _AppChatsManager.getChat(id);
            if (!chat.pFlags.kicked && !chat.pFlags.left) {
                var myID = _AppUsersManager.getSelf().id;
                var myIndex = false;
                var myParticipant;
                for (var i = 0, len = participants.length; i < len; i++) {
                    if (participants[i].user_id == myID) {
                        myIndex = i;
                        break;
                    }
                }
                if (myIndex !== false) {
                    myParticipant = participants[i];
                    participants.splice(i, 1);
                } else {
                    myParticipant = {_: 'channelParticipantSelf', user_id: myID};
                }
                participants.unshift(myParticipant);
            }

            return participants;
        });
    }

    function getChannelFull (id, force) {
        if (chatsFull[id] !== undefined && !force) {
            return $q.when(chatsFull[id]);
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }

        return chatFullPromises[id] = _MtpApiManager.invokeApi('channels.getFullChannel', {
            channel: _AppChatsManager.getChannelInput(id)
        }).then(function (result) {
            _AppChatsManager.saveApiChats(result.chats);
            _AppUsersManager.saveApiUsers(result.users);
            var fullChannel = result.full_chat;
            var chat = _AppChatsManager.getChat(id);
            if (fullChannel && fullChannel.chat_photo.id) {
                //AppPhotosManager.savePhoto(fullChannel.chat_photo);
            }
            _NotificationsManager.savePeerSettings(-id, fullChannel.notify_settings);
            var participantsPromise;
            if (fullChannel.flags & 8) {
                participantsPromise = getChannelParticipants(id).then(function (participants) {
                    delete chatFullPromises[id];
                    fullChannel.participants = {
                        _: 'channelParticipants',
                        participants: participants
                    };
                }, function (error) {
                    error.handled = true;
                });
            } else {
                participantsPromise = $q.when();
            }
            return participantsPromise.then(function () {
                delete chatFullPromises[id];
                chatsFull[id] = fullChannel;
                $rootScope.$broadcast('chat_full_update', id);

                return fullChannel;
            });
        }, function (error) {
            switch (error.type) {
                case 'CHANNEL_PRIVATE':
                    var channel = _AppChatsManager.getChat(id);
                    channel = {_: 'channelForbidden', access_hash: channel.access_hash, title: channel.title};
                    _ApiUpdatesManager.processUpdateMessage({
                        _: 'updates',
                        updates: [{
                            _: 'updateChannel',
                            channel_id: id
                        }],
                        chats: [channel],
                        users: []
                    });
                    break;
            }
            return $q.reject(error);
        });
    }

    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateChatParticipants':
                var participants = update.participants;
                var chatFull = chatsFull[participants.id];
                if (chatFull !== undefined) {
                    chatFull.participants = update.participants;
                    $rootScope.$broadcast('chat_full_update', chatID);
                }
                break;

            case 'updateChatParticipantAdd':
                var chatFull = chatsFull[update.chat_id];
                if (chatFull !== undefined) {
                    var participants = chatFull.participants.participants || [];
                    for (var i = 0, length = participants.length; i < length; i++) {
                        if (participants[i].user_id == update.user_id) {
                            return;
                        }
                    }
                    participants.push({
                        _: 'chatParticipant',
                        user_id: update.user_id,
                        inviter_id: update.inviter_id,
                        date: tsNow(true)
                    });
                    chatFull.participants.version = update.version;
                    $rootScope.$broadcast('chat_full_update', update.chat_id);
                }
                break;

            case 'updateChatParticipantDelete':
                var chatFull = chatsFull[update.chat_id];
                if (chatFull !== undefined) {
                    var participants = chatFull.participants.participants || [];
                    for (var i = 0, length = participants.length; i < length; i++) {
                        if (participants[i].user_id == update.user_id) {
                            participants.splice(i, 1);
                            chatFull.participants.version = update.version;
                            $rootScope.$broadcast('chat_full_update', update.chat_id);
                            return;
                        }
                    }
                }
                break;

        }
    });

    $rootScope.$on('chat_update', function (e, chatID) {
        var fullChat = chatsFull[chatID];
        var chat = _AppChatsManager.getChat(chatID);
        if (!chat.photo || !fullChat) {
            return;
        }
        var emptyPhoto = chat.photo._ == 'chatPhotoEmpty';
        if (emptyPhoto != (fullChat.chat_photo._ == 'photoEmpty')) {
            delete chatsFull[chatID];
            $rootScope.$broadcast('chat_full_update', chatID);
            return;
        }
        if (emptyPhoto) {
            return;
        }
        var smallUserpic = chat.photo.photo_small;
        //var smallPhotoSize = AppPhotosManager.choosePhotoSize(fullChat.chat_photo, 0, 0);
        //if (!angular.equals(smallUserpic, smallPhotoSize.location)) {
        //    delete chatsFull[chatID];
        //    $rootScope.$broadcast('chat_full_update', chatID);
        //}
    });

    return {
        getPeerBots: getPeerBots,
        getProfile: getProfile,
        getChatInviteLink: getChatInviteLink,
        getChatFull: getChatFull,
        getChannelFull: getChannelFull
    }
})();