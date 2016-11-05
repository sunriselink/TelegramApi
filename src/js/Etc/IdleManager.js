function IdleManagerModule($rootScope, $timeout, $) {
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

    function start() {
        if (!started) {
            started = true;
            $(window).on(visibilityChange + ' blur focus keydown mousedown touchstart', onEvent);

            setTimeout(function () {
                onEvent({type: 'blur'});
            }, 0);
        }
    }

    function onEvent(e) {
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

        if (isIDLE && e.type == 'timeout') {
            $(window).on('mousemove', onEvent);
        }
    }
}

IdleManagerModule.dependencies = [
    '$rootScope', 
    '$timeout',
    'jQuery'
];
