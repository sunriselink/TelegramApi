function TelegramMeWebServiceModule(Storage, $) {
    var disabled = location.protocol != 'http:' && location.protocol != 'https:';

    function sendAsyncRequest(canRedirect) {
        if (disabled) {
            return false;
        }

        Storage.get('tgme_sync').then(function (curValue) {
            var ts = tsNow(true);
            if (canRedirect &&
                curValue &&
                curValue.canRedirect == canRedirect &&
                curValue.ts + 86400 > ts) {
                return false;
            }
            Storage.set({tgme_sync: {canRedirect: canRedirect, ts: ts}});

            var script = $('<script>').appendTo('body')
                .on('load error', function () {
                    script.remove();
                })
                .attr('src', '//telegram.me/_websync_?authed=' + (canRedirect ? '1' : '0'));
        });
    }

    return {
        setAuthorized: sendAsyncRequest
    };
}

TelegramMeWebServiceModule.dependencies = [
    'Storage',
    'jQuery'
];
