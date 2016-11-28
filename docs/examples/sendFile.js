telegramApi.sendFile({
    id: 123456789,
    type: 'user',
    file: $('input[type=file]').val(),
    caption: 'This is file'
}).then(function(updates) {
    // Do something
});
