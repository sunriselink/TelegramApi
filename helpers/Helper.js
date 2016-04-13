var $interval = angular.injector(['ng']).get('$interval');
var $timeout = angular.injector(['ng']).get('$timeout');
var $rootScope = angular.injector(['ng']).get('$rootScope');
var $http = angular.injector(['ng']).get('$http');
var $q = angular.injector(['ng']).get('$q');

//$http.post = function (url, data, options) {
//    options = options || {};
//
//    var xhr = new XMLHttpRequest()
//    var deferred = $.Deferred();
//
//    xhr.open('POST', url, true);
//    xhr.responseType = options.responseType;
//
//    xhr.onload = function () {
//        deferred.resolve({data: xhr.response});
//    };
//    xhr.onerror = function () {
//        deferred.reject({data: xhr.response});
//    };
//
//    xhr.send(data);
//
//    return deferred;
//};