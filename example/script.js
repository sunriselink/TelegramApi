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
                    '<input class="form-control" type="text" placeholder="First name" id="firstName">' +
                    '<input class="form-control" type="text" placeholder="Last name" id="lastName">' +
                    '<button class="btn btn-success" onclick="signUn()">Sign up</button>' +
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
        $('#chatUsers').empty();
        $('#chatInvite').empty();
        result.forEach(function (dialog) {
            var text = dialog._ == 'chat' ? dialog.title : dialog.first_name + (dialog.last_name ? ' ' + dialog.last_name : '');
            $('#select').append('<option value="' + dialog.id + '">' + text + '</option>');
            $('#chatUsers').append('<option value="' + dialog.id + '">' + text + '</option>');
            $('#chatInvite').append('<option value="' + dialog.id + '">' + text + '</option>');
        });
    });
});

$('#addBotButton').click(function () {
    telegramApi.startBot('selinkbot');
});

$('#createChatButton').click(function () {
    var title = $('#chatTitle').val();
    var userIDs = $('#chatUsers').val();
    telegramApi.createChat(title, userIDs);
});

$('#inviteButton').click(function () {
    var chatID = $('#chatInvite').val();
    var userID = $('#chatUsers').val()[0];
    telegramApi.addChatUser(chatID, userID);
});

$('#getChatLinkButton').click(function () {
    telegramApi.getChatLink($('#chatInvite').val()).then(function (link) {
        $('#chat').append('<br><span>' + link + '</span>');
    });
});

$('#getUserInfoButton').click(function () {
    telegramApi.getUserInfo().then(function (user) {
        $('#firstName_info').val(user.first_name);
        $('#lastName_info').val(user.last_name);
        $('#userName_info').val(user.username);
    });
    telegramApi.getUserPhoto().then(function (photo) {
        $('#userPhoto').attr('src', photo);
    })
});

$('#updateUsername').click(function () {
    telegramApi.updateUsername($('#userName_info').val());
});

$('#updateProfile').click(function () {
    var firstName = $('#firstName_info').val();
    var lastName = $('#lastName_info').val();
    telegramApi.updateProfile(firstName, lastName);
});

$('#uploadPhoto').change(function () {
    telegramApi.updateProfilePhoto(this.files[0]);
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