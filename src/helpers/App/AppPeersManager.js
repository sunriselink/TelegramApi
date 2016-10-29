var _AppPeersManager = (function () {
    function getInputPeerByID(peerID) {
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

    function resolveUsername(username) {
        var searchUserName = SearchIndexManager.cleanUsername(username);
        var foundUserID, foundChatID, foundPeerID, foundUsername;
        if (foundUserID = _AppUsersManager.resolveUsername(searchUserName)) {
            foundUsername = _AppUsersManager.getUser(foundUserID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return _qSync.when(foundUserID);
            }
        }
        if (foundChatID = _AppChatsManager.resolveUsername(searchUserName)) {
            foundUsername = _AppChatsManager.getChat(foundChatID).username;
            if (SearchIndexManager.cleanUsername(foundUsername) == searchUserName) {
                return _qSync.when(-foundChatID);
            }
        }

        return MtpApiManager.invokeApi('contacts.resolveUsername', {username: username}).then(function (resolveResult) {
            _AppUsersManager.saveApiUsers(resolveResult.users);
            _AppChatsManager.saveApiChats(resolveResult.chats);
            return getPeerID(resolveResult.peer);
        });
    }

    function getPeerID(peerString) {
        if (angular.isObject(peerString)) {
            return peerString.user_id
                ? peerString.user_id
                : -(peerString.channel_id || peerString.chat_id);
        }
        var isUser = peerString.charAt(0) == 'u',
            peerParams = peerString.substr(1).split('_');

        return isUser ? peerParams[0] : -peerParams[0] || 0;
    }

    function getPeer(peerID) {
        return peerID > 0
            ? _AppUsersManager.getUser(peerID)
            : _AppChatsManager.getChat(-peerID);
    }

    function isChannel(peerID) {
        return (peerID < 0) && _AppChatsManager.isChannel(-peerID);
    }

    return {
        getInputPeerByID: getInputPeerByID,
        getPeerID: getPeerID,
        getPeer: getPeer,
        resolveUsername: resolveUsername,
        isChannel: isChannel
    }
})();