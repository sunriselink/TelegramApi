var _AppPeersManager = (function () {
    function getInputPeer (peerString) {
        var firstChar = peerString.charAt(0),
            peerParams = peerString.substr(1).split('_');

        if (firstChar == 'u') {
            _AppUsersManager.saveUserAccess(peerParams[0], peerParams[1]);
            return {
                _: 'inputPeerUser',
                user_id: peerParams[0],
                access_hash: peerParams[1]
            };
        }
        else if (firstChar == 'c' || firstChar == 's') {
            _AppChatsManager.saveChannelAccess(peerParams[0], peerParams[1]);
            if (firstChar == 's') {
                _AppChatsManager.saveIsMegagroup(peerParams[0]);
            }
            return {
                _: 'inputPeerChannel',
                channel_id: peerParams[0],
                access_hash: peerParams[1] || 0
            };
        }
        else {
            return {
                _: 'inputPeerChat',
                chat_id: peerParams[0]
            }
        }
    }

    function getInputPeerByID (peerID) {
        if (!peerID) {
            return {_: 'inputPeerEmpty'};
        }
        if (peerID < 0) {
            var chatID = -peerID;
            if (!_AppChatsManager.isChannel(chatID)) {
                return {
                    _: 'inputPeerChat',
                    chat_id: chatID
                };
            } else {
                return {
                    _: 'inputPeerChannel',
                    channel_id: chatID,
                    access_hash: _AppChatsManager.getChat(chatID).access_hash || 0
                }
            }
        }
        return {
            _: 'inputPeerUser',
            user_id: peerID,
            access_hash: _AppUsersManager.getUser(peerID).access_hash || 0
        };
    }

    function getPeerSearchText (peerID) {
        var text;
        if (peerID > 0) {
            text = '%pu ' + _AppUsersManager.getUserSearchText(peerID);
        } else if (peerID < 0) {
            var chat = _AppChatsManager.getChat(-peerID);
            text = '%pg ' + (chat.title || '');
        }
        return text;
    }

    function getPeerString (peerID) {
        if (peerID > 0) {
            return _AppUsersManager.getUserString(peerID);
        }
        return _AppChatsManager.getChatString(-peerID);
    }

    function getOutputPeer (peerID) {
        if (peerID > 0) {
            return {_: 'peerUser', user_id: peerID};
        }
        var chatID = -peerID;
        if (_AppChatsManager.isChannel(chatID)) {
            return {_: 'peerChannel', channel_id: chatID}
        }
        return {_: 'peerChat', chat_id: chatID}
    }

    function resolveUsername (username) {
        var searchUserName = SearchIndexManager.cleanUsername(username);
        var foundUserID, foundChatID, foundPeerID, foundUsername;
        if (foundUserID = _AppUsersManager.resolveUsername(searchUserName)) {
            foundUsername = _AppUsersManager.getUser(foundUserID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return qSync.when(foundUserID);
            }
        }
        if (foundChatID = _AppChatsManager.resolveUsername(searchUserName)) {
            foundUsername = _AppChatsManager.getChat(foundChatID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return qSync.when(-foundChatID);
            }
        }

        return MtpApiManager.invokeApi('contacts.resolveUsername', {username: username}).then(function (resolveResult) {
            _AppUsersManager.saveApiUsers(resolveResult.users);
            _AppChatsManager.saveApiChats(resolveResult.chats);
            return getPeerID(resolveResult.peer);
        });
    }

    function resolveInlineMention (username) {
        return resolveUsername(username).then(function (peerID) {
            if (peerID > 0) {
                var bot = _AppUsersManager.getUser(peerID);
                if (bot.pFlags.bot && bot.bot_inline_placeholder !== undefined) {
                    return qSync.when({
                        id: peerID,
                        placeholder: bot.bot_inline_placeholder
                    });
                }
            }
            return $q.reject();
        }, function (error) {
            error.handled = true;
            return $q.reject(error);
        });
    }

    function getPeerID (peerString) {
        if (angular.isObject(peerString)) {
            return peerString.user_id
                ? peerString.user_id
                : -(peerString.channel_id || peerString.chat_id);
        }
        var isUser = peerString.charAt(0) == 'u',
            peerParams = peerString.substr(1).split('_');

        return isUser ? peerParams[0] : -peerParams[0] || 0;
    }

    function getPeer (peerID) {
        return peerID > 0
            ? _AppUsersManager.getUser(peerID)
            : _AppChatsManager.getChat(-peerID);
    }

    function getPeerPhoto (peerID) {
        return peerID > 0
            ? _AppUsersManager.getUserPhoto(peerID)
            : _AppChatsManager.getChatPhoto(-peerID)
    }

    function isChannel (peerID) {
        return (peerID < 0) && _AppChatsManager.isChannel(-peerID);
    }

    function isMegagroup (peerID) {
        return (peerID < 0) && _AppChatsManager.isMegagroup(-peerID);
    }

    function isBot (peerID) {
        return (peerID > 0) && _AppUsersManager.isBot(peerID);
    }

    return {
        getInputPeer: getInputPeer,
        getInputPeerByID: getInputPeerByID,
        getPeerSearchText: getPeerSearchText,
        getPeerString: getPeerString,
        getOutputPeer: getOutputPeer,
        getPeerID: getPeerID,
        getPeer: getPeer,
        getPeerPhoto: getPeerPhoto,
        resolveUsername: resolveUsername,
        resolveInlineMention: resolveInlineMention,
        isChannel: isChannel,
        isMegagroup: isMegagroup,
        isBot: isBot
    }
})();