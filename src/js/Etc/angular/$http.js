function $httpModule($q) {
    return {
        post: function (url, data) {
            var defer = $q.defer();
            var xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                var result = {data: xhr.response};
                xhr.status == 200
                    ? defer.resolve(result)
                    : defer.reject(result);
            };
            xhr.onerror = xhr.onabort = function () {
                defer.reject({status: xhr.status});
            };
            xhr.send(data);

            return defer.promise;
        }
    };
}

$httpModule.dependencies = [
    '$q'
];
