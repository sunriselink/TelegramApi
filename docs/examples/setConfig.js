telegramApi.setConfig({
    app: {
        id: 0, /* App ID */
        hash: 'qwertyasdfghzxcvbnqwertyasd', /* App hash */
        version: '0.0.0' /* App version */
    },
    server: {
        test: [
            {
                id: 2, /* DC ID */
                host: '0.0.0.0',
                port: 443
            }
        ],
        production: [
            {
                id: 2, /* DC ID */
                host: '0.0.0.0',
                port: 123
            }
        ]
    }
});
