var _AppChatsManager = (function () {
    var chats = {},
        usernames = {},
        channelAccess = {},
        megagroups = {},
        cachedPhotoLocations = {};

    function saveApiChats (apiChats) {
        angular.forEach(apiChats, saveApiChat);
    };

    function saveApiChat (apiChat) {
        if (!angular.isObject(apiChat)) {
            return;
        }
        // TODO
        //apiChat.rTitle = RichTextProcessor.wrapRichText(apiChat.title, {noLinks: true, noLinebreaks: true}) || _('chat_title_deleted');

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
            $rootScope.$broadcast('chat_update', apiChat.id);
        }

        if (cachedPhotoLocations[apiChat.id] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[apiChat.id], apiChat && apiChat.photo && apiChat.photo.photo_small || {empty: true});
        }
    };

    function getChat (id) {
        return chats[id] || {id: id, deleted: true, access_hash: channelAccess[id]};
    }

    function hasRights (id, action) {
        if (chats[id] === undefined) {
            return false;
        }
        var chat = getChat(id);
        if (chat._ == 'chatForbidden' ||
            chat._ == 'channelForbidden' ||
            chat.pFlags.kicked ||
            chat.pFlags.left) {
            return false;
        }
        if (chat.pFlags.creator) {
            return true;
        }

        switch (action) {
            case 'send':
                if (chat._ == 'channel' &&
                    !chat.pFlags.megagroup &&
                    !chat.pFlags.editor) {
                    return false;
                }
                break;

            case 'edit_title':
            case 'edit_photo':
            case 'invite':
                if (chat._ == 'channel') {
                    if (chat.pFlags.megagroup) {
                        if (!chat.pFlags.editor) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    if (chat.pFlags.admins_enabled &&
                        !chat.pFlags.admin) {
                        return false;
                    }
                }
                break;
        }
        return true;
    }

    function resolveUsername (username) {
        return usernames[username] || 0;
    }

    function saveChannelAccess (id, accessHash) {
        channelAccess[id] = accessHash;
    }

    function saveIsMegagroup (id) {
        megagroups[id] = true;
    }

    function isChannel (id) {
        var chat = chats[id];
        if (chat && (chat._ == 'channel' || chat._ == 'channelForbidden') ||
            channelAccess[id]) {
            return true;
        }
        return false;
    }

    function isMegagroup (id) {
        if (megagroups[id]) {
            return true;
        }
        var chat = chats[id];
        if (chat && chat._ == 'channel' && chat.pFlags.megagroup) {
            return true;
        }
        return false;
    }

    function getChatInput (id) {
        return id || 0;
    }

    function getChannelInput (id) {
        if (!id) {
            return {_: 'inputChannelEmpty'};
        }
        return {
            _: 'inputChannel',
            channel_id: id,
            access_hash: getChat(id).access_hash || channelAccess[id] || 0
        }
    }

    function hasChat (id) {
        return angular.isObject(chats[id]);
    }

    function getChatPhoto(id) {
        var chat = getChat(id);

        if (cachedPhotoLocations[id] === undefined) {
            cachedPhotoLocations[id] = chat && chat.photo && chat.photo.photo_small || {empty: true};
        }

        return {
            placeholder: 'img/placeholders/GroupAvatar' + Math.ceil(chat.num / 2) + '@2x.png',
            location: cachedPhotoLocations[id]
        };
    }

    function getChatString (id) {
        var chat = getChat(id);
        if (isChannel(id)) {
            return (isMegagroup(id) ? 's' : 'c') + id + '_' + chat.access_hash;
        }
        return 'g' + id;
    }

    function wrapForFull (id, fullChat) {
        var chatFull = angular.copy(fullChat),
            chat = getChat(id);

        if (chatFull.participants && chatFull.participants._ == 'chatParticipants') {
            MtpApiManager.getUserID().then(function (myID) {
                var isAdmin = chat.pFlags.creator || chat.pFlags.admins_enabled && chat.pFlags.admin;
                angular.forEach(chatFull.participants.participants, function(participant){
                    participant.canLeave = myID == participant.user_id;
                    participant.canKick = !participant.canLeave && (
                            chat.pFlags.creator ||
                            participant._ == 'chatParticipant' && (isAdmin || myID == participant.inviter_id)
                        );

                    // just for order by last seen
                    participant.user = AppUsersManager.getUser(participant.user_id);
                });
            });
        }
        if (chatFull.participants && chatFull.participants._ == 'channelParticipants') {
            var isAdmin = chat.pFlags.creator || chat.pFlags.editor || chat.pFlags.moderator;
            angular.forEach(chatFull.participants.participants, function(participant) {
                participant.canLeave = !chat.pFlags.creator && participant._ == 'channelParticipantSelf';
                participant.canKick = isAdmin && participant._ == 'channelParticipant';

                // just for order by last seen
                participant.user = AppUsersManager.getUser(participant.user_id);
            });
        }

        // TODO
        //if (chatFull.about) {
        //    chatFull.rAbout = RichTextProcessor.wrapRichText(chatFull.about, {noLinebreaks: true});
        //}

        chatFull.peerString = getChatString(id);
        chatFull.chat = chat;

        return chatFull;
    }

    function openChat (chatID, accessHash) {
        var scope = $rootScope.$new();
        scope.chatID = chatID;

        if (isChannel(chatID)) {
            var modalInstance = $modal.open({
                templateUrl: templateUrl('channel_modal'),
                controller: 'ChannelModalController',
                scope: scope,
                windowClass: 'chat_modal_window channel_modal_window mobile_modal'
            });
        } else {
            var modalInstance = $modal.open({
                templateUrl: templateUrl('chat_modal'),
                controller: 'ChatModalController',
                scope: scope,
                windowClass: 'chat_modal_window mobile_modal'
            });
        }
    }

    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateChannel':
                var channelID = update.channel_id;
                $rootScope.$broadcast('channel_settings', {channelID: channelID});
                break;
        }
    });

    return {
        saveApiChats: saveApiChats,
        saveApiChat: saveApiChat,
        getChat: getChat,
        isChannel: isChannel,
        isMegagroup: isMegagroup,
        hasRights: hasRights,
        saveChannelAccess: saveChannelAccess,
        saveIsMegagroup: saveIsMegagroup,
        getChatInput: getChatInput,
        getChannelInput: getChannelInput,
        getChatPhoto: getChatPhoto,
        getChatString: getChatString,
        resolveUsername: resolveUsername,
        hasChat: hasChat,
        wrapForFull: wrapForFull,
        openChat: openChat
    }
})();