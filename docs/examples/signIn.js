telegramApi.signIn('some_phone_number', window.phone_code_hash, '000000').then(function() {
    // Sign in complete
    delete window.phone_code_hash;
}, function(err) {
    switch (err.type) {
        case 'PHONE_CODE_INVALID':
            // alert "Phone code invalid"
            break;
        case 'PHONE_NUMBER_UNOCCUPIED':
            // User not registered, you should use signUp method
            break;
    }
});
