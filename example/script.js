$('#sendButton').click(function () {
    telegramApi.sendCode($('#phone').val()).then(function (sentCode) {
        $('#phoneHash').text(sentCode.phone_code_hash);
    });
});

$('#signInButton').click(function () {
    var phone = $('#phone').val();
    var hash = $('#phoneHash').text();
    var code = $('#code').val();
    telegramApi.signIn(phone, hash, code)
        .then(null, function (error) {
            /* Если пользователь не зарегистрирован */
            $('#phone-code').append(
                '<div id="reg">' +
                    '<h1>Input first name and last name</h1>' +
                    '<input type="text" placeholder="First name" id="firstName">' +
                    '<input type="text" placeholder="Last name" id="lastName">' +
                    '<button onclick="signUn()">Sign up</button>' +
                '</div>'
            );
        });
});

$('#sendMessageButton').click(function () {
    var id = $('#select').val();
    var message = $('#message').val();
    telegramApi.sendMessage(id, message);
});

$('#getDialogsButton').click(function () {
    telegramApi.getDialogs().then(function (result) {
        $('#select').empty();
        result.forEach(function (dialog) {
            var text = dialog._ == 'chat' ? dialog.title : dialog.first_name + (dialog.last_name ? ' ' + dialog.last_name : '');
            $('#select').append('<option value="' + dialog.id + '">' + text + '</option>');
        });
    });
});

$('#addBotButton').click(function () {
    telegramApi.startBot('selinkbot');
});

function signUn() {
    var phone = $('#phone').val();
    var hash = $('#phoneHash').text();
    var code = $('#code').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    telegramApi.signUp(phone, hash, code, firstName, lastName);
    $('#reg').remove();
}