telegramApi.getHistory({
    id: 123456789,
    type: 'user',
    take: 1,
    skip: 0
}).then(function(data) {
    var message = data.messages[0];
    var doc = message.media.document;

    telegramApi.downloadDocument(doc, function(downloaded, total) {
        console.log('Loaded ' + downloaded + ' bytes. Total ' + total + ' bytes');
    }).then(function(result) {
        /**
         * result.bytes - file data
         * result.fileName - file name
         * result.type - file MIME-type
         */
    });
});
