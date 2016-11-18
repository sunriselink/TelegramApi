telegramApi.signUp('some_phone_number', window.phone_code_hash, '000000', 'John', 'Doe').then(function() {
    // Sign up complete
    delete window.phone_code_hash;
});
