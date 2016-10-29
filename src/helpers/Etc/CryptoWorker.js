var _CryptoWorker = (function () {
    var webWorker = false,
        naClEmbed = false,
        taskID = 0,
        awaiting = {},
        finalizeTask = function (taskID, result) {
            var deferred = awaiting[taskID];
            if (deferred !== undefined) {
                // console.log(dT(), 'CW done');
                deferred.resolve(result);
                delete awaiting[taskID];
            }
        };

    function performTaskWorker (task, params, embed) {
        // console.log(dT(), 'CW start', task);
        var deferred = $q.defer();

        awaiting[taskID] = deferred;

        params.task = task;
        params.taskID = taskID;
        (embed || webWorker).postMessage(params);

        taskID++;

        return deferred.promise;
    }

    return {
        sha1Hash: function (bytes) {
            return $timeout(function () {
                return sha1HashSync(bytes);
            });
        },
        sha256Hash: function (bytes) {
            return $timeout(function () {
                return sha256HashSync(bytes);
            });
        },
        aesEncrypt: function (bytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesEncryptSync(bytes, keyBytes, ivBytes));
            });
        },
        aesDecrypt: function (encryptedBytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesDecryptSync(encryptedBytes, keyBytes, ivBytes));
            });
        },
        factorize: function (bytes) {
            bytes = convertToByteArray(bytes);

            return $timeout(function () {
                return pqPrimeFactorization(bytes);
            });
        },
        modPow: function (x, y, m) {
            return $timeout(function () {
                return bytesModPow(x, y, m);
            });
        }
    };
})();