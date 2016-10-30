telegramApi.setConfig({
    app: {
        id: 24939,
        hash: 'cf2f9913563b63810ca02d77d5d44f92',
        version: '1.2.0'
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
            json: function (obj, indent) {
                return JSON.stringify(obj, null, indent ? 4 : 0);
            },
            showLog: function (log, type) {
                switch (type){
                    case 'console':
                        console.log(log);
                        break;
                    case 'alert':
                        alert(this.json(log, true));
                        break;
                }
            },
            invokeMethod: function (method, params) {
                telegramApi[method].apply(telegramApi, params).then(function (result) {
                    $scope.success.push(result);
                    $scope.update();
                }, function (err) {
                    $scope.failed.push(err);
                    $scope.update();
                });
            }
        });

        /* Auth methods */
        $scope.auth.sendCode = function () {
            telegramApi.sendCode($scope.auth.phone).then(function (sent_code) {
                $scope.phone_code_hash = sent_code.phone_code_hash;
            });
        };

        $scope.auth.signIn = function () {
            telegramApi.signIn($scope.auth.phone, $scope.phone_code_hash, $scope.auth.code).then(function () {
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