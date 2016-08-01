var _IdbFileStorage = (function () {
    $(window).indexedDB = $(window).indexedDB || $(window).webkitIndexedDB || $(window).mozIndexedDB || $(window).OIndexedDB || $(window).msIndexedDB;
    $(window).IDBTransaction = $(window).IDBTransaction || $(window).webkitIDBTransaction || $(window).OIDBTransaction || $(window).msIDBTransaction;

    var dbName = 'cachedFiles';
    var dbStoreName = 'files';
    var dbVersion = 2;
    var openDbPromise;
    var storageIsAvailable = $(window).indexedDB !== undefined &&
        $(window).IDBTransaction !== undefined;

    // IndexedDB is REALLY slow without blob support in Safari 8, no point in it
    if (storageIsAvailable &&
        navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1 &&
        navigator.userAgent.match(/Version\/[678]/)
    ) {
        storageIsAvailable = false;
    }

    var storeBlobsAvailable = storageIsAvailable || false;

    function isAvailable() {
        return storageIsAvailable;
    }

    function openDatabase() {
        if (openDbPromise) {
            return openDbPromise;
        }

        try {
            var request = indexedDB.open(dbName, dbVersion),
                deferred = $q.defer(),
                createObjectStore = function (db) {
                    db.createObjectStore(dbStoreName);
                };
            if (!request) {
                throw new Exception();
            }
        } catch (error) {
            console.error('error opening db', error.message);
            storageIsAvailable = false;
            return $q.reject(error);
        }

        var finished = false;
        setTimeout(function () {
            if (!finished) {
                request.onerror({type: 'IDB_CREATE_TIMEOUT'});
            }
        }, 3000);

        request.onsuccess = function (event) {
            finished = true;
            db = request.result;

            db.onerror = function (error) {
                storageIsAvailable = false;
                console.error('Error creating/accessing IndexedDB database', error);
                deferred.reject(error);
            };

            deferred.resolve(db);
        };

        request.onerror = function (event) {
            finished = true;
            storageIsAvailable = false;
            console.error('Error creating/accessing IndexedDB database', event);
            deferred.reject(event);
        };

        request.onupgradeneeded = function (event) {
            finished = true;
            console.warn('performing idb upgrade from', event.oldVersion, 'to', event.newVersion);
            var db = event.target.result;
            if (event.oldVersion == 1) {
                db.deleteObjectStore(dbStoreName);
            }
            createObjectStore(db);
        };

        return openDbPromise = deferred.promise;
    }

    function saveFile(fileName, blob) {
        return openDatabase().then(function (db) {
            if (!storeBlobsAvailable) {
                return saveFileBase64(db, fileName, blob);
            }

            if (!(blob instanceof Blob)) {
                blob = blobConstruct([blob]);
            }

            try {
                var objectStore = db.transaction([dbStoreName], IDBTransaction.READ_WRITE || 'readwrite').objectStore(dbStoreName),
                    request = objectStore.put(blob, fileName);
            } catch (error) {
                if (storeBlobsAvailable) {
                    storeBlobsAvailable = false;
                    return saveFileBase64(db, fileName, blob);
                }
                storageIsAvailable = false;
                return $q.reject(error);
            }

            var deferred = $q.defer();

            request.onsuccess = function (event) {
                deferred.resolve(blob);
            };

            request.onerror = function (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        });
    }

    function saveFileBase64(db, fileName, blob) {
        if (getBlobSize(blob) > 10 * 1024 * 1024) {
            return $q.reject();
        }
        if (!(blob instanceof Blob)) {
            var mimeType = blob.type || 'image/jpeg';
            var address = 'data:' + mimeType + ';base64,' + bytesToBase64(blob);
            return storagePutB64String(db, fileName, address).then(function () {
                return blob;
            });
        }

        try {
            var reader = new FileReader();
        } catch (e) {
            storageIsAvailable = false;
            return $q.reject();
        }

        var deferred = $q.defer();

        reader.onloadend = function () {
            storagePutB64String(db, fileName, reader.result).then(function () {
                deferred.resolve(blob);
            }, function (error) {
                deferred.reject(error);
            });
        };

        reader.onerror = function (error) {
            deferred.reject(error);
        };

        try {
            reader.readAsDataURL(blob);
        } catch (e) {
            storageIsAvailable = false;
            return $q.reject();
        }

        return deferred.promise;
    }

    function storagePutB64String(db, fileName, b64string) {
        try {
            var objectStore = db.transaction([dbStoreName], IDBTransaction.READ_WRITE || 'readwrite').objectStore(dbStoreName),
                request = objectStore.put(b64string, fileName);
        } catch (error) {
            storageIsAvailable = false;
            return $q.reject(error);
        }

        var deferred = $q.defer();

        request.onsuccess = function (event) {
            deferred.resolve();
        };

        request.onerror = function (error) {
            deferred.reject(error);
        };

        return deferred.promise;
    }

    function getBlobSize(blob) {
        return blob.size || blob.byteLength || blob.length;
    }

    function getFile(fileName) {
        return openDatabase().then(function (db) {
            var deferred = $q.defer(),
                objectStore = db.transaction([dbStoreName], IDBTransaction.READ || 'readonly').objectStore(dbStoreName),
                request = objectStore.get(fileName);

            request.onsuccess = function (event) {
                var result = event.target.result;
                if (result === undefined) {
                    deferred.reject();
                } else if (typeof result === 'string' &&
                    result.substr(0, 5) === 'data:') {
                    deferred.resolve(dataUrlToBlob(result));
                } else {
                    deferred.resolve(result);
                }
            };

            request.onerror = function (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        });
    }

    function getFileWriter(fileName, mimeType) {
        var fakeWriter = FileManager.getFakeFileWriter(mimeType, function (blob) {
            saveFile(fileName, blob);
        });
        return $q.when(fakeWriter);
    }

    openDatabase();

    return {
        name: 'IndexedDB',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();