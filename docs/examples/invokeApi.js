telegramApi.invokeApi('messages.getDialogs', {
    offset_peer: {_: 'inputPeerEmpty'},
    offset_date: 0,
    limit: 20
}).then(function(dialogResult) {
    /* Do something */
});
