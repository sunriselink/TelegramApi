var telegramApi = (function () {
    // TODO: Необходимо задавать настройки конфига и серверов тут

    var options = {dcID: 2, createNetworker: true};

    var mtpApiManager;
    var appPeersManager;
    var appUsersManager;
    var appMessagesManager;

    var _isInit = false;

    /* Public Functions */

    var sendCode = function (phone) {
        _initialize();

        return mtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options);
    };

    var signIn = function (phone, phone_hash, code) {
        _initialize();

        mtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone,
            phone_code_hash: phone_hash,
            phone_code: code
        }, options).then(function (result) {
            mtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    };

    var sendMessage = function (id, message) {
        _initialize();

        var randomID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)];

        mtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: appPeersManager.getInputPeerByID(id),
            message: message,
            random_id: randomID,
            reply_to_msg_id: 0,
            entities: []
        }); // TODO
    };

    var getDialogs = function () {
        _initialize();

        var dialogs = [];
        var defer = $.Deferred();

        appMessagesManager.getConversations('', 0, 20)
            .then(function (result) {
                for (var i = 0, ii = result.dialogs.length; i < ii; i++) {
                    dialogs.push(appPeersManager.getPeer(result.dialogs[i].peerID));
                }
                defer.resolve(dialogs);
            });

        return defer;
    };

    var startBot = function (botName) {
        _initialize();
        mtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1})
            .then(function (result) {
                appUsersManager.saveApiUsers(result.users);
                appMessagesManager.startBot(result.users[0].id, 0);
            });
    };

    /* Private Functions */

    var _initialize = function () {
        if (!_isInit) {
            try {
                mtpApiManager = _MtpApiManager;
                appMessagesManager = _AppMessagesManager;
                appPeersManager = _AppPeersManager;
                appUsersManager = _AppUsersManager;

                _isInit = true;
            } catch (err) {
                throw new Error('telegramApi is not initialized, retry call');
            }
        }
    };

    return {
        getDialogs: getDialogs,
        sendCode: sendCode,
        sendMessage: sendMessage,
        signIn: signIn,
        startBot: startBot
    };
})();