var _MemoryFileStorage = (function () {
    var storage = {};

    function isAvailable() {
        return true;
    }

    function getFile(fileName, size) {
        if (storage[fileName]) {
            return $q.when(storage[fileName]);
        }
        return $q.reject(new Error('FILE_NOT_FOUND'));
    }

    function saveFile(fileName, blob) {
        return $q.when(storage[fileName] = blob);
    }

    function getFileWriter(fileName, mimeType) {
        var fakeWriter = _FileManager.getFakeFileWriter(mimeType, function (blob) {
            saveFile(fileName, blob);
        });
        return $q.when(fakeWriter);
    }

    return {
        name: 'Memory',
        isAvailable: isAvailable,
        saveFile: saveFile,
        getFile: getFile,
        getFileWriter: getFileWriter
    };
})();