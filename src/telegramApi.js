var telegramApi = (function () {
    var options = {dcID: 2, createNetworker: true};
    var photoTypes = [
        'base64',
        'blob',
        'byteArray'
    ];

    return {
        checkPhone: checkPhone,
        createChat: createChat,
        createChannel: createChannel,
        deleteMessages: deleteMessages,
        downloadDocument: downloadDocument,
        downloadPhoto: downloadPhoto,
        editChannelAdmin: editChannelAdmin,
        editChannelTitle: editChannelTitle,
        editChannelPhoto: editChannelPhoto,
        editChatAdmin: editChatAdmin,
        editChatTitle: editChatTitle,
        editChatPhoto: editChatPhoto,
        getChatLink: getChatLink,
        getDocumentPreview: getDocumentPreview,
        getFullChat: getFullChat,
        getHistory: getHistory,
        getPeerByID: getPeerByID,
        getUserInfo: getUserInfo,
        getUserPhoto: getUserPhoto,
        joinChat: joinChat,
        sendCode: sendCode,
        sendFile: sendFile,
        sendMessage: sendMessage,
        sendSms: sendSms,
        setConfig: setConfig,
        signIn: signIn,
        signUp: signUp,
        startBot: startBot,
        subscribe: subscribe,
        unSubscribe: unSubscribe,
        logOut: logOut
    };

    /* Public Functions */

    function sendCode(phone_number) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone_number,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options).then(defer.resolve, defer.reject);

        return defer.promise();
    }

    function signIn(phone_number, phone_code_hash, phone_code) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function signUp(phone_number, phone_code_hash, phone_code, first_name, last_name) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.signUp', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code,
            first_name: first_name || '',
            last_name: last_name || ''
        }, options).then(function (result) {
            _MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function sendMessage(id, message) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: _AppPeersManager.getInputPeerByID(id),
            message: message,
            random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            reply_to_msg_id: 0,
            entities: []
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function startBot(botName) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1})
            .then(function (result) {
                _AppUsersManager.saveApiUsers(result.users);
                sendMessage(result.users[0].id, '/start').then(defer.resolve, defer.reject);
            }, function (err) {
                defer.reject(err);
            });

        return defer.promise();
    }

    function sendSms(phone_number, phone_code_hash) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.sendSms', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash
        }, options).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function setConfig(config) {
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
        });
    }

    function createChat(title, userIDs) {
        var defer = $.Deferred();

        title = title || '';
        userIDs = userIDs || [];

        if (!Array.isArray(userIDs)) {
            throw new Error('[userIDs] is not array');
        }

        var inputUsers = [];

        for (var i = 0; i < userIDs.length; i++) {
            inputUsers.push(_AppUsersManager.getUserInput(userIDs[i]))
        }

        _MtpApiManager.invokeApi('messages.createChat', {
            title: title,
            users: inputUsers
        }).then(function (updates) {
            if (updates.chats && updates.chats[0]) {
                return _MtpApiManager.invokeApi('messages.toggleChatAdmins', {
                    chat_id: updates.chats[0].id,
                    enabled: true
                });
            } else {
                return updates;
            }
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getChatLink(chatID, forse) {
        var defer = $.Deferred();

        forse = forse || false;

        _AppProfileManager.getChatInviteLink(chatID, forse).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getUserInfo() {
        var defer = $.Deferred();

        _MtpApiManager.getUserID().then(function (id) {
            var user = _AppUsersManager.getUser(id);

            if (!user.id || !user.deleted) {
                defer.resolve(user);
            } else {
                _MtpApiManager.invokeApi('users.getFullUser', {
                    id: {_: 'inputUserSelf'}
                }).then(function (userInfoFull) {
                    _AppUsersManager.saveApiUser(userInfoFull.user);
                    defer.resolve(_AppUsersManager.getUser(id));
                });
            }
        });

        return defer.promise();
    }

    function getUserPhoto(type, size) {
        type = type || 'base64';

        if (photoTypes.indexOf(type) == -1) {
            throw new Error('Invalid photo type "' + type + '"');
        }

        var deferred = $.Deferred();

        getUserInfo().then(function (user) {
            if (user.photo) {
                var photo = size === 'small'
                    ? user.photo.photo_small
                    : user.photo.photo_big;
                var location = {
                    _: "inputFileLocation",
                    local_id: photo.local_id,
                    secret: photo.secret,
                    volume_id: photo.volume_id
                };
                var params = {
                    dcID: options.dcID,
                    fileDownload: true,
                    singleInRequest: window.safari !== undefined,
                    createNetworker: true
                };
                _MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: 0,
                    limit: 524288
                }, params).then(function (result) {
                    switch (type) {
                        case 'byteArray':
                            deferred.resolve(result.bytes);
                            break;
                        case 'base64':
                            deferred.resolve("data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, result.bytes)));
                            break;
                        case 'blob':
                            deferred.resolve(new Blob([result.bytes], {type: 'image/jpeg'}));
                            break;
                    }
                }, function () {
                    deferred.resolve(null);
                });
            } else {
                deferred.resolve(null);
            }
        });

        return deferred.promise();
    }

    function logOut() {
        var defer = $.Deferred();

        _MtpApiManager.logOut().then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function createChannel(title, about) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('channels.createChannel', {
            title: title || '',
            flags: 0,
            about: about || ''
        }, options).then(function (data) {
            if ($.isArray(data.chats)) {
                _AppChatsManager.saveApiChats(data.chats);
            }
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getHistory(params) {
        var defer = $.Deferred();

        params = params || {};
        params.id = params.id || 0;
        params.take = params.take || 15;
        params.skip = params.skip || 0;
        params.type = params.type || 'chat';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        _MtpApiManager.invokeApi('messages.getHistory', {
            peer: _AppPeersManager.getInputPeerByID(params.id),
            offset_id: 0,
            add_offset: params.skip,
            limit: params.take
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function sendFile(params) {
        var defer = $.Deferred();

        params = params || {};
        params.id = params.id || 0;
        params.type = params.type || 'chat';
        params.file = params.file || {};
        params.caption = params.caption || '';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        _MtpApiFileManager.uploadFile(params.file).then(function (inputFile) {
            var file = params.file;

            inputFile.name = file.name;

            var inputMedia = {
                _: 'inputMediaUploadedDocument',
                file: inputFile,
                mime_type: file.type,
                caption: params.caption,
                attributes: [
                    {_: 'documentAttributeFilename', file_name: file.name}
                ]
            };

            return _MtpApiManager.invokeApi('messages.sendMedia', {
                peer: _AppPeersManager.getInputPeerByID(params.id),
                media: inputMedia,
                random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
            });
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function downloadDocument(doc, progress) {
        doc = doc || {};
        doc.id = doc.id || 0;
        doc.access_hash = doc.access_hash || 0;
        doc.attributes = doc.attributes || [];
        doc.size = doc.size || 0;

        if (!$.isFunction(progress)) {
            progress = function () {
            };
        }

        var location = {
            _: 'inputDocumentFileLocation',
            id: doc.id,
            access_hash: doc.access_hash
        };
        var fileName = 'FILE';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var done = $.Deferred();
        var bytes = [];

        if (doc.size > size) {
            throw new Error('Big file not supported');
        }

        size = doc.size;

        doc.attributes.forEach(function (attr) {
            if (attr._ == 'documentAttributeFilename') {
                fileName = attr.file_name;
            }
        });

        function download() {
            if (offset < size) {
                _MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: offset,
                    limit: limit
                }).then(function (result) {
                    bytes.push(result.bytes);
                    offset += limit;
                    progress(offset < size ? offset : size, size);
                    download();
                });
            } else {
                _downloadFile(bytes, fileName, done);
            }
        }

        setTimeout(download, 0);

        return done.promise();
    }

    function joinChat(link) {
        var defer = $.Deferred();
        var regex;
        var hash;

        if (regex = link.match(/^https:\/\/telegram.me\/joinchat\/([\s\S]*)/)) {
            hash = regex[1];
        } else {
            hash = link;
        }

        _MtpApiManager.invokeApi('messages.importChatInvite', {hash: hash}).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChatAdmin(chatID, userID, isAdmin) {
        var defer = $.Deferred();

        if (typeof isAdmin == 'undefined') {
            isAdmin = true;
        }

        isAdmin = !!isAdmin;
        chatID = _AppChatsManager.getChatInput(chatID);
        userID = _AppUsersManager.getUserInput(userID);

        _MtpApiManager.invokeApi('messages.editChatAdmin', {
            chat_id: chatID,
            user_id: userID,
            is_admin: isAdmin
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChatTitle(chat_id, title) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.editChatTitle', {
            chat_id: chat_id,
            title: title
        }).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChannelAdmin(channel_id, user_id) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('channels.editAdmin', {
            channel: _AppChatsManager.getChannelInput(channel_id),
            user_id: _AppUsersManager.getUserInput(user_id),
            role: {
                _: 'channelRoleEditor'
            }
        }).then(function (updates) {
            defer.resolve(updates);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function getFullChat(chat_id) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.getFullChat', {chat_id: chat_id}).then(function (data) {
            defer.resolve(data);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function downloadPhoto(photo, progress) {
        var photoSize = photo.sizes[photo.sizes.length - 1];
        var location = {
            _: 'inputFileLocation',
            local_id: photoSize.location.local_id,
            secret: photoSize.location.secret,
            volume_id: photoSize.location.volume_id
        };

        if (!$.isFunction(progress)) {
            progress = function () {
            };
        }

        var fileName = photo.id + '.jpg';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var done = $.Deferred();
        var bytes = [];

        if (photoSize.size > size) {
            throw new Error('Big file not supported');
        }

        size = photoSize.size;

        function download() {
            if (offset < size) {
                _MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: offset,
                    limit: limit
                }).then(function (result) {
                    bytes.push(result.bytes);
                    offset += limit;
                    progress(offset < size ? offset : size, size);
                    download();
                });
            } else {
                _downloadFile(bytes, fileName, done);
            }
        }

        setTimeout(download, 0);

        return done.promise();
    }

    function editChannelTitle(channel_id, title) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('channels.editTitle', {
            channel: _AppChatsManager.getChannelInput(channel_id),
            title: title
        }).then(function (updates) {
            defer.resolve(updates);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function deleteMessages(ids) {
        if (!$.isArray(ids)) {
            ids = [ids];
        }

        var defer = $.Deferred();

        _MtpApiManager.invokeApi('messages.deleteMessages', {id: ids})
            .then(function (updates) {
                defer.resolve(updates);
            }, function (err) {
                defer.reject(err);
            });

        return defer.promise();
    }

    function subscribe(id, handler) {
        _MtpNetworkerFactory.subscribe(id, handler);
    }

    function unSubscribe(id) {
        _MtpNetworkerFactory.unSubscribe(id);
    }

    function getPeerByID(id, type) {
        type = type || 'user';

        if ((type == 'chat' || type == 'channel') && id > 0) {
            id = -id;
        }

        var peer = _AppPeersManager.getPeer(id);
        var defer = $.Deferred();

        if (!peer.deleted) {
            return defer.resolve(peer).promise();
        }

        var offsetDate = 0;
        var dialogsLoaded = 0;
        var totalCount = 0;

        (function load() {
            _MtpApiManager.invokeApi('messages.getDialogs', {
                offset_peer: {_: 'inputPeerEmpty'},
                limit: 100,
                offset_date: offsetDate
            }).then(function (result) {
                _AppChatsManager.saveApiChats(result.chats);
                _AppUsersManager.saveApiUsers(result.users);

                dialogsLoaded += result.dialogs.length;
                totalCount = result.count;

                var peer = _AppPeersManager.getPeer(id);

                if (!peer.deleted) {
                    defer.resolve(peer);
                    return;
                }

                if (totalCount && dialogsLoaded < totalCount) {
                    var dates = _aggregate(result.messages, function (msg) {
                        return msg.date;
                    });
                    offsetDate = _getMin(dates);
                    load();
                    return;
                }

                defer.reject({type: 'PEER_NOT_FOUND'});
            }, function (err) {
                defer.reject(err);
            });
        })();

        return defer.promise();
    }

    function getDocumentPreview(doc) {
        var location = doc.thumb.location;
        var limit = 524288;
        var defer = $.Deferred();

        location._ = 'inputFileLocation';

        if (doc.thumb.size > limit) {
            throw new Error('Size of document exceed limit');
        }

        _MtpApiManager.invokeApi('upload.getFile', {
            location: location,
            offset: 0,
            limit: limit
        }).then(function (result) {
            defer.resolve(result);
        }, function (err) {
            defer.reject(err);
        });

        return defer.promise();
    }

    function editChatPhoto(chat_id, photo) {
        var defer = $.Deferred();

        _MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            _MtpApiManager.invokeApi('messages.editChatPhoto', {
                chat_id: chat_id,
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            }).then(function (updates) {
                defer.resolve(updates);
            }, function (err) {
                defer.reject(err);
            });
        });

        return defer.promise();
    }

    function editChannelPhoto(channel_id, photo) {
        var defer = $.Deferred();

        _MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            _MtpApiManager.invokeApi('channels.editPhoto', {
                channel: _AppChatsManager.getChannelInput(channel_id),
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            }).then(function (updates) {
                defer.resolve(updates);
            }, function (err) {
                defer.reject(err);
            });
        });

        return defer.promise();
    }

    function checkPhone(phone_number) {
        var defer = $.Deferred();

        _MtpApiManager.invokeApi('auth.checkPhone', {phone_number: phone_number}).then(defer.resolve, defer.reject);

        return defer.promise();
    }

    /* Private Functions */

    function _downloadFile(bytes, fileName, defer) {
        // TODO: Improve
        var a = document.createElement('a');
        var blob = new Blob(bytes, {type: 'octet/stream'});

        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.click();

        setTimeout(function () {
            window.URL.revokeObjectURL(a.href);
            a.remove();
        }, 100);

        defer.resolve();
    }

    function _getMin(arr) {
        var min = arr[0];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }

    function _aggregate(arr, iterator) {
        var result = [];

        arr.forEach(function (item) {
            result.push(iterator(item));
        });

        return result;
    }
})();