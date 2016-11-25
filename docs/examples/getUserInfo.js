telegramApi.getUserInfo().then(function(user) {
    if (user.id) {
        // You have already signed in
    } else {
        // Open log in page
    }
});
