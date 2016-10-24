telegramApi.setConfig({
    app: {
        id: 24939,
        hash: 'cf2f9913563b63810ca02d77d5d44f92'
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
            visible: {
                auth: false,
                info: false
            },
            auth: {
                sendCode: function () {
                    telegramApi.sendCode($scope.auth.phone).then(function (sent_code) {
                        $scope.phone_code_hash = sent_code.phone_code_hash;
                    });
                },
                signIn: function () {
                    telegramApi.signIn($scope.auth.phone, $scope.phone_code_hash, $scope.auth.code).then(function () {
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    });
                }
            },
            info: {}
        });
        telegramApi.getUserInfo().then(function (user) {
            if (!user.id) {
                $scope.visible.auth = true;
            } else {
                angular.extend($scope.info, user);
                $scope.visible.info = true;

                telegramApi.getUserPhoto('base64').then(function (base64) {
                    $scope.info.photoBase64 = base64;
                    $scope.$apply();
                });
            }
            setTimeout(function () {
                $scope.$apply();
            }, 0);
        });
    });