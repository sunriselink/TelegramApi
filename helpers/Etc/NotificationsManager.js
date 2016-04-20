var _NotificationsManager = (function () {
    navigator.vibrate = navigator.vibrate || navigator.mozVibrate || navigator.webkitVibrate;

    var notificationsMsSiteMode = false;
    try {
        if (window.external && window.external.msIsSiteMode()) {
            notificationsMsSiteMode = true;
        }
    } catch (e) {};

    var notificationsUiSupport = notificationsMsSiteMode ||
        ('Notification' in window) ||
        ('mozNotification' in navigator);
    var notificationsShown = {};
    var notificationIndex = 0;
    var notificationsCount = 0;
    var soundsPlayed = {};
    var vibrateSupport = !!navigator.vibrate;
    var nextSoundAt = false;
    var prevSoundVolume = false;
    var peerSettings = {};
    var faviconEl = $('link[rel="icon"]:first')[0];
    var langNotificationsPluralize = __.pluralize('page_title_pluralize_notifications');

    var titleBackup = document.title,
        titleChanged = false,
        titlePromise;
    var prevFavicon;
    var stopped = false;

    var settings = {};

    $rootScope.$watch('idle.deactivated', function (newVal) {
        if (newVal) {
            stop();
        }
    });

    $rootScope.$watch('idle.isIDLE', function (newVal) {
        if (stopped) {
            return;
        }
        if (!newVal) {
            notificationsClear();
        }
        if (!Config.Navigator.mobile) {
            $interval.cancel(titlePromise);
            if (!newVal) {
                titleChanged = false;
                document.title = titleBackup;
                setFavicon();
            } else {
                titleBackup = document.title;

                titlePromise = $interval(function () {
                    if (titleChanged || !notificationsCount) {
                        titleChanged = false;
                        document.title = titleBackup;
                        setFavicon();
                    } else {
                        titleChanged = true;
                        document.title = langNotificationsPluralize(notificationsCount);
                        setFavicon('favicon_unread.ico');
                    }
                }, 1000);
            }
        }
    });

    $rootScope.$on('apiUpdate', function (e, update) {
        // console.log('on apiUpdate', update);
        switch (update._) {
            case 'updateNotifySettings':
                if (update.peer._ == 'notifyPeer') {
                    var peerID = AppPeersManager.getPeerID(update.peer.peer);
                    savePeerSettings(peerID, update.notify_settings);
                }
                break;
        }
    });

    var registeredDevice = false;
    if (window.navigator.mozSetMessageHandler) {
        window.navigator.mozSetMessageHandler('push', function(e) {
            console.log(dT(), 'received push', e);
            $rootScope.$broadcast('push_received');
        });

        window.navigator.mozSetMessageHandler('push-register', function(e) {
            console.log(dT(), 'received push', e);
            registeredDevice = false;
            registerDevice();
        });
    }

    return {
        start: start,
        notify: notify,
        cancel: notificationCancel,
        clear: notificationsClear,
        soundReset: notificationSoundReset,
        getPeerSettings: getPeerSettings,
        getPeerMuted: getPeerMuted,
        savePeerSettings: savePeerSettings,
        updatePeerSettings: updatePeerSettings,
        updateNotifySettings: updateNotifySettings,
        getNotifySettings: getNotifySettings,
        getVibrateSupport: getVibrateSupport,
        testSound: playSound
    };

    function updateNotifySettings () {
        _Storage.get('notify_nodesktop', 'notify_volume', 'notify_novibrate', 'notify_nopreview').then(function (updSettings) {

            settings.nodesktop = updSettings[0];
            settings.volume = updSettings[1] === false
                ? 0.5
                : updSettings[1];

            settings.novibrate = updSettings[2];
            settings.nopreview = updSettings[3];
        });
    }

    function getNotifySettings () {
        return settings;
    }

    function getPeerSettings (peerID) {
        if (peerSettings[peerID] !== undefined) {
            return peerSettings[peerID];
        }

        return peerSettings[peerID] = MtpApiManager.invokeApi('account.getNotifySettings', {
            peer: {
                _: 'inputNotifyPeer',
                peer: AppPeersManager.getInputPeerByID(peerID)
            }
        });
    }

    function setFavicon (href) {
        //href = href || 'favicon.ico';
        //if (prevFavicon === href) {
        //    return
        //}
        //var link = document.createElement('link');
        //link.rel = 'shortcut icon';
        //link.type = 'image/x-icon';
        //link.href = href;
        //faviconEl.parentNode.replaceChild(link, faviconEl);
        //faviconEl = link;
        //
        //prevFavicon = href;
        // TODO
    }

    function savePeerSettings (peerID, settings) {
        // console.trace(dT(), 'peer settings', peerID, settings);
        peerSettings[peerID] = $q.when(settings);
        $rootScope.$broadcast('notify_settings', {peerID: peerID});
    }

    function updatePeerSettings (peerID, settings) {
        savePeerSettings(peerID, settings);

        var inputSettings = angular.copy(settings);
        inputSettings._ = 'inputPeerNotifySettings';

        return MtpApiManager.invokeApi('account.updateNotifySettings', {
            peer: {
                _: 'inputNotifyPeer',
                peer: AppPeersManager.getInputPeerByID(peerID)
            },
            settings: inputSettings
        });
    }

    function getPeerMuted (peerID) {
        return getPeerSettings(peerID).then(function (peerNotifySettings) {
            return peerNotifySettings._ == 'peerNotifySettings' &&
                peerNotifySettings.mute_until * 1000 > tsNow();
        });
    }

    function start () {
        updateNotifySettings();
        $rootScope.$on('settings_changed', updateNotifySettings);
        registerDevice();

        if (!notificationsUiSupport) {
            return false;
        }

        if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            $(window).on('click', requestPermission);
        }


        try {
            if ('onbeforeunload' in window) {
                $(window).on('beforeunload', notificationsClear);
            }
        } catch (e) {}
    }

    function stop () {
        notificationsClear();
        $interval.cancel(titlePromise);
        setFavicon();
        stopped = true;
    }

    function requestPermission() {
        Notification.requestPermission();
        $(window).off('click', requestPermission);
    }

    function notify (data) {
        if (stopped) {
            return;
        }
        // console.log('notify', $rootScope.idle.isIDLE, notificationsUiSupport);

        // FFOS Notification blob src bug workaround
        if (Config.Navigator.ffos && !Config.Navigator.ffos2p) {
            data.image = 'https://telegram.org/img/t_logo.png';
        }
        else if (data.image && !angular.isString(data.image)) {
            if (Config.Navigator.ffos2p) {
                FileManager.getDataUrl(data.image, 'image/jpeg').then(function (url) {
                    data.image = url;
                    notify(data);
                });
                return false;
            } else {
                data.image = FileManager.getUrl(data.image, 'image/jpeg');
            }
        }
        else if (!data.image) {
            data.image = 'img/icons/icon60.png';
        }
        // console.log('notify image', data.image);

        notificationsCount++;

        var now = tsNow();
        if (settings.volume > 0 &&
            (
                !data.tag ||
                !soundsPlayed[data.tag] ||
                now > soundsPlayed[data.tag] + 60000
            )
        ) {
            playSound(settings.volume);
            soundsPlayed[data.tag] = now;
        }

        if (!notificationsUiSupport ||
            'Notification' in window && Notification.permission !== 'granted') {
            return false;
        }

        if (settings.nodesktop) {
            if (vibrateSupport && !settings.novibrate) {
                navigator.vibrate([200, 100, 200]);
                return;
            }
            return;
        }

        var idx = ++notificationIndex,
            key = data.key || 'k' + idx,
            notification;

        if ('Notification' in window) {
            notification = new Notification(data.title, {
                icon: data.image || '',
                body: data.message || '',
                tag: data.tag || ''
            });
        }
        else if ('mozNotification' in navigator) {
            notification = navigator.mozNotification.createNotification(data.title, data.message || '', data.image || '');
        }
        else if (notificationsMsSiteMode) {
            window.external.msSiteModeClearIconOverlay();
            window.external.msSiteModeSetIconOverlay('img/icons/icon16.png', data.title);
            window.external.msSiteModeActivate();
            notification = {
                index: idx
            };
        }
        else {
            return;
        }

        notification.onclick = function () {
            notification.close();
            AppRuntimeManager.focus();
            notificationsClear();
            if (data.onclick) {
                data.onclick();
            }
        };

        notification.onclose = function () {
            if (!notification.hidden) {
                delete notificationsShown[key];
                notificationsClear();
            }
        };

        if (notification.show) {
            notification.show();
        }
        notificationsShown[key] = notification;

        if (!Config.Navigator.mobile) {
            setTimeout(function () {
                notificationHide(key)
            }, 8000);
        }
    };

    function playSound (volume) {
        var now = tsNow();
        if (nextSoundAt && now < nextSoundAt && prevSoundVolume == volume) {
            return;
        }
        nextSoundAt = now + 1000;
        prevSoundVolume = volume;
        var filename = 'img/sound_a.mp3';
        var obj = $('#notify_sound').html('<audio autoplay="autoplay" mozaudiochannel="notification">' +
            '<source src="' + filename + '" type="audio/mpeg" />' +
            '<embed hidden="true" autostart="true" loop="false" volume="' + (volume * 100) +'" src="' + filename +'" />' +
            '</audio>');
        obj.find('audio')[0].volume = volume;
    }

    function notificationCancel (key) {
        var notification = notificationsShown[key];
        if (notification) {
            if (notificationsCount > 0) {
                notificationsCount--;
            }
            try {
                if (notification.close) {
                    notification.close();
                }
                else if (notificationsMsSiteMode &&
                    notification.index == notificationIndex) {
                    window.external.msSiteModeClearIconOverlay();
                }
            } catch (e) {}
            delete notificationsCount[key];
        }
    }

    function notificationHide (key) {
        var notification = notificationsShown[key];
        if (notification) {
            try {
                if (notification.close) {
                    notification.hidden = true;
                    notification.close();
                }
            } catch (e) {}
            delete notificationsCount[key];
        }
    }

    function notificationSoundReset (tag) {
        delete soundsPlayed[tag];
    }

    function notificationsClear() {
        if (notificationsMsSiteMode) {
            window.external.msSiteModeClearIconOverlay();
        } else {
            angular.forEach(notificationsShown, function (notification) {
                try {
                    if (notification.close) {
                        notification.close()
                    }
                } catch (e) {}
            });
        }
        notificationsShown = {};
        notificationsCount = 0;
    }

    var registerDevicePeriod = 1000,
        registerDeviceTO;
    function registerDevice () {
        if (registeredDevice) {
            return false;
        }
        if (navigator.push && Config.Navigator.ffos && Config.Modes.packed) {
            var req = navigator.push.register();

            req.onsuccess = function(e) {
                clearTimeout(registerDeviceTO);
                console.log(dT(), 'Push registered', req.result);
                registeredDevice = req.result;
                MtpApiManager.invokeApi('account.registerDevice', {
                    token_type: 4,
                    token: registeredDevice,
                    device_model: navigator.userAgent || 'Unknown UserAgent',
                    system_version: navigator.platform  || 'Unknown Platform',
                    app_version: Config.App.version,
                    app_sandbox: false,
                    lang_code: navigator.language || 'en'
                });
            }

            req.onerror = function(e) {
                console.error('Push register error', e, e.toString());
                registerDeviceTO = setTimeout(registerDevice, registerDevicePeriod);
                registerDevicePeriod = Math.min(30000, registerDevicePeriod * 1.5);
            }
        }
    }

    function unregisterDevice () {
        if (!registeredDevice) {
            return false;
        }
        MtpApiManager.invokeApi('account.unregisterDevice', {
            token_type: 4,
            token: registeredDevice
        }).then(function () {
            registeredDevice = false;
        })
    }

    function getVibrateSupport () {
        return vibrateSupport;
    }
})();