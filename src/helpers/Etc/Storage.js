var _Storage = (function () {
    var methods = {};
    
    forEach(['get', 'set', 'remove'], function (methodName) {
        methods[methodName] = function () {
            var deferred = $q.defer(),
                args = Array.prototype.slice.call(arguments);

            args.push(function (result) {
                deferred.resolve(result);
            });

            ConfigStorage[methodName].apply(ConfigStorage, args);

            return deferred.promise;
        };
    });

    return {
        get: methods['get'],
        set: methods['set'],
        remove: methods['remove']
    }
})();