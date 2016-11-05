function AppChatsManagerModule() {
    var chats = {},
        channelAccess = {};

    function saveApiChats(apiChats) {
        forEach(apiChats, saveApiChat);
    }

    function saveApiChat(apiChat) {
        if (!isObject(apiChat)) {
            return;
        }

        apiChat.num = (Math.abs(apiChat.id >> 1) % 8) + 1;

        if (apiChat.pFlags === undefined) {
            apiChat.pFlags = {};
        }

        if (chats[apiChat.id] === undefined) {
            chats[apiChat.id] = apiChat;
        } else {
            safeReplaceObject(chats[apiChat.id], apiChat);
        }
    }

    function getChat(id) {
        return chats[id] || {id: id, deleted: true, access_hash: channelAccess[id]};
    }

    function isChannel(id) {
        var chat = chats[id];

        return chat && (chat._ == 'channel' || chat._ == 'channelForbidden') || channelAccess[id];
    }

    function getChatInput(id) {
        return id || 0;
    }

    function getChannelInput(id) {
        if (!id) {
            return {_: 'inputChannelEmpty'};
        }
        return {
            _: 'inputChannel',
            channel_id: id,
            access_hash: getChat(id).access_hash || channelAccess[id] || 0
        }
    }

    return {
        saveApiChats: saveApiChats,
        saveApiChat: saveApiChat,
        getChat: getChat,
        isChannel: isChannel,
        getChatInput: getChatInput,
        getChannelInput: getChannelInput
    };
}

AppChatsManagerModule.dependencies = [];
