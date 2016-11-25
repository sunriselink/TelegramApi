telegramApi.getUserPhoto('base64', 'small').then(function(base64) {
    $('img#avatar').attr('src', base64);
});
