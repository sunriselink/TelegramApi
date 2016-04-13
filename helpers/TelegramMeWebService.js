var _TelegramMeWebService = (function () {
    var disabled =  Config.Modes.test ||
        Config.App.domains.indexOf(location.hostname) == -1 ||
        location.protocol != 'http:' && location.protocol != 'https:' ||
        location.protocol == 'https:' && location.hostname != 'web.telegram.org';

    function sendAsyncRequest (canRedirect) {
        if (disabled) {
            return false;
        }
        _Storage.get('tgme_sync').then(function (curValue) {
            var ts = tsNow(true);
            if (canRedirect &&
                curValue &&
                curValue.canRedirect == canRedirect &&
                curValue.ts + 86400 > ts) {
                return false;
            }
            _Storage.set({tgme_sync: {canRedirect: canRedirect, ts: ts}});

            var script = $('<script>').appendTo('body')
                .on('load error', function() {
                    script.remove();
                })
                .attr('src', '//telegram.me/_websync_?authed=' + (canRedirect ? '1' : '0'));
        });
    };

    return {
        setAuthorized: sendAsyncRequest
    };
})();