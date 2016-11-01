var $q = {
    defer: function () {
        var deferred = $.Deferred();
        deferred.promise = deferred.promise();
        return deferred;
    },
    when: $.when,
    reject: function (result) {
        return this.defer().reject(result);
    },
    all: function (promises) {
        if (isArray(promises)) {
            return this.when.apply($, promises);
        }

        var p = [];
        var keys = Object.keys(promises);

        for (var i = 0; i < keys.length; i++) {
            p.push(promises[keys[i]]);
        }

        return this.when.apply($, p).then(function () {
            var objects = Array.prototype.slice.call(arguments);
            var result = {};

            for (var i = 0; i < keys.length; i++) {
                result[keys[i]] = objects[i];
            }

            return result;
        });
    }
};

var $interval = setInterval;

var $timeout = function (cb, t) {
    var defer = $q.defer();
    var promise = defer.promise;

    promise.__timeoutID = setTimeout(function () {
        defer.resolve(cb());
    }, t || 0);

    return promise;
};

$timeout.cancel = function (promise) {
    if (!promise) {
        return;
    }

    clearTimeout(promise.__timeoutID);
};


var $rootScope = {};

var $http = {
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

function forEach(obj, iterator, context) {
    if (!obj) {
        return;
    }

    if (isArray(obj)) {
        if (obj.forEach) {
            obj.forEach(iterator, context, obj);
        } else {
            for (var i = 0; i < obj.length; i++) {
                iterator.call(context, obj[i], i, obj);
            }
        }
    } else if (isObject(obj)) {
        for (var key in obj) {
            iterator.call(context, obj[key], key, obj);
        }
    }
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isString(value) {
    return typeof value == 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value == 'function';
}

function extend() {
    var objects = Array.prototype.slice.call(arguments);

    if (objects.length < 2) {
        return objects[0];
    }

    var obj = objects[0];

    for (var i = 1; i < objects.length; i++) {
        for (var key in objects[i]) {
            obj[key] = objects[i][key];
        }
    }

    return obj;
}

function noop() {

}
