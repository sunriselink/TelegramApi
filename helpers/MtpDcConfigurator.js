var _MtpDcConfigurator = (function () {
    var sslSubdomains = ['pluto', 'venus', 'aurora', 'vesta', 'flora'];

    var dcOptions = Config.Modes.test
        ? [
        {id: 2, host: '149.154.167.40',  port: 443}
    ]
        : [
        {id: 2, host: '149.154.167.50',  port: 443}
    ];

    var chosenServers = {};

    function chooseServer(dcID, upload) {
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