var _MtpDcConfigurator = (function () {
    var chosenServers = {};

    function chooseServer(dcID, upload) {
        var dcOptions = Config.Modes.test ? Config.Server.Test : Config.Server.Production;

        if (chosenServers[dcID] === undefined) {
            var chosenServer = false,
                i, dcOption;

            for (i = 0; i < dcOptions.length; i++) {
                dcOption = dcOptions[i];
                if (dcOption.id == dcID) {
                    chosenServer = 'http://' + dcOption.host + (dcOption.port != 80 ? ':' + dcOption.port : '') + '/apiw1';
                    break;
                }
            }
            chosenServers[dcID] = chosenServer;
        }

        return chosenServers[dcID];
    }

    return {
        chooseServer: chooseServer
    };
})();