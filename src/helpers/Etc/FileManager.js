var _FileManager = (function () {
    window.URL = window.URL || window.webkitURL;
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
    var buggyUnknownBlob = navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1;

    var blobSupported = true;

    try {
        blobConstruct([], '');
    } catch (e) {
        blobSupported = false;
    }

    function isBlobAvailable () {
        return blobSupported;
    }

    function fileCopyTo (fromFileEntry, toFileEntry) {
        return getFileWriter(toFileEntry).then(function (fileWriter) {
            return fileWriteData(fileWriter, fromFileEntry).then(function () {
                return fileWriter;
            }, function (error) {
                return $q.reject(error);
                fileWriter.truncate(0);
            });
        });
    }

    function fileWriteData(fileWriter, bytes) {
        var deferred = $q.defer();

        fileWriter.onwriteend = function(e) {
            deferred.resolve();
        };
        fileWriter.onerror = function (e) {
            deferred.reject(e);
        };

        if (bytes.file) {
            bytes.file(function (file) {
                fileWriter.write(file);
            }, function (error) {
                deferred.reject(error);
            })
        }
        else if (bytes instanceof Blob) { // is file bytes
            fileWriter.write(bytes);
        }
        else {
            try {
                var blob = blobConstruct([bytesToArrayBuffer(bytes)]);
                fileWriter.write(blob);
            } catch (e) {
                deferred.reject(e);
            }
        }

        return deferred.promise;
    }

    function chooseSaveFile (fileName, ext, mimeType) {
        if (!window.chrome || !chrome.fileSystem || !chrome.fileSystem.chooseEntry) {
            return _qSync.reject();
        };
        var deferred = $q.defer();

        chrome.fileSystem.chooseEntry({
            type: 'saveFile',
            suggestedName: fileName,
            accepts: [{
                mimeTypes: [mimeType],
                extensions: [ext]
            }]
        }, function (writableFileEntry) {
            deferred.resolve(writableFileEntry);
        });

        return deferred.promise;
    }

    function getFileWriter (fileEntry) {
        var deferred = $q.defer();

        fileEntry.createWriter(function (fileWriter) {
            deferred.resolve(fileWriter);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getFakeFileWriter (mimeType, saveFileCallback) {
        var blobParts = [],
            fakeFileWriter = {
                write: function (blob) {
                    if (!blobSupported) {
                        if (fakeFileWriter.onerror) {
                            fakeFileWriter.onerror(new Error('Blob not supported by browser'));
                        }
                        return false;
                    }
                    blobParts.push(blob);
                    setZeroTimeout(function () {
                        if (fakeFileWriter.onwriteend) {
                            fakeFileWriter.onwriteend();
                        }
                    });
                },
                truncate: function () {
                    blobParts = [];
                },
                finalize: function () {
                    var blob = blobConstruct(blobParts, mimeType);
                    if (saveFileCallback) {
                        saveFileCallback(blob);
                    }
                    return blob;
                }
            };

        return fakeFileWriter;
    };

    function getUrl (fileData, mimeType) {
        // console.log(dT(), 'get url', fileData, mimeType, fileData.toURL !== undefined, fileData instanceof Blob);
        if (fileData.toURL !== undefined) {
            return fileData.toURL(mimeType);
        }
        if (fileData instanceof Blob) {
            return URL.createObjectURL(fileData);
        }
        return 'data:' + mimeType + ';base64,' + bytesToBase64(fileData);
    }

    function getByteArray(fileData) {
        if (fileData instanceof Blob) {
            var deferred = $q.defer();
            try {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    deferred.resolve(new Uint8Array(e.target.result));
                };
                reader.onerror = function (e) {
                    deferred.reject(e);
                };
                reader.readAsArrayBuffer(fileData);

                return deferred.promise;
            } catch (e) {
                return $q.reject(e);
            }
        }
        else if (fileData.file) {
            var deferred = $q.defer();
            fileData.file(function (blob) {
                getByteArray(blob).then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                })
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
        return $q.when(fileData);
    }

    function getDataUrl(blob) {
        var deferred;
        try {
            var reader = new FileReader();
            reader.onloadend = function() {
                deferred.resolve(reader.result);
            }
            reader.readAsDataURL(blob);
        } catch (e) {
            return $q.reject(e);
        }

        deferred = $q.defer();

        return deferred.promise;
    }

    function getFileCorrectUrl(blob, mimeType) {
        if (buggyUnknownBlob && blob instanceof Blob) {
            var mimeType = blob.type || blob.mimeType || mimeType || '';
            if (!mimeType.match(/image\/(jpeg|gif|png|bmp)|video\/quicktime/)) {
                return getDataUrl(blob);
            }
        }
        return _qSync.when(getUrl(blob, mimeType));
    }

    function downloadFile (blob, mimeType, fileName) {
        if (window.navigator && navigator.msSaveBlob !== undefined) {
            window.navigator.msSaveBlob(blob, fileName);
            return false;
        }

        if (window.navigator && navigator.getDeviceStorage) {
            var storageName = 'sdcard';
            var subdir = 'telegram/';
            switch (mimeType.split('/')[0]) {
                case 'video': storageName = 'videos'; break;
                case 'audio': storageName = 'music'; break;
                case 'image': storageName = 'pictures'; break;
            }
            var deviceStorage = navigator.getDeviceStorage(storageName);

            var request = deviceStorage.addNamed(blob, subdir + fileName);

            request.onsuccess = function () {
                console.log('Device storage save result', this.result);
            };
            request.onerror = function () {
            };
            return;
        }

        var popup = false;
        if (window.safari) {
            popup = window.open();
        }

        getFileCorrectUrl(blob, mimeType).then(function (url) {
            if (popup) {
                try {
                    popup.location.href = url;
                    return;
                } catch (e) {}
            }
            var anchor = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            anchor.href = url;
            anchor.target  = '_blank';
            anchor.download = fileName;
            if (anchor.dataset) {
                anchor.dataset.downloadurl = ["video/quicktime", fileName, url].join(':');
            }
            $(anchor).css({position: 'absolute', top: 1, left: 1}).appendTo('body');

            try {
                var clickEvent = document.createEvent('MouseEvents');
                clickEvent.initMouseEvent(
                    'click', true, false, window, 0, 0, 0, 0, 0
                    , false, false, false, false, 0, null
                );
                anchor.dispatchEvent(clickEvent);
            } catch (e) {
                console.error('Download click error', e);
                try {
                    anchor[0].click();
                } catch (e) {
                    window.open(url, '_blank');
                }
            }
            $timeout(function () {
                $(anchor).remove();
            }, 100);
        });
    }

    return {
        isAvailable: isBlobAvailable,
        copy: fileCopyTo,
        write: fileWriteData,
        getFileWriter: getFileWriter,
        getFakeFileWriter: getFakeFileWriter,
        chooseSave: chooseSaveFile,
        getUrl: getUrl,
        getDataUrl: getDataUrl,
        getByteArray: getByteArray,
        getFileCorrectUrl: getFileCorrectUrl,
        download: downloadFile
    };
})();