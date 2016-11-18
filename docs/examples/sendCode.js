telegramApi.sendCode('some_phone_number').then(function(sent_code) {
    if (!sent_code.phone_registered) {
        // New user
    }

    // phone_code_hash will need to sigh in or sign up
    window.phone_code_hash = sent_code.phone_code_hash;
});
