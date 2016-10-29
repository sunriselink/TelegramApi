var _MtpApiFileManager = (function () {
    var cachedFs = false;
    var cachedFsPromise = false;
    var cachedSavePromises = {};
    var cachedDownloadPromises = {};
    var cachedDownloads = {};

    var downloadPulls = {};
    var downloadActives = {};

    function downloadRequest(dcID, cb, activeDelta) {
        if (downloadPulls[dcID] === undefined) {
            downloadPulls[dcID] = [];
            downloadActives[dcID] = 0
        }
        var downloadPull = downloadPulls[dcID];
        var deferred = $q.defer();
        downloadPull.push({cb: cb, deferred: deferred, activeDelta: activeDelta});
        setZeroTimeout(function () {
            downloadCheck(dcID);
        });

        return deferred.promise;
    };

    var index = 0;

    function downloadCheck(dcID) {
        var downloadPull = downloadPulls[dcID];
        var downloadLimit = dcID == 'upload' ? 11 : 5;

        if (downloadActives[dcID] >= downloadLimit || !downloadPull || !downloadPull.length) {
            return false;
        }

        var data = downloadPull.shift(),
            activeDelta = data.activeDelta || 1;

        downloadActives[dcID] += activeDelta;

        var a = index++;
        data.cb()
            .then(function (result) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.resolve(result);

            }, function (error) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.reject(error);
            })
    };

    function getFileName(location) {
        switch (location._) {
            case 'inputDocumentFileLocation':
                var fileName = (location.file_name || '').split('.', 2);
                var ext = fileName[1] || '';
                if (location.sticker && !WebpManager.isWebpSupported()) {
                    ext += '.png';
                }
                return fileName[0] + '_' + location.id + '.' + ext;

            default:
                if (!location.volume_id) {
                    console.trace('Empty location', location);
                }
                var ext = 'jpg';
                if (location.sticker) {
                    ext = WebpManager.isWebpSupported() ? 'webp' : 'png';
                }
                return location.volume_id + '_' + location.local_id + '_' + location.secret + '.' + ext;
        }
    };

    function getTempFileName(file) {
        var size = file.size || -1;
        var random = nextRandomInt(0xFFFFFFFF);
        return '_temp' + random + '_' + size;
    };

    function getCachedFile (location) {
        if (!location) {
            return false;
        }
        var fileName = getFileName(location);

        return cachedDownloads[fileName] || false;
    }

    function getFileStorage () {
        if (!Config.Modes.memory_only) {
            if (_TmpfsFileStorage.isAvailable()) {
                return _TmpfsFileStorage;
            }
            if (_IdbFileStorage.isAvailable()) {
                return _IdbFileStorage;
            }
        }
        return _MemoryFileStorage;
    }

    function saveSmallFile (location, bytes) {
        var fileName = getFileName(location),
            mimeType = 'image/jpeg';

        if (!cachedSavePromises[fileName]) {
            cachedSavePromises[fileName] = getFileStorage().saveFile(fileName, bytes).then(function (blob) {
                return cachedDownloads[fileName] = blob;
            }, function (error) {
                delete cachedSavePromises[fileName];
            });
        }
        return cachedSavePromises[fileName];
    }

    function downloadSmallFile(location) {
        if (!_FileManager.isAvailable()) {
            return $q.reject({type: 'BROWSER_BLOB_NOT_SUPPORTED'});
        }
        var fileName = getFileName(location),
            mimeType = location.sticker ? 'image/webp' : 'image/jpeg',
            cachedPromise = cachedSavePromises[fileName] || cachedDownloadPromises[fileName];

        if (cachedPromise) {
            return cachedPromise;
        }

        var fileStorage = getFileStorage();

        return cachedDownloadPromises[fileName] = fileStorage.getFile(fileName).then(function (blob) {
            return cachedDownloads[fileName] = blob;
        }, function () {
            var downloadPromise = downloadRequest(location.dc_id, function () {
                var inputLocation = location;
                if (!inputLocation._ || inputLocation._ == 'fileLocation') {
                    inputLocation = extend({}, location, {_: 'inputFileLocation'});
                }
                // console.log('next small promise');
                return _MtpApiManager.invokeApi('upload.getFile', {
                    location: inputLocation,
                    offset: 0,
                    limit: 1024 * 1024
                }, {
                    dcID: location.dc_id,
                    fileDownload: true,
                    createNetworker: true,
                    noErrorBox: true
                });
            });

            var processDownloaded = function (bytes) {
                if (!location.sticker || WebpManager.isWebpSupported()) {
                    return _qSync.when(bytes);
                }
                return WebpManager.getPngBlobFromWebp(bytes);
            };

            return fileStorage.getFileWriter(fileName, mimeType).then(function (fileWriter) {
                return downloadPromise.then(function (result) {
                    return processDownloaded(result.bytes).then(function (proccessedResult) {
                        return _FileManager.write(fileWriter, proccessedResult).then(function () {
                            return cachedDownloads[fileName] = fileWriter.finalize();
                        });
                    })
                });
            });
        });
    }

    function getDownloadedFile(location, size) {
        var fileStorage = getFileStorage(),
            fileName = getFileName(location);

        return fileStorage.getFile(fileName, size);
    }

    function downloadFile (dcID, location, size, options) {
        if (!_FileManager.isAvailable()) {
            return $q.reject({type: 'BROWSER_BLOB_NOT_SUPPORTED'});
        }

        options = options || {};

        var processSticker = false;
        if (location.sticker && !WebpManager.isWebpSupported()) {
            if (options.toFileEntry || size > 524288) {
                delete location.sticker;
            } else {
                processSticker = true;
                options.mime = 'image/png';
            }
        }

        // console.log(dT(), 'Dload file', dcID, location, size);
        var fileName = getFileName(location),
            toFileEntry = options.toFileEntry || null,
            cachedPromise = cachedSavePromises[fileName] || cachedDownloadPromises[fileName];

        var fileStorage = getFileStorage();

        // console.log(dT(), 'fs', fileStorage.name, fileName, cachedPromise);

        if (cachedPromise) {
            if (toFileEntry) {
                return cachedPromise.then(function (blob) {
                    return _FileManager.copy(blob, toFileEntry);
                })
            }
            return cachedPromise;
        }

        var deferred = $q.defer(),
            canceled = false,
            resolved = false,
            mimeType = options.mime || 'image/jpeg',
            cacheFileWriter,
            errorHandler = function (error) {
                deferred.reject(error);
                errorHandler = noop;
                if (cacheFileWriter &&
                    (!error || error.type != 'DOWNLOAD_CANCELED')) {
                    cacheFileWriter.truncate(0);
                }
            };


        fileStorage.getFile(fileName, size).then(function (blob) {
            if (toFileEntry) {
                _FileManager.copy(blob, toFileEntry).then(function () {
                    deferred.resolve();
                }, errorHandler);
            } else {
                deferred.resolve(cachedDownloads[fileName] = blob);
            }
        }, function () {
            var fileWriterPromise = toFileEntry ? _FileManager.getFileWriter(toFileEntry) : fileStorage.getFileWriter(fileName, mimeType);

            var processDownloaded = function (bytes) {
                if (!processSticker) {
                    return _qSync.when(bytes);
                }
                return WebpManager.getPngBlobFromWebp(bytes);
            };

            fileWriterPromise.then(function (fileWriter) {
                cacheFileWriter = fileWriter;
                var limit = 524288,
                    offset,
                    startOffset = 0,
                    writeFilePromise = $q.when(),
                    writeFileDeferred;
                if (fileWriter.length) {
                    startOffset = fileWriter.length;
                    if (startOffset >= size) {
                        if (toFileEntry) {
                            deferred.resolve();
                        } else {
                            deferred.resolve(cachedDownloads[fileName] = fileWriter.finalize());
                        }
                        return;
                    }
                    fileWriter.seek(startOffset);
                    deferred.notify({done: startOffset, total: size});
                }
                for (offset = startOffset; offset < size; offset += limit) {
                    writeFileDeferred = $q.defer();
                    (function (isFinal, offset, writeFileDeferred, writeFilePromise) {
                        return downloadRequest(dcID, function () {
                            if (canceled) {
                                return $q.when();
                            }
                            return _MtpApiManager.invokeApi('upload.getFile', {
                                location: location,
                                offset: offset,
                                limit: limit
                            }, {
                                dcID: dcID,
                                fileDownload: true,
                                singleInRequest: window.safari !== undefined,
                                createNetworker: true
                            });
                        }, 2).then(function (result) {
                            writeFilePromise.then(function () {
                                if (canceled) {
                                    return $q.when();
                                }
                                return processDownloaded(result.bytes).then(function (processedResult) {
                                    return _FileManager.write(fileWriter, processedResult).then(function () {
                                        writeFileDeferred.resolve();
                                    }, errorHandler).then(function () {
                                        if (isFinal) {
                                            resolved = true;
                                            if (toFileEntry) {
                                                deferred.resolve();
                                            } else {
                                                deferred.resolve(cachedDownloads[fileName] = fileWriter.finalize());
                                            }
                                        } else {
                                            deferred.notify({done: offset + limit, total: size});
                                        };
                                    });
                                })
                            });
                        });
                    })(offset + limit >= size, offset, writeFileDeferred, writeFilePromise);
                    writeFilePromise = writeFileDeferred.promise;
                }
            });
        });

        deferred.promise.cancel = function () {
            if (!canceled && !resolved) {
                canceled = true;
                delete cachedDownloadPromises[fileName];
                errorHandler({type: 'DOWNLOAD_CANCELED'});
            }
        }

        if (!toFileEntry) {
            cachedDownloadPromises[fileName] = deferred.promise;
        }

        return deferred.promise;
    }

    function uploadFile (file) {
        var fileSize    = file.size,
            isBigFile   = fileSize >= 10485760,
            canceled    = false,
            resolved    = false,
            doneParts   = 0,
            partSize    = 262144, // 256 Kb
            activeDelta = 2;

        if(!fileSize) {
            return $q.reject({type: 'EMPTY_FILE'});
        }

        if (fileSize > 67108864) {
            partSize = 524288;
            activeDelta = 4;
        }
        else if (fileSize < 102400) {
            partSize = 32768;
            activeDelta = 1;
        }
        var totalParts = Math.ceil(fileSize / partSize);

        if (totalParts > 3000) {
            return $q.reject({type: 'FILE_TOO_BIG'});
        }

        var fileID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            deferred = $q.defer(),
            errorHandler = function (error) {
                // console.error('Up Error', error);
                deferred.reject(error);
                canceled = true;
                errorHandler = noop;
            },
            part = 0,
            offset,
            resultInputFile = {
                _: isBigFile ? 'inputFileBig' : 'inputFile',
                id: fileID,
                parts: totalParts,
                name: file.name,
                md5_checksum: ''
            };


        for (offset = 0; offset < fileSize; offset += partSize) {
            (function (offset, part) {
                downloadRequest('upload', function () {
                    var uploadDeferred = $q.defer();

                    var reader = new FileReader();
                    var blob = file.slice(offset, offset + partSize);

                    reader.onloadend = function (e) {
                        if (canceled) {
                            uploadDeferred.reject();
                            return;
                        }
                        if (e.target.readyState != FileReader.DONE) {
                            return;
                        }
                        _MtpApiManager.invokeApi(isBigFile ? 'upload.saveBigFilePart' : 'upload.saveFilePart', {
                            file_id: fileID,
                            file_part: part,
                            file_total_parts: totalParts,
                            bytes: e.target.result
                        }, {
                            startMaxLength: partSize + 256,
                            fileUpload: true,
                            singleInRequest: true
                        }).then(function (result) {
                            doneParts++;
                            uploadDeferred.resolve();
                            if (doneParts >= totalParts) {
                                deferred.resolve(resultInputFile);
                                resolved = true;
                            } else {
                                console.log(dT(), 'Progress', doneParts * partSize / fileSize);
                                deferred.notify({done: doneParts * partSize, total: fileSize});
                            }
                        }, errorHandler);
                    };

                    reader.readAsArrayBuffer(blob);

                    return uploadDeferred.promise;
                }, activeDelta);
            })(offset, part++);
        }

        deferred.promise.cancel = function () {
            console.log('cancel upload', canceled, resolved);
            if (!canceled && !resolved) {
                canceled = true;
                errorHandler({type: 'UPLOAD_CANCELED'});
            }
        }

        return deferred.promise;
    }

    return {
        getCachedFile: getCachedFile,
        getDownloadedFile: getDownloadedFile,
        getFileName: getFileName,
        downloadFile: downloadFile,
        downloadSmallFile: downloadSmallFile,
        saveSmallFile: saveSmallFile,
        uploadFile: uploadFile
    };
})();