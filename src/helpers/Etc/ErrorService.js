var _ErrorService = (function () {
    var shownBoxes = 0;

    function show (params, options) {
        console.warn('Try invoke ErrorService.show', params, options);
        return; // TODO
        if (shownBoxes >= 1) {
            console.log('Skip error box, too many open', shownBoxes, params, options);
            return false;
        }

        options = options || {};
        var scope = $rootScope.$new();
        angular.extend(scope, params);

        shownBoxes++;
        var modal = $modal.open({
            templateUrl: templateUrl('error_modal'),
            scope: scope,
            windowClass: options.windowClass || 'error_modal_window'
        });

        modal.result['finally'](function () {
            shownBoxes--;
        });

        return modal;
    }

    function alert (title, description) {
        return show ({
            title: title,
            description: description
        });
    };

    function confirm (params, options) {
        console.warn('Try invoke ErrorService.confirm', params. options);
        return; // TODO
        options = options || {};
        var scope = $rootScope.$new();
        angular.extend(scope, params);

        var modal = $modal.open({
            templateUrl: templateUrl('confirm_modal'),
            scope: scope,
            windowClass: options.windowClass || 'confirm_modal_window'
        });

        return modal.result;
    };

    $(window).safeConfirm = function (params, callback) {
        if (typeof params === 'string') {
            params = {message: params};
        }
        confirm(params).then(function (result) {
            callback(result || true)
        }, function () {
            callback(false)
        });
    };

    return {
        show: show,
        alert: alert,
        confirm: confirm
    }
})();