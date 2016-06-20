var _AppPhotosManager = (function () {
    var photos = {},
        windowW = $(window).width(),
        windowH = $(window).height();

    function savePhoto (apiPhoto, context) {
        if (context) {
            angular.extend(apiPhoto, context);
        }
        photos[apiPhoto.id] = apiPhoto;

        angular.forEach(apiPhoto.sizes, function (photoSize) {
            if (photoSize._ == 'photoCachedSize') {
                _MtpApiFileManager.saveSmallFile(photoSize.location, photoSize.bytes);

                // Memory
                photoSize.size = photoSize.bytes.length;
                delete photoSize.bytes;
                photoSize._ = 'photoSize';
            }
        });
    };

    function choosePhotoSize (photo, width, height) {
        if (Config.Navigator.retina) {
            width *= 2;
            height *= 2;
        }
        var bestPhotoSize = {_: 'photoSizeEmpty'},
            bestDiff = 0xFFFFFF;

        angular.forEach(photo.sizes, function (photoSize) {
            var diff = Math.abs(photoSize.w * photoSize.h - width * height);
            if (diff < bestDiff) {
                bestPhotoSize = photoSize;
                bestDiff = diff;
            }
        });

        // console.log('choosing', photo, width, height, bestPhotoSize);

        return bestPhotoSize;
    }

    function getUserPhotos (userID, maxID, limit) {
        var inputUser = _AppUsersManager.getUserInput(userID);
        return _MtpApiManager.invokeApi('photos.getUserPhotos', {
            user_id: inputUser,
            offset: 0,
            limit: limit || 20,
            max_id: maxID || 0
        }).then(function (photosResult) {
            _AppUsersManager.saveApiUsers(photosResult.users);
            var photoIDs = [];
            var context = {user_id: userID};
            for (var i = 0; i < photosResult.photos.length; i++) {
                savePhoto(photosResult.photos[i], context);
                photoIDs.push(photosResult.photos[i].id)
            }

            return {
                count: photosResult.count || photosResult.photos.length,
                photos: photoIDs
            };
        });
    }

    function preloadPhoto (photoID) {
        if (!photos[photoID]) {
            return;
        }
        var photo = photos[photoID];
        var fullWidth = $(window).width() - (Config.Mobile ? 20 : 32);
        var fullHeight = $(window).height() - (Config.Mobile ? 150 : 116);
        if (fullWidth > 800) {
            fullWidth -= 208;
        }
        var fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight);

        if (fullPhotoSize && !fullPhotoSize.preloaded) {
            fullPhotoSize.preloaded = true;
            if (fullPhotoSize.size) {
                return _MtpApiFileManager.downloadFile(fullPhotoSize.location.dc_id, {
                    _: 'inputFileLocation',
                    volume_id: fullPhotoSize.location.volume_id,
                    local_id: fullPhotoSize.location.local_id,
                    secret: fullPhotoSize.location.secret
                }, fullPhotoSize.size);
            } else {
                 return _MtpApiFileManager.downloadSmallFile(fullPhotoSize.location);
            }
        }

        return $q.resolve();
    };
    $rootScope.preloadPhoto = preloadPhoto;

    function getPhoto (photoID) {
        return photos[photoID] || {_: 'photoEmpty'};
    }

    function wrapForHistory (photoID, options) {
        options = options || {};
        var photo = angular.copy(photos[photoID]) || {_: 'photoEmpty'},
            width = options.website ? 100 : Math.min(windowW - 80, Config.Mobile ? 210 : 260),
            height = options.website ? 100 : Math.min(windowH - 100, Config.Mobile ? 210 : 260),
            thumbPhotoSize = choosePhotoSize(photo, width, height),
            thumb = {
                placeholder: 'img/placeholders/PhotoThumbConversation.gif',
                width: width,
                height: height
            };

        if (options.website && Config.Mobile) {
            width = 50;
            height = 50;
        }

        // console.log('chosen photo size', photoID, thumbPhotoSize);
        if (thumbPhotoSize && thumbPhotoSize._ != 'photoSizeEmpty') {
            var dim = calcImageInBox(thumbPhotoSize.w, thumbPhotoSize.h, width, height);
            thumb.width = dim.w;
            thumb.height = dim.h;
            thumb.location = thumbPhotoSize.location;
            thumb.size = thumbPhotoSize.size;
        } else {
            thumb.width = 100;
            thumb.height = 100;
        }

        photo.thumb = thumb;

        return photo;
    }

    function wrapForFull (photoID) {
        var photo = wrapForHistory(photoID);
        var fullWidth = $(window).width() - (Config.Mobile ? 0 : 32);
        var fullHeight = $(window).height() - (Config.Mobile ? 0 : 116);
        if (!Config.Mobile && fullWidth > 800) {
            fullWidth -= 208;
        }
        var fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight);
        var full = {
            placeholder: 'img/placeholders/PhotoThumbModal.gif'
        };

        full.width = fullWidth;
        full.height = fullHeight;

        if (fullPhotoSize && fullPhotoSize._ != 'photoSizeEmpty') {
            var wh = calcImageInBox(fullPhotoSize.w, fullPhotoSize.h, fullWidth, fullHeight, true);
            full.width = wh.w;
            full.height = wh.h;

            full.modalWidth = Math.max(full.width, Math.min(400, fullWidth));

            full.location = fullPhotoSize.location;
            full.size = fullPhotoSize.size;
        }

        photo.full = full;

        return photo;
    }

    function openPhoto (photoID, list) {
        if (!photoID || photoID === '0') {
            return false;
        }

        var scope = $rootScope.$new(true);

        scope.photoID = photoID;

        var controller = 'PhotoModalController';
        if (list && list.p > 0) {
            controller = 'UserpicModalController';
            scope.userID = list.p;
        }
        else if (list && list.p < 0) {
            controller = 'ChatpicModalController';
            scope.chatID = -list.p;
        }
        else if (list && list.m > 0) {
            scope.messageID = list.m;
            if (list.w) {
                scope.webpageID = list.w;
            }
        }

        var modalInstance = $modal.open({
            templateUrl: templateUrl('photo_modal'),
            windowTemplateUrl: templateUrl('media_modal_layout'),
            controller: controller,
            scope: scope,
            windowClass: 'photo_modal_window'
        });
    }

    function downloadPhoto (photoID) {
        var photo = photos[photoID],
            ext = 'jpg',
            mimeType = 'image/jpeg',
            fileName = 'photo' + photoID + '.' + ext,
            fullWidth = Math.max(screen.width || 0, $(window).width() - 36, 800),
            fullHeight = Math.max(screen.height || 0, $(window).height() - 150, 800),
            fullPhotoSize = choosePhotoSize(photo, fullWidth, fullHeight),
            inputFileLocation = {
                _: 'inputFileLocation',
                volume_id: fullPhotoSize.location.volume_id,
                local_id: fullPhotoSize.location.local_id,
                secret: fullPhotoSize.location.secret
            };

        _FileManager.chooseSave(fileName, ext, mimeType).then(function (writableFileEntry) {
            if (writableFileEntry) {
                _MtpApiFileManager.downloadFile(
                    fullPhotoSize.location.dc_id, inputFileLocation, fullPhotoSize.size, {
                        mime: mimeType,
                        toFileEntry: writableFileEntry
                    }).then(function () {
                    // console.log('file save done');
                }, function (e) {
                    console.log('photo download failed', e);
                });
            }
        }, function () {
            var cachedBlob = _MtpApiFileManager.getCachedFile(inputFileLocation);
            if (cachedBlob) {
                return _FileManager.download(cachedBlob, mimeType, fileName);
            }

            _MtpApiFileManager.downloadFile(
                fullPhotoSize.location.dc_id, inputFileLocation, fullPhotoSize.size, {mime: mimeType}
            ).then(function (blob) {
                _FileManager.download(blob, mimeType, fileName);
            }, function (e) {
                console.log('photo download failed', e);
            });
        });
    };

    $rootScope.openPhoto = openPhoto;

    return {
        savePhoto: savePhoto,
        preloadPhoto: preloadPhoto,
        getUserPhotos: getUserPhotos,
        getPhoto: getPhoto,
        choosePhotoSize: choosePhotoSize,
        wrapForHistory: wrapForHistory,
        wrapForFull: wrapForFull,
        openPhoto: openPhoto,
        downloadPhoto: downloadPhoto
    }
})();