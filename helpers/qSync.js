var _qSync = (function () {
    return {
        when: function (result) {
            return {then: function (cb) {
                return cb(result);
            }};
        },
        reject: function (result) {
            return {then: function (cb, badcb) {
                if (badcb) {
                    return badcb(result);
                }
            }};
        }
    }
})();