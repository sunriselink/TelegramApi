var _AppUsersManager = (function () {
    var users = {},
        usernames = {},
        userAccess = {},
        cachedPhotoLocations = {},
        contactsFillPromise,
        contactsList,
        contactsIndex = SearchIndexManager.createIndex(),
        myID,
        serverTimeOffset = 0;

    _Storage.get('server_time_offset').then(function (to) {
        if (to) {
            serverTimeOffset = to;
        }
    });
    
    _MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });

    function fillContacts () {
        if (contactsFillPromise) {
            return contactsFillPromise;
        }
        return contactsFillPromise = _MtpApiManager.invokeApi('contacts.getContacts', {
            hash: ''
        }).then(function (result) {
            var userID, searchText, i;
            contactsList = [];
            saveApiUsers(result.users);

            for (var i = 0; i < result.contacts.length; i++) {
                userID = result.contacts[i].user_id;
                contactsList.push(userID);
                SearchIndexManager.indexObject(userID, getUserSearchText(userID), contactsIndex);
            }

            return contactsList;
        });
    }

    function getUserSearchText (id) {
        var user = users[id];
        if (!user) {
            return false;
        }

        return (user.first_name || '') + ' ' + (user.last_name || '') + ' ' + (user.phone || '') + ' ' + (user.username || '');
    }

    function getContacts (query) {
        return fillContacts().then(function (contactsList) {
            if (angular.isString(query) && query.length) {
                var results = SearchIndexManager.search(query, contactsIndex),
                    filteredContactsList = [];

                for (var i = 0; i < contactsList.length; i++) {
                    if (results[contactsList[i]]) {
                        filteredContactsList.push(contactsList[i])
                    }
                }
                contactsList = filteredContactsList;
            }

            return contactsList;
        });
    }

    function resolveUsername (username) {
        return usernames[username] || 0;
    }

    function saveApiUsers (apiUsers) {
        angular.forEach(apiUsers, saveApiUser);
    }

    function saveApiUser (apiUser, noReplace) {
        if (!angular.isObject(apiUser) ||
            noReplace && angular.isObject(users[apiUser.id]) && users[apiUser.id].first_name) {
            return;
        }

        var userID = apiUser.id;

        apiUser.num = (Math.abs(userID) % 8) + 1;

        if (apiUser.username) {
            var searchUsername = SearchIndexManager.cleanUsername(apiUser.username);
            usernames[searchUsername] = userID;
        }

        if (apiUser.pFlags === undefined) {
            apiUser.pFlags = {};
        }

        apiUser.sortName = apiUser.pFlags.deleted ? '' : SearchIndexManager.cleanSearchText(apiUser.first_name + ' ' + (apiUser.last_name || ''));

        var nameWords = apiUser.sortName.split(' ');
        var firstWord = nameWords.shift();
        var lastWord = nameWords.pop();
        apiUser.initials = firstWord.charAt(0) + (lastWord ? lastWord.charAt(0) : firstWord.charAt(1));

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

        if (cachedPhotoLocations[userID] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[userID], apiUser && apiUser.photo && apiUser.photo.photo_small || {empty: true});
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

    function getUser (id) {
        if (angular.isObject(id)) {
            return id;
        }
        return users[id] || {id: id, deleted: true, num: 1, access_hash: userAccess[id]};
    }

    function getSelf() {
        return getUser(myID);
    }

    function getUserInput (id) {
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
        getUserInput: getUserInput,
        resolveUsername: resolveUsername
    };
})();