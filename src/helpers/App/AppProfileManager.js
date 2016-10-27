var _AppProfileManager = (function () {
    var chatsFull = {};
    var chatFullPromises = {};

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
            delete chatFullPromises[id];
            chatsFull[id] = fullChat;

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
            limit: 200
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

                return fullChannel;
            });
        }, function (error) {
            return $q.reject(error);
        });
    }

    return {
        getChatInviteLink: getChatInviteLink
    }
})();