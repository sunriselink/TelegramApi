function AppUsersManagerModule(Storage, MtpApiManager) {
    var users = {},
        userAccess = {},
        myID,
        serverTimeOffset = 0;

    Storage.get('server_time_offset').then(function (to) {
        if (to) {
            serverTimeOffset = to;
        }
    });

    MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });

    function saveApiUsers(apiUsers) {
        forEach(apiUsers, saveApiUser);
    }

    function saveApiUser(apiUser, noReplace) {
        if (!isObject(apiUser) || noReplace && isObject(users[apiUser.id]) && users[apiUser.id].first_name) {
            return;
        }

        var userID = apiUser.id;

        apiUser.num = (Math.abs(userID) % 8) + 1;

        if (apiUser.pFlags === undefined) {
            apiUser.pFlags = {};
        }

        if (apiUser.status) {
            if (apiUser.status.expires) {
                apiUser.status.expires -= serverTimeOffset;
            }
            if (apiUser.status.was_online) {
                apiUser.status.was_online -= serverTimeOffset;
            }
        }
        if (apiUser.pFlags.bot) {
            apiUser.sortStatus = -1;
        } else {
            apiUser.sortStatus = getUserStatusForSort(apiUser.status);
        }

        var result = users[userID];

        if (result === undefined) {
            result = users[userID] = apiUser;
        } else {
            safeReplaceObject(result, apiUser);
        }
    }

    function getUserStatusForSort(status) {
        if (status) {
            var expires = status.expires || status.was_online;
            if (expires) {
                return expires;
            }
            var timeNow = tsNow(true);
            switch (status._) {
                case 'userStatusRecently':
                    return timeNow - 86400 * 3;
                case 'userStatusLastWeek':
                    return timeNow - 86400 * 7;
                case 'userStatusLastMonth':
                    return timeNow - 86400 * 30;
            }
        }

        return 0;
    }

    function getUser(id) {
        if (isObject(id)) {
            return id;
        }
        return users[id] || {id: id, deleted: true, num: 1, access_hash: userAccess[id]};
    }

    function getSelf() {
        return getUser(myID);
    }

    function getUserInput(id) {
        var user = getUser(id);
        if (user.pFlags.self) {
            return {_: 'inputUserSelf'};
        }
        return {
            _: 'inputUser',
            user_id: id,
            access_hash: user.access_hash || 0
        };
    }

    return {
        saveApiUsers: saveApiUsers,
        saveApiUser: saveApiUser,
        getUser: getUser,
        getSelf: getSelf,
        getUserInput: getUserInput
    };
}

AppUsersManagerModule.dependencies = [
    'Storage', 
    'MtpApiManager'
];
