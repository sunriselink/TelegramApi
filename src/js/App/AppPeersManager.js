function AppPeersManagerModule(AppChatsManager, AppUsersManager) {
    function getInputPeerByID(peerID) {
        if (!peerID) {
            return {_: 'inputPeerEmpty'};
        }
        if (peerID < 0) {
            var chatID = -peerID;
            if (!AppChatsManager.isChannel(chatID)) {
                return {
                    _: 'inputPeerChat',
                    chat_id: chatID
                };
            } else {
                return {
                    _: 'inputPeerChannel',
                    channel_id: chatID,
                    access_hash: AppChatsManager.getChat(chatID).access_hash || 0
                }
            }
        }
        return {
            _: 'inputPeerUser',
            user_id: peerID,
            access_hash: AppUsersManager.getUser(peerID).access_hash || 0
        };
    }

    function getPeerID(peerString) {
        if (isObject(peerString)) {
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
            ? AppUsersManager.getUser(peerID)
            : AppChatsManager.getChat(-peerID);
    }

    function isChannel(peerID) {
        return (peerID < 0) && AppChatsManager.isChannel(-peerID);
    }

    return {
        getInputPeerByID: getInputPeerByID,
        getPeerID: getPeerID,
        getPeer: getPeer,
        isChannel: isChannel
    };
}

AppPeersManagerModule.dependencies = [
    'AppChatsManager', 
    'AppUsersManager'
];
