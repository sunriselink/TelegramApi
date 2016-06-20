var _TmpfsFileStorage = (function () {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    var reqFsPromise,
        fileSystem,
        storageIsAvailable = window.requestFileSystem !== undefined;

    function requestFS () {
        if (reqFsPromise) {
            return reqFsPromise;
        }

        if (!window.requestFileSystem) {
            return reqFsPromise = $q.reject({type: 'FS_BROWSER_UNSUPPORTED', description: 'requestFileSystem not present'});
        }

        var deferred = $q.defer();

        window.requestFileSystem(window.TEMPORARY, 500 * 1024 * 1024, function (fs) {
            cachedFs = fs;
            deferred.resolve();
        }, function (e) {
            storageIsAvailable = false;
            deferred.reject(e);
        });

        return reqFsPromise = deferred.promise;
    };

    function isAvailable () {
        return storageIsAvailable;
    }

    function getFile (fileName, size) {
        size = size || 1;
        return requestFS().then(function () {
            // console.log(dT(), 'get file', fileName);
            var deferred = $q.defer();
            cachedFs.root.getFile(fileName, {create: false}, function(fileEntry) {
                fileEntry.file(function(file) {
                    // console.log(dT(), 'aa', file);
                    if (file.size >= size) {
                        deferred.resolve(fileEntry);
                    } else {
                        deferred.reject(new Error('FILE_NOT_FOUND'));
                    }
                }, function (error) {
                    console.log(dT(), 'error', error);
                    deferred.reject(error);
                });
            }, function () {
                deferred.reject(new Error('FILE_NOT_FOUND'));
            });
            return deferred.promise;
        });
    }

    function saveFile (fileName, blob) {
        return getFileWriter(fileName).then(function (fileWriter) {
            return _FileManager.write(fileWriter, blob).then(function () {
                return fileWriter.finalize();
            })
        });
    }

    function getFileWriter (fileName) {
        // console.log(dT(), 'get file writer', fileName);
        return requestFS().then(function () {
            var deferred = $q.defer();
            cachedFs.root.getFile(fileName, {create: true}, function (fileEntry) {
                _FileManager.getFileWriter(fileEntry).then(function (fileWriter) {
                    fileWriter.finalize = function () {
                        return fileEntry;
                    }
                    deferred.resolve(fileWriter);
                }, function (error) {
                    storageIsAvailable = false;
                    deferred.reject(error);
                });
            }, function (error) {
                storageIsAvailable = false;
                deferred.reject(error);
            });

            return deferred.promise;
        })
    }

    requestFS();

    return {
        name: 'TmpFS',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();