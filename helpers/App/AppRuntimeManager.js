var _AppRuntimeManager = (function () {
    return {
        reload: function () {
            try {
                location.reload();
            } catch (e) {};

            if ($window.chrome && chrome.runtime && chrome.runtime.reload) {
                chrome.runtime.reload();
            };
        },
        close: function () {
            try {
                $window.close();
            } catch (e) {}
        },
        focus: function () {
            if (window.navigator.mozApps && document.hidden) {
                // Get app instance and launch it to bring app to foreground
                window.navigator.mozApps.getSelf().onsuccess = function() {
                    this.result.launch();
                };
            } else {
                if (window.chrome && chrome.app && chrome.app.window) {
                    chrome.app.window.current().focus();
                }
                window.focus();
            }
        }
    }
})();