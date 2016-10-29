var _AppChatsManager = (function () {
    var chats = {},
        usernames = {},
        channelAccess = {},
        megagroups = {},
        cachedPhotoLocations = {};

    function saveApiChats(apiChats) {
        forEach(apiChats, saveApiChat);
    }

    function saveApiChat(apiChat) {
        if (!isObject(apiChat)) {
            return;
        }

        var titleWords = SearchIndexManager.cleanSearchText(apiChat.title || '').split(' ');
        var firstWord = titleWords.shift();
        var lastWord = titleWords.pop();
        apiChat.initials = firstWord.charAt(0) + (lastWord ? lastWord.charAt(0) : firstWord.charAt(1));

        apiChat.num = (Math.abs(apiChat.id >> 1) % 8) + 1;

        if (apiChat.pFlags === undefined) {
            apiChat.pFlags = {};
        }

        if (apiChat.username) {
            var searchUsername = SearchIndexManager.cleanUsername(apiChat.username);
            usernames[searchUsername] = apiChat.id;
        }

        if (chats[apiChat.id] === undefined) {
            chats[apiChat.id] = apiChat;
        } else {
            safeReplaceObject(chats[apiChat.id], apiChat);
        }

        if (cachedPhotoLocations[apiChat.id] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[apiChat.id], apiChat && apiChat.photo && apiChat.photo.photo_small || {empty: true});
        }
    }

    function getChat(id) {
        return chats[id] || {id: id, deleted: true, access_hash: channelAccess[id]};
    }

    function resolveUsername(username) {
        return usernames[username] || 0;
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
        getChannelInput: getChannelInput,
        resolveUsername: resolveUsername
    }
})();