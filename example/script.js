telegramApi.setConfig({
    app: {
        id: 24939,
        hash: 'cf2f9913563b63810ca02d77d5d44f92',
        version: telegramApi.VERSION
    },
    server: {
        test: [
            {
                id: 2,
                host: '149.154.167.40',
                port: '443'
            }
        ],
        production: [
            {
                id: 2,
                host: '149.154.167.50',
                port: '443'
            }
        ]
    }
});

angular.module('myApp', [])
    .controller('mainCtrl', function ($scope) {
        angular.extend($scope, {
            update: function () {
                if ($scope._timeout) {
                    return;
                }

                $scope._timeout = setTimeout(function () {
                    delete $scope._timeout;
                    $scope.$apply();
                }, 0);
            },
            visible: {
                auth: false,
                info: false
            },
            auth: {},
            info: {},
            logs: [],
            success: [],
            failed: [],
            methods: [],
            json: function (obj, indent) {
                return JSON.stringify(obj, null, indent ? 4 : 0);
            },
            showLog: function (log, type) {
                switch (type) {
                    case 'console':
                        console.log(log);
                        break;
                    case 'alert':
                        alert(this.json(log, true));
                        break;
                }
            },
            invokeMethod: function (method, params, onSuccess, onError) {
                telegramApi[method].apply(telegramApi, params).then(function (result) {
                    $scope.success.push(result);
                    $scope.update();
                    onSuccess && onSuccess(result);
                }, function (err) {
                    $scope.failed.push(err);
                    $scope.update();
                    onError && onError(err);
                });
            }
        });

        /* Auth methods */
        $scope.auth.sendCode = function () {
            $scope.invokeMethod('sendCode', [$scope.auth.phone], function (sent_code) {
                $scope.phone_code_hash = sent_code.phone_code_hash;
            });
        };

        $scope.auth.signIn = function () {
            $scope.invokeMethod('signIn', [$scope.auth.phone, $scope.phone_code_hash, $scope.auth.code], function () {
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            });
        };

        /* Other methods */
        $scope.info.logOut = function () {
            telegramApi.logOut().then(function () {
                // TODO: Без setTimeout
                setTimeout(function () {
                    window.location.reload();
                }, 1500);
            });
        };

        $scope.info.checkPhone = function (phone) {
            $scope.invokeMethod('checkPhone', [phone]);
        };

        for (var key in telegramApi) {
            if (telegramApi.hasOwnProperty(key) && typeof telegramApi[key] == 'function') {
                $scope.methods.push(key);
            }
        }

        /* Initialize */
        telegramApi.getUserInfo().then(function (user) {
            if (!user.id) {
                $scope.visible.auth = true;
                $scope.update();
            } else {
                angular.extend($scope.info, user);
                $scope.visible.info = true;

                telegramApi.getUserPhoto('base64', 'small').then(function (base64) {
                    $scope.info.photoBase64 = base64;
                    $scope.update();
                });
            }
        });

        telegramApi.subscribe('Test', function (message) {
            $scope.logs.push(message);
            $scope.update();
        });
    });