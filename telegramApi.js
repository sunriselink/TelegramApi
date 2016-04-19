var telegramApi = (function () {
    var options = {dcID: 2, createNetworker: true};

    /* Public Functions */

    var sendCode = function (phone_number) {
        return _MtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone_number,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options);
    };

    var signIn = function (phone_number, phone_code_hash, phone_code) {
        return _MtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    };

    var signUp = function (phone_number, phone_code_hash, phone_code, first_name, last_name) {
        return _MtpApiManager.invokeApi('auth.signUp', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code,
            first_name: first_name || '',
            last_name: last_name || ''
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    };

    var sendMessage = function (id, message) {
        return _MtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: _AppPeersManager.getInputPeerByID(id),
            message: message,
            random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            reply_to_msg_id: 0,
            entities: []
        }); // TODO
    };

    var getDialogs = function () {
        var dialogs = [];

        return _AppMessagesManager.getConversations('', 0, 20)
            .then(function (result) {
                for (var i = 0, ii = result.dialogs.length; i < ii; i++) {
                    dialogs.push(_AppPeersManager.getPeer(result.dialogs[i].peerID));
                }
                return dialogs;
            });
    };

    var startBot = function (botName) {
        return _MtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1})
            .then(function (result) {
                _AppUsersManager.saveApiUsers(result.users);
                _AppMessagesManager.startBot(result.users[0].id, 0);
            });
    };

    var sendSms = function (phone_number, phone_code_hash) {
        return _MtpApiManager.invokeApi('auth.sendSms', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash
        }, options)
    };

    var setConfig = function (config) {
        config = config || {};

        config.app = config.app || {};
        config.server = config.server || {};

        config.server.test = config.server.test || [];
        config.server.production = config.server.production || [];

        Config.App.id = config.app.id;
        Config.App.hash = config.app.hash;

        Config.Server.Test = config.server.test;
        Config.Server.Production = config.server.production;

        _MtpApiManager.invokeApi('help.getNearestDc', {}, options).then(function (nearestDcResult) {
            if (nearestDcResult.nearest_dc != nearestDcResult.this_dc) {
                _MtpApiManager.getNetworker(nearestDcResult.nearest_dc, {createNetworker: true});
            }
        })
    };

    var createChat = function (title, userIDs) {
        title = title || '';
        userIDs = userIDs || [];

        if (!Array.isArray(userIDs)) {
            throw new Error('[userIDs] is not array');
        }

        var inputUsers = [];

        for (var i = 0; i < userIDs.length; i++) {
            inputUsers.push(_AppUsersManager.getUserInput(userIDs[i]))
        }

        return _MtpApiManager.invokeApi('messages.createChat', {
            title: title,
            users: inputUsers
        }).then(function (updates) {
            _ApiUpdatesManager.processUpdateMessage(updates);
        });
    };

    var addChatUser = function (chatID, userID) {
        return _MtpApiManager.invokeApi('messages.addChatUser', {
            chat_id: _AppChatsManager.getChatInput(chatID),
            user_id: _AppUsersManager.getUserInput(userID),
            fwd_limit: 100
        }).then(function (updates) {
            _ApiUpdatesManager.processUpdateMessage(updates);
        });
    };

    var getChatLink = function (chatID) {
        return _AppProfileManager.getChatInviteLink(chatID);
    };

    var updateUsername = function (username) {
        return _MtpApiManager.invokeApi('account.updateUsername', {
            username: username || ''
        }).then(function (user) {
            _AppUsersManager.saveApiUser(user);
        });
    };

    var getUserInfo = function () {
        return _MtpApiManager.getUserID().then(function (id) {
            return _AppUsersManager.getUser(id);
        });
    };

    return {
        addChatUser: addChatUser,
        createChat: createChat,
        getChatLink: getChatLink,
        getDialogs: getDialogs,
        getUserInfo: getUserInfo,
        sendCode: sendCode,
        sendMessage: sendMessage,
        sendSms: sendSms,
        signIn: signIn,
        signUp: signUp,
        setConfig: setConfig,
        startBot: startBot,
        updateUsername: updateUsername
    };
})();