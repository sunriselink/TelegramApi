var _IdleManager = (function () {
    $rootScope.idle = {isIDLE: false};

    var toPromise, started = false;

    var hidden = 'hidden';
    var visibilityChange = 'visibilitychange';
    if (typeof document.hidden !== 'undefined') {
        // default
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }

    return {
        start: start
    };

    function start () {
        if (!started) {
            started = true;
            $(window).on(visibilityChange + ' blur focus keydown mousedown touchstart', onEvent);

            setTimeout(function () {
                onEvent({type: 'blur'});
            }, 0);
        }
    }

    function onEvent (e) {
        // console.log('event', e.type);
        if (e.type == 'mousemove') {
            var e = e.originalEvent || e;
            if (e && e.movementX === 0 && e.movementY === 0) {
                return;
            }
            $(window).off('mousemove', onEvent);
        }

        var isIDLE = e.type == 'blur' || e.type == 'timeout' ? true : false;
        if (hidden && document[hidden]) {
            isIDLE = true;
        }

        $timeout.cancel(toPromise);
        if (!isIDLE) {
            // console.log('update timeout');
            toPromise = $timeout(function () {
                onEvent({type: 'timeout'});
            }, 30000);
        }

        if (e.type == 'focus' && !$rootScope.idle.afterFocus) {
            $rootScope.idle.afterFocus = true;
            setTimeout(function () {
                delete $rootScope.idle.afterFocus;
            }, 10);
        }

        if ($rootScope.idle.isIDLE == isIDLE) {
            return;
        }

        // console.log('IDLE changed', isIDLE);
        $rootScope.$apply(function () {
            $rootScope.idle.isIDLE = isIDLE;
        });

        if (isIDLE && e.type == 'timeout') {
            $(window).on('mousemove', onEvent);
        }
    }
})();