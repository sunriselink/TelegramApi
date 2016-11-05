function MtpAuthorizerModule(MtpTimeManager, MtpDcConfigurator, MtpRsaKeysManager, CryptoWorker, MtpSecureRandom, $q, $timeout, $http) {
    var chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/),
        chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false,
        xhrSendBuffer = !('ArrayBufferView' in window) && (!chromeVersion || chromeVersion < 30);

    function mtpSendPlainRequest(dcID, requestBuffer) {
        var requestLength = requestBuffer.byteLength,
            requestArray = new Int32Array(requestBuffer);

        var header = new TLSerialization();
        header.storeLongP(0, 0, 'auth_key_id'); // Auth key
        header.storeLong(MtpTimeManager.generateID(), 'msg_id'); // Msg_id
        header.storeInt(requestLength, 'request_length');

        var headerBuffer = header.getBuffer(),
            headerArray = new Int32Array(headerBuffer),
            headerLength = headerBuffer.byteLength;

        var resultBuffer = new ArrayBuffer(headerLength + requestLength),
            resultArray = new Int32Array(resultBuffer);

        resultArray.set(headerArray);
        resultArray.set(requestArray, headerArray.length);

        var requestData = xhrSendBuffer ? resultBuffer : resultArray,
            requestPromise;
        var url = MtpDcConfigurator.chooseServer(dcID);
        var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url};
        try {
            requestPromise = $http.post(url, requestData, {
                responseType: 'arraybuffer',
                transformRequest: null
            });
        } catch (e) {
            requestPromise = $q.reject(extend(baseError, {originalError: e}));
        }
        return requestPromise.then(
            function (result) {
                if (!result.data || !result.data.byteLength) {
                    return $q.reject(baseError);
                }

                try {
                    var deserializer = new TLDeserialization(result.data, {mtproto: true});
                    var auth_key_id = deserializer.fetchLong('auth_key_id');
                    var msg_id = deserializer.fetchLong('msg_id');
                    var msg_len = deserializer.fetchInt('msg_len');

                } catch (e) {
                    return $q.reject(extend(baseError, {originalError: e}));
                }

                return deserializer;
            },
            function (error) {
                if (!error.message && !error.type) {
                    error = extend(baseError, {originalError: error});
                }
                return $q.reject(error);
            }
        );
    }

    function mtpSendReqPQ(auth) {
        var deferred = auth.deferred;

        var request = new TLSerialization({mtproto: true});

        request.storeMethod('req_pq', {nonce: auth.nonce});

        console.log(dT(), 'Send req_pq', bytesToHex(auth.nonce));
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('ResPQ');

            if (response._ != 'resPQ') {
                throw new Error('resPQ response invalid: ' + response._);
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                throw new Error('resPQ nonce mismatch');
            }

            auth.serverNonce = response.server_nonce;
            auth.pq = response.pq;
            auth.fingerprints = response.server_public_key_fingerprints;

            console.log(dT(), 'Got ResPQ', bytesToHex(auth.serverNonce), bytesToHex(auth.pq), auth.fingerprints);

            auth.publicKey = MtpRsaKeysManager.select(auth.fingerprints);

            if (!auth.publicKey) {
                throw new Error('No public key found');
            }

            console.log(dT(), 'PQ factorization start', auth.pq);
            CryptoWorker.factorize(auth.pq).then(function (pAndQ) {
                auth.p = pAndQ[0];
                auth.q = pAndQ[1];
                console.log(dT(), 'PQ factorization done', pAndQ[2]);
                mtpSendReqDhParams(auth);
            }, function (error) {
                console.log('Worker error', error, error.stack);
                deferred.reject(error);
            });
        }, function (error) {
            console.error(dT(), 'req_pq error', error.message);
            deferred.reject(error);
        });

        $timeout(function () {
            MtpRsaKeysManager.prepare();
        });
    }

    function mtpSendReqDhParams(auth) {
        var deferred = auth.deferred;

        auth.newNonce = new Array(32);
        MtpSecureRandom.nextBytes(auth.newNonce);

        var data = new TLSerialization({mtproto: true});
        data.storeObject({
            _: 'p_q_inner_data',
            pq: auth.pq,
            p: auth.p,
            q: auth.q,
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            new_nonce: auth.newNonce
        }, 'P_Q_inner_data', 'DECRYPTED_DATA');

        var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

        var request = new TLSerialization({mtproto: true});
        request.storeMethod('req_DH_params', {
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            p: auth.p,
            q: auth.q,
            public_key_fingerprint: auth.publicKey.fingerprint,
            encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash)
        });

        console.log(dT(), 'Send req_DH_params');
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE');

            if (response._ != 'server_DH_params_fail' && response._ != 'server_DH_params_ok') {
                deferred.reject(new Error('Server_DH_Params response invalid: ' + response._));
                return false;
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                deferred.reject(new Error('Server_DH_Params nonce mismatch'));
                return false;
            }

            if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                deferred.reject(new Error('Server_DH_Params server_nonce mismatch'));
                return false;
            }

            if (response._ == 'server_DH_params_fail') {
                var newNonceHash = sha1BytesSync(auth.newNonce).slice(-16);
                if (!bytesCmp(newNonceHash, response.new_nonce_hash)) {
                    deferred.reject(new Error('server_DH_params_fail new_nonce_hash mismatch'));
                    return false;
                }
                deferred.reject(new Error('server_DH_params_fail'));
                return false;
            }

            try {
                mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer);
            } catch (e) {
                deferred.reject(e);
                return false;
            }

            mtpSendSetClientDhParams(auth);
        }, function (error) {
            deferred.reject(error);
        });
    }

    function mtpDecryptServerDhDataAnswer(auth, encryptedAnswer) {
        auth.localTime = tsNow();

        auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce)).concat(sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12));
        auth.tmpAesIv = sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(12).concat(sha1BytesSync([].concat(auth.newNonce, auth.newNonce)), auth.newNonce.slice(0, 4));

        var answerWithHash = aesDecryptSync(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv);

        var hash = answerWithHash.slice(0, 20);
        var answerWithPadding = answerWithHash.slice(20);
        var buffer = bytesToArrayBuffer(answerWithPadding);

        var deserializer = new TLDeserialization(buffer, {mtproto: true});
        var response = deserializer.fetchObject('Server_DH_inner_data');

        if (response._ != 'server_DH_inner_data') {
            throw new Error('server_DH_inner_data response invalid: ' + constructor);
        }

        if (!bytesCmp(auth.nonce, response.nonce)) {
            throw new Error('server_DH_inner_data nonce mismatch');
        }

        if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
            throw new Error('server_DH_inner_data serverNonce mismatch');
        }

        console.log(dT(), 'Done decrypting answer');
        auth.g = response.g;
        auth.dhPrime = response.dh_prime;
        auth.gA = response.g_a;
        auth.serverTime = response.server_time;
        auth.retry = 0;

        var offset = deserializer.getOffset();

        if (!bytesCmp(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
            throw new Error('server_DH_inner_data SHA1-hash mismatch');
        }

        MtpTimeManager.applyServerTime(auth.serverTime, auth.localTime);
    }

    function mtpSendSetClientDhParams(auth) {
        var deferred = auth.deferred,
            gBytes = bytesFromHex(auth.g.toString(16));

        auth.b = new Array(256);
        MtpSecureRandom.nextBytes(auth.b);

        CryptoWorker.modPow(gBytes, auth.b, auth.dhPrime).then(function (gB) {
            var data = new TLSerialization({mtproto: true});
            data.storeObject({
                _: 'client_DH_inner_data',
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                retry_id: [0, auth.retry++],
                g_b: gB,
            }, 'Client_DH_Inner_Data');

            var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

            var encryptedData = aesEncryptSync(dataWithHash, auth.tmpAesKey, auth.tmpAesIv);

            var request = new TLSerialization({mtproto: true});
            request.storeMethod('set_client_DH_params', {
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                encrypted_data: encryptedData
            });

            console.log(dT(), 'Send set_client_DH_params');
            mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
                var response = deserializer.fetchObject('Set_client_DH_params_answer');

                if (response._ != 'dh_gen_ok' && response._ != 'dh_gen_retry' && response._ != 'dh_gen_fail') {
                    deferred.reject(new Error('Set_client_DH_params_answer response invalid: ' + response._));
                    return false;
                }

                if (!bytesCmp(auth.nonce, response.nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer nonce mismatch'));
                    return false
                }

                if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer server_nonce mismatch'));
                    return false;
                }

                CryptoWorker.modPow(auth.gA, auth.b, auth.dhPrime).then(function (authKey) {
                    var authKeyHash = sha1BytesSync(authKey),
                        authKeyAux = authKeyHash.slice(0, 8),
                        authKeyID = authKeyHash.slice(-8);

                    console.log(dT(), 'Got Set_client_DH_params_answer', response._);
                    switch (response._) {
                        case 'dh_gen_ok':
                            var newNonceHash1 = sha1BytesSync(auth.newNonce.concat([1], authKeyAux)).slice(-16);

                            if (!bytesCmp(newNonceHash1, response.new_nonce_hash1)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash1 mismatch'));
                                return false;
                            }

                            var serverSalt = bytesXor(auth.newNonce.slice(0, 8), auth.serverNonce.slice(0, 8));
                            // console.log('Auth successfull!', authKeyID, authKey, serverSalt);

                            auth.authKeyID = authKeyID;
                            auth.authKey = authKey;
                            auth.serverSalt = serverSalt;

                            deferred.resolve(auth);
                            break;

                        case 'dh_gen_retry':
                            var newNonceHash2 = sha1BytesSync(auth.newNonce.concat([2], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash2, response.new_nonce_hash2)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash2 mismatch'));
                                return false;
                            }

                            return mtpSendSetClientDhParams(auth);

                        case 'dh_gen_fail':
                            var newNonceHash3 = sha1BytesSync(auth.newNonce.concat([3], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash3, response.new_nonce_hash3)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash3 mismatch'));
                                return false;
                            }

                            deferred.reject(new Error('Set_client_DH_params_answer fail'));
                            return false;
                    }
                }, function (error) {
                    deferred.reject(error);
                })
            }, function (error) {
                deferred.reject(error);
            });
        }, function (error) {
            deferred.reject(error);
        })
    }

    var cached = {};

    function mtpAuth(dcID) {
        if (cached[dcID] !== undefined) {
            return cached[dcID];
        }

        var nonce = [];
        for (var i = 0; i < 16; i++) {
            nonce.push(nextRandomInt(0xFF));
        }

        if (!MtpDcConfigurator.chooseServer(dcID)) {
            return $q.reject(new Error('No server found for dc ' + dcID));
        }

        var auth = {
            dcID: dcID,
            nonce: nonce,
            deferred: $q.defer()
        };

        $timeout(function () {
            mtpSendReqPQ(auth);
        });

        cached[dcID] = auth.deferred.promise;

        cached[dcID]['fail'](function () {
            delete cached[dcID];
        });

        return cached[dcID];
    }

    return {
        auth: mtpAuth
    };
}

MtpAuthorizerModule.dependencies = [
    'MtpTimeManager', 
    'MtpDcConfigurator', 
    'MtpRsaKeysManager', 
    'CryptoWorker', 
    'MtpSecureRandom', 
    '$q', 
    '$timeout', 
    '$http'
];
