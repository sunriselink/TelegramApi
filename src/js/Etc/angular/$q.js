function $qModule() {
    return {
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

            return this.all(p).then(function () {
                var objects = Array.prototype.slice.call(arguments);
                var result = {};

                for (var i = 0; i < keys.length; i++) {
                    result[keys[i]] = objects[i];
                }

                return result;
            });
        }
    };
}

$qModule.dependencies = [];
