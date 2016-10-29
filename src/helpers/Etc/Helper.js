var $interval = setInterval;
var $timeout = function (cb, t) {
    var defer = $.Deferred();
    var promise = defer.promise();

    promise.__timeoutID = setTimeout(function () {
        defer.resolve(cb());
    }, t || 0);

    return promise;
};
var $rootScope = {};
var $http = angular.injector(['ng']).get('$http');
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
        if ($.isArray(promises)) {
            return this.when.apply($, promises);
        }

        var p = [];
        var keys = Object.keys(promises);
        var defer = this.defer();

        for (var i = 0; i < keys.length; i++) {
            p.push(promises[keys[i]]);
        }

        this.when.apply($, p).then(function () {
            var objects = Array.prototype.slice.call(arguments);
            var result = {};

            for (var i = 0; i < keys.length; i++) {
                result[keys[i]] = objects[i];
            }

            defer.resolve(result);
        });

        return defer.promise;
    }
};

$timeout.cancel = function (promise) {
    if (!promise) {
        return;
    }

    clearTimeout(promise.__timeoutID);
};

(function () {
    var _post = $http.post;

    $http.post = function () {
        var params = Array.prototype.slice.call(arguments);
        var defer = $q.defer();

        _post.apply(this, params).then(function (data) {
            defer.resolve(data);
        }, function (error) {
            defer.reject(error);
        });

        return defer.promise;
    }
})();