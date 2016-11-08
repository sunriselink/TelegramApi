function TelegramApiModule(MtpApiManager, AppPeersManager, MtpApiFileManager, AppUsersManager, AppProfileManager, AppChatsManager, MtpNetworkerFactory, FileSaver, $q, $timeout) {
    var options = {dcID: 2, createNetworker: true};

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
        getDialogs: getDialogs,
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
        logOut: logOut,

        dT: dT,
        invokeApi: MtpApiManager.invokeApi,

        VERSION: '<%TELEGRAM-API-VERSION%>'
    };

    /* Public Functions */

    function sendCode(phone_number) {
        return MtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone_number,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options);
    }

    function signIn(phone_number, phone_code_hash, phone_code) {
        return MtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code
        }, options).then(function (result) {
            MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    }

    function signUp(phone_number, phone_code_hash, phone_code, first_name, last_name) {
        return MtpApiManager.invokeApi('auth.signUp', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code,
            first_name: first_name || '',
            last_name: last_name || ''
        }, options).then(function (result) {
            MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    }

    function sendMessage(id, message) {
        return MtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: AppPeersManager.getInputPeerByID(id),
            message: message,
            random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            reply_to_msg_id: 0,
            entities: []
        });
    }

    function startBot(botName) {
        return MtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1}).then(function (result) {
            AppUsersManager.saveApiUsers(result.users);
            return sendMessage(result.users[0].id, '/start');
        });
    }

    function sendSms(phone_number, phone_code_hash) {
        return MtpApiManager.invokeApi('auth.sendSms', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash
        }, options);
    }

    function setConfig(config) {
        config = config || {};

        config.app = config.app || {};
        config.server = config.server || {};

        config.server.test = config.server.test || [];
        config.server.production = config.server.production || [];

        Config.App.id = config.app.id;
        Config.App.hash = config.app.hash;
        Config.App.version = config.app.version || Config.App.version;

        Config.Server.Test = config.server.test;
        Config.Server.Production = config.server.production;

        MtpApiManager.invokeApi('help.getNearestDc', {}, options).then(function (nearestDcResult) {
            if (nearestDcResult.nearest_dc != nearestDcResult.this_dc) {
                MtpApiManager.getNetworker(nearestDcResult.nearest_dc, {createNetworker: true});
            }
        });
    }

    function createChat(title, userIDs) {
        title = title || '';
        userIDs = userIDs || [];

        if (!isArray(userIDs)) {
            throw new Error('[userIDs] is not array');
        }

        var inputUsers = [];

        for (var i = 0; i < userIDs.length; i++) {
            inputUsers.push(AppUsersManager.getUserInput(userIDs[i]))
        }

        return MtpApiManager.invokeApi('messages.createChat', {
            title: title,
            users: inputUsers
        }).then(function (updates) {
            // TODO: Remove
            if (updates.chats && updates.chats[0]) {
                return MtpApiManager.invokeApi('messages.toggleChatAdmins', {
                    chat_id: updates.chats[0].id,
                    enabled: true
                });
            } else {
                return updates;
            }
        });
    }

    function getChatLink(chatID, forse) {
        return AppProfileManager.getChatInviteLink(chatID, forse);
    }

    function getUserInfo() {
        return MtpApiManager.getUserID().then(function (id) {
            var user = AppUsersManager.getUser(id);

            if (!user.id || !user.deleted) {
                return user;
            } else {
                return MtpApiManager.invokeApi('users.getFullUser', {
                    id: {_: 'inputUserSelf'}
                }).then(function (userInfoFull) {
                    AppUsersManager.saveApiUser(userInfoFull.user);
                    return AppUsersManager.getUser(id);
                });
            }
        });
    }

    function getUserPhoto(type, size) {
        return getUserInfo().then(function (user) {
            if (!user.photo) {
                return null;
            }

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

            return MtpApiManager.invokeApi('upload.getFile', {
                location: location,
                offset: 0,
                limit: 524288
            }, params).then(function (result) {
                switch (type) {
                    case 'byteArray':
                        return result.bytes;
                    case 'base64':
                        return "data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, result.bytes));
                    case 'blob':
                        return new Blob([result.bytes], {type: 'image/jpeg'});
                    default:
                        return result.bytes;
                }
            });
        });
    }

    function logOut() {
        return MtpApiManager.logOut();
    }

    function createChannel(title, about) {
        return MtpApiManager.invokeApi('channels.createChannel', {
            title: title || '',
            flags: 0,
            about: about || ''
        }, options).then(function (data) {
            AppChatsManager.saveApiChats(data.chats);
            return data;
        });
    }

    function getHistory(params) {
        params = params || {};
        params.id = params.id || 0;
        params.take = params.take || 15;
        params.skip = params.skip || 0;
        params.type = params.type || 'chat';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        return MtpApiManager.invokeApi('messages.getHistory', {
            peer: AppPeersManager.getInputPeerByID(params.id),
            offset_id: 0,
            add_offset: params.skip,
            limit: params.take
        });
    }

    function sendFile(params) {
        params = params || {};
        params.id = params.id || 0;
        params.type = params.type || 'chat';
        params.file = params.file || {};
        params.caption = params.caption || '';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        return MtpApiFileManager.uploadFile(params.file).then(function (inputFile) {
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

            return MtpApiManager.invokeApi('messages.sendMedia', {
                peer: AppPeersManager.getInputPeerByID(params.id),
                media: inputMedia,
                random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
            });
        });
    }

    function downloadDocument(doc, progress, autosave) {
        doc = doc || {};
        doc.id = doc.id || 0;
        doc.access_hash = doc.access_hash || 0;
        doc.attributes = doc.attributes || [];
        doc.size = doc.size || 0;

        if (!isFunction(progress)) {
            progress = noop;
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
        var done = $q.defer();
        var bytes = [];

        if (doc.size > size) {
            throw new Error('Big file not supported');
        }

        size = doc.size;

        forEach(doc.attributes, function (attr) {
            if (attr._ == 'documentAttributeFilename') {
                fileName = attr.file_name;
            }
        });

        function download() {
            if (offset < size) {
                MtpApiManager.invokeApi('upload.getFile', {
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
                if (autosave) {
                    FileSaver.save(bytes, fileName);
                }
                done.resolve({
                    bytes: bytes,
                    fileName: fileName,
                    type: doc.mime_type
                });
            }
        }

        $timeout(download);

        return done.promise;
    }

    function joinChat(link) {
        var regex;
        var hash;

        if (regex = link.match(/^https:\/\/telegram.me\/joinchat\/([\s\S]*)/)) {
            hash = regex[1];
        } else {
            hash = link;
        }

        return MtpApiManager.invokeApi('messages.importChatInvite', {hash: hash});
    }

    function editChatAdmin(chatID, userID, isAdmin) {
        if (typeof isAdmin == 'undefined') {
            isAdmin = true;
        }

        isAdmin = !!isAdmin;
        chatID = AppChatsManager.getChatInput(chatID);
        userID = AppUsersManager.getUserInput(userID);

        return MtpApiManager.invokeApi('messages.editChatAdmin', {
            chat_id: chatID,
            user_id: userID,
            is_admin: isAdmin
        });
    }

    function editChatTitle(chat_id, title) {
        return MtpApiManager.invokeApi('messages.editChatTitle', {
            chat_id: chat_id,
            title: title
        });
    }

    function editChannelAdmin(channel_id, user_id) {
        return MtpApiManager.invokeApi('channels.editAdmin', {
            channel: AppChatsManager.getChannelInput(channel_id),
            user_id: AppUsersManager.getUserInput(user_id),
            role: {_: 'channelRoleEditor'}
        });
    }

    function getFullChat(chat_id) {
        return MtpApiManager.invokeApi('messages.getFullChat', {chat_id: chat_id});
    }

    function downloadPhoto(photo, progress, autosave) {
        var photoSize = photo.sizes[photo.sizes.length - 1];
        var location = {
            _: 'inputFileLocation',
            local_id: photoSize.location.local_id,
            secret: photoSize.location.secret,
            volume_id: photoSize.location.volume_id
        };

        if (!isFunction(progress)) {
            progress = noop;
        }

        var fileName = photo.id + '.jpg';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var done = $q.defer();
        var bytes = [];

        if (photoSize.size > size) {
            throw new Error('Big file not supported');
        }

        size = photoSize.size;

        function download() {
            if (offset < size) {
                MtpApiManager.invokeApi('upload.getFile', {
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
                if (autosave) {
                    FileSaver.save(bytes, fileName);
                }
                done.resolve({
                    bytes: bytes,
                    fileName: fileName,
                    type: 'image/jpeg'
                });
            }
        }

        $timeout(download);

        return done.promise;
    }

    function editChannelTitle(channel_id, title) {
        return MtpApiManager.invokeApi('channels.editTitle', {
            channel: AppChatsManager.getChannelInput(channel_id),
            title: title
        });
    }

    function deleteMessages(ids) {
        if (!isArray(ids)) {
            ids = [ids];
        }

        return MtpApiManager.invokeApi('messages.deleteMessages', {id: ids});
    }

    function subscribe(id, handler) {
        MtpNetworkerFactory.subscribe(id, handler);
    }

    function unSubscribe(id) {
        MtpNetworkerFactory.unSubscribe(id);
    }

    function getPeerByID(id, type) {
        type = type || 'user';

        if ((type == 'chat' || type == 'channel') && id > 0) {
            id = -id;
        }

        var peer = AppPeersManager.getPeer(id);
        var defer = $q.defer();

        if (!peer.deleted) {
            return defer.resolve(peer).promise;
        }

        var offsetDate = 0;
        var dialogsLoaded = 0;
        var totalCount = 0;

        (function load() {
            MtpApiManager.invokeApi('messages.getDialogs', {
                offset_peer: AppPeersManager.getInputPeerByID(0),
                limit: 100,
                offset_date: offsetDate
            }).then(function (result) {
                AppChatsManager.saveApiChats(result.chats);
                AppUsersManager.saveApiUsers(result.users);

                dialogsLoaded += result.dialogs.length;
                totalCount = result.count;

                var peer = AppPeersManager.getPeer(id);

                if (!peer.deleted) {
                    defer.resolve(peer);
                    return;
                }

                if (totalCount && dialogsLoaded < totalCount) {
                    var dates = map(result.messages, function (msg) {
                        return msg.date;
                    });
                    offsetDate = min(dates);
                    load();
                    return;
                }

                defer.reject({type: 'PEER_NOT_FOUND'});
            }, function (err) {
                defer.reject(err);
            });
        })();

        return defer.promise;
    }

    function getDocumentPreview(doc) {
        var location = doc.thumb.location;
        var limit = 524288;

        location._ = 'inputFileLocation';

        if (doc.thumb.size > limit) {
            throw new Error('Size of document exceed limit');
        }

        return MtpApiManager.invokeApi('upload.getFile', {
            location: location,
            offset: 0,
            limit: limit
        });
    }

    function editChatPhoto(chat_id, photo) {
        return MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            return MtpApiManager.invokeApi('messages.editChatPhoto', {
                chat_id: chat_id,
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            });
        });
    }

    function editChannelPhoto(channel_id, photo) {
        return MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            return MtpApiManager.invokeApi('channels.editPhoto', {
                channel: AppChatsManager.getChannelInput(channel_id),
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            });
        });
    }

    function checkPhone(phone_number) {
        return MtpApiManager.invokeApi('auth.checkPhone', {phone_number: phone_number});
    }

    function getDialogs(offset, limit) {
        offset = offset || 0;
        limit = limit || 50;

        return MtpApiManager.invokeApi('messages.getDialogs', {
            offset_peer: AppPeersManager.getInputPeerByID(0),
            offset_date: offset,
            limit: limit
        }).then(function (dialogsResult) {
            AppUsersManager.saveApiUsers(dialogsResult.users);
            AppChatsManager.saveApiChats(dialogsResult.chats);

            var dates = map(dialogsResult.messages, function (msg) {
                return msg.date;
            });

            return {
                result: dialogsResult,
                offset: min(dates)
            };
        });
    }
}

TelegramApiModule.dependencies = [
    'MtpApiManager',
    'AppPeersManager',
    'MtpApiFileManager',
    'AppUsersManager',
    'AppProfileManager',
    'AppChatsManager',
    'MtpNetworkerFactory',
    'FileSaver',
    '$q',
    '$timeout'
];
