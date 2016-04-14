telegramApi.setConfig({
    app: {
        id: 24939,
        hash: 'cf2f9913563b63810ca02d77d5d44f92'
    },
    server: {
        test: [
            {
                id: 2,
                host: '149.154.167.40',
                port: '443'
            }
        ],
        production: [
            {
                id: 2,
                host: '149.154.167.50',
                port: '443'
            }
        ]
    }
});

$('#sendButton').click(function () {
    telegramApi.sendCode($('#phone').val()).then(function (sentCode) {
        $('#phoneHash').text(sentCode.phone_code_hash);
    });
});

$('#sendSmsButton').click(function () {
    var phone = $('#phone').val();
    var hash = $('#phoneHash').text();

    telegramApi.sendSms(phone, hash);
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