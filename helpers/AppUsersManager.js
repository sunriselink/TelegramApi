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

        if (apiUser.phone) {
            apiUser.rPhone = $filter.call('phoneNumber')(apiUser.phone);
        }

        apiUser.num = (Math.abs(userID) % 8) + 1;

        // TODO

        //if (apiUser.first_name) {
        //    apiUser.rFirstName = _RichTextProcessor.wrapRichText(apiUser.first_name, {noLinks: true, noLinebreaks: true});
        //    apiUser.rFullName = apiUser.last_name ? _RichTextProcessor.wrapRichText(apiUser.first_name + ' ' + (apiUser.last_name || ''), {noLinks: true, noLinebreaks: true}) : apiUser.rFirstName;
        //} else {
        //    apiUser.rFirstName = _RichTextProcessor.wrapRichText(apiUser.last_name, {noLinks: true, noLinebreaks: true}) || apiUser.rPhone || _('user_first_name_deleted');
        //    apiUser.rFullName = _RichTextProcessor.wrapRichText(apiUser.last_name, {noLinks: true, noLinebreaks: true}) || apiUser.rPhone || _('user_name_deleted');
        //}

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
        $rootScope.$broadcast('user_update', userID);

        if (cachedPhotoLocations[userID] !== undefined) {
            safeReplaceObject(cachedPhotoLocations[userID], apiUser && apiUser.photo && apiUser.photo.photo_small || {empty: true});
        }
    };

    function saveUserAccess (id, accessHash) {
        userAccess[id] = accessHash;
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

    function isBot(id) {
        return users[id] && users[id].pFlags.bot;
    }

    function hasUser(id) {
        return angular.isObject(users[id]);
    }

    function getUserPhoto(id) {
        var user = getUser(id);

        if (id == 333000) {
            return {
                placeholder: 'img/placeholders/DialogListAvatarSystem@2x.png'
            }
        };

        if (cachedPhotoLocations[id] === undefined) {
            cachedPhotoLocations[id] = user && user.photo && user.photo.photo_small || {empty: true};
        }

        return {
            num: user.num,
            placeholder: 'img/placeholders/UserAvatar' + user.num + '@2x.png',
            location: cachedPhotoLocations[id]
        };
    }

    function getUserString (id) {
        var user = getUser(id);
        return 'u' + id + (user.access_hash ? '_' + user.access_hash : '');
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

    function updateUsersStatuses () {
        var timestampNow = tsNow(true);
        angular.forEach(users, function (user) {
            if (user.status &&
                user.status._ == 'userStatusOnline' &&
                user.status.expires < timestampNow) {
                user.status = user.status.wasStatus ||
                    {_: 'userStatusOffline', was_online: user.status.expires};
                delete user.status.wasStatus;
                $rootScope.$broadcast('user_update', user.id);
            }
        });
    }

    function forceUserOnline (id) {
        if (isBot(id)) {
            return;
        }
        var user = getUser(id);
        if (user &&
            user.status &&
            user.status._ != 'userStatusOnline' &&
            user.status._ != 'userStatusEmpty') {

            var wasStatus;
            if (user.status._ != 'userStatusOffline') {
                delete user.status.wasStatus;
                wasStatus = angular.copy(user.status);
            }
            user.status = {
                _: 'userStatusOnline',
                expires: tsNow(true) + 60,
                wasStatus: wasStatus
            };
            user.sortStatus = getUserStatusForSort(user.status);
            $rootScope.$broadcast('user_update', id);
        }
    }

    function wrapForFull (id) {
        var user = getUser(id);

        return user;
    }

    function openUser (userID, override) {
        var scope = $rootScope.$new();
        scope.userID = userID;
        scope.override = override || {};

        var modalInstance = $modal.open({
            templateUrl: templateUrl('user_modal'),
            controller: 'UserModalController',
            scope: scope,
            windowClass: 'user_modal_window mobile_modal',
            backdrop: 'single'
        });
    };

    function importContact (phone, firstName, lastName) {
        return _MtpApiManager.invokeApi('contacts.importContacts', {
            contacts: [{
                _: 'inputPhoneContact',
                client_id: '1',
                phone: phone,
                first_name: firstName,
                last_name: lastName
            }],
            replace: false
        }).then(function (importedContactsResult) {
            saveApiUsers(importedContactsResult.users);

            var foundUserID = false;
            angular.forEach(importedContactsResult.imported, function (importedContact) {
                onContactUpdated(foundUserID = importedContact.user_id, true);
            });

            return foundUserID || false;
        });
    };

    function importContacts (contacts) {
        var inputContacts = [],
            i, j;

        for (i = 0; i < contacts.length; i++) {
            for (j = 0; j < contacts[i].phones.length; j++) {
                inputContacts.push({
                    _: 'inputPhoneContact',
                    client_id: (i << 16 | j).toString(10),
                    phone: contacts[i].phones[j],
                    first_name: contacts[i].first_name,
                    last_name: contacts[i].last_name
                });
            }
        }

        return _MtpApiManager.invokeApi('contacts.importContacts', {
            contacts: inputContacts,
            replace: false
        }).then(function (importedContactsResult) {
            saveApiUsers(importedContactsResult.users);

            var result = [];
            angular.forEach(importedContactsResult.imported, function (importedContact) {
                onContactUpdated(importedContact.user_id, true);
                result.push(importedContact.user_id);
            });

            return result;
        });
    };

    function deleteContacts (userIDs) {
        var ids = []
        angular.forEach(userIDs, function (userID) {
            ids.push(getUserInput(userID))
        });
        return _MtpApiManager.invokeApi('contacts.deleteContacts', {
            id: ids
        }).then(function () {
            angular.forEach(userIDs, function (userID) {
                onContactUpdated(userID, false);
            });
        })
    }

    function onContactUpdated (userID, isContact) {
        if (angular.isArray(contactsList)) {
            var curPos = curIsContact = contactsList.indexOf(parseInt(userID)),
                curIsContact = curPos != -1;

            if (isContact != curIsContact) {
                if (isContact) {
                    contactsList.push(userID);
                    SearchIndexManager.indexObject(userID, getUserSearchText(userID), contactsIndex);
                } else {
                    contactsList.splice(curPos, 1);
                }
                $rootScope.$broadcast('contacts_update', userID);
            }
        }
    }

    function openImportContact () {
        return $modal.open({
            templateUrl: templateUrl('import_contact_modal'),
            controller: 'ImportContactModalController',
            windowClass: 'md_simple_modal_window mobile_modal'
        }).result.then(function (foundUserID) {
            if (!foundUserID) {
                return $q.reject();
            }
            return foundUserID;
        });
    };

    function setUserStatus (userID, offline) {
        if (isBot(userID)) {
            return;
        }
        var user = users[userID];
        if (user) {
            var status = offline ? {
                _: 'userStatusOffline',
                was_online: tsNow(true)
            } : {
                _: 'userStatusOnline',
                expires: tsNow(true) + 500
            };

            user.status = status;
            user.sortStatus = getUserStatusForSort(user.status);
            $rootScope.$broadcast('user_update', userID);
        }
    }


    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateUserStatus':
                var userID = update.user_id,
                    user = users[userID];
                if (user) {
                    user.status = update.status;
                    if (user.status) {
                        if (user.status.expires) {
                            user.status.expires -= serverTimeOffset;
                        }
                        if (user.status.was_online) {
                            user.status.was_online -= serverTimeOffset;
                        }
                    }
                    user.sortStatus = getUserStatusForSort(user.status);
                    $rootScope.$broadcast('user_update', userID);
                }
                break;

            case 'updateUserPhoto':
                var userID = update.user_id;
                var user = users[userID];
                if (user) {
                    forceUserOnline(userID);
                    if (!user.photo) {
                        user.photo = update.photo;
                    } else {
                        safeReplaceObject(user.photo, update.photo);
                    }

                    if (cachedPhotoLocations[userID] !== undefined) {
                        safeReplaceObject(cachedPhotoLocations[userID], update.photo && update.photo.photo_small || {empty: true});
                    }

                    $rootScope.$broadcast('user_update', userID);
                }
                break;

            case 'updateContactLink':
                onContactUpdated(update.user_id, update.my_link._ == 'contactLinkContact');
                break;
        }
    });

    $rootScope.$on('user_auth', function (e, userAuth) {
        myID = userAuth && userAuth.id || 0;
    });


    setInterval(updateUsersStatuses, 60000);

    $rootScope.$on('stateSynchronized', updateUsersStatuses);

    return {
        getContacts: getContacts,
        saveApiUsers: saveApiUsers,
        saveApiUser: saveApiUser,
        saveUserAccess: saveUserAccess,
        getUser: getUser,
        getSelf: getSelf,
        getUserInput: getUserInput,
        setUserStatus: setUserStatus,
        forceUserOnline: forceUserOnline,
        getUserPhoto: getUserPhoto,
        getUserString: getUserString,
        getUserSearchText: getUserSearchText,
        hasUser: hasUser,
        isBot: isBot,
        importContact: importContact,
        importContacts: importContacts,
        deleteContacts: deleteContacts,
        wrapForFull: wrapForFull,
        openUser: openUser,
        resolveUsername: resolveUsername,
        openImportContact: openImportContact
    }
})();