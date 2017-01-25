$.get('/config.json').then(function(configData) {
    telegramApi
        .setConfig(configData)
        .then(checkUserAccess);
});

function checkUserAccess() {
    telegramApi.getUserInfo().then(function(user) {
        if (!user.id) {
            showAuthPanel();
        } else {
            showUserPanel(user);
        }
    });
}

function showAuthPanel() {
    getView('auth-panel').then(appendView);
}

function showUserPanel(user) {
    getView('user-panel').then(function(html) {
        $.when(appendView(html)).then(function() {
            loadUserData(user);
            loadDialogs();
        });
    });
}

function getView(name) {
    return $.get('/views/' + name + '.html');
}

function appendView(html) {
    return $('#page-content').append(html);
}

/* auth-panel.html */

function sendCode() {
    var phoneNumber = $('#phone-number_input').val();

    telegramApi.sendCode(phoneNumber).then(function(sent_code) {
        window.phone_code_hash = sent_code.phone_code_hash;

        $('#phone-number_input').hide();
        $('#send-code_button').hide();

        $('#code_input').show();
        $('#sign-in_button').show();
    });
}

function signIn() {
    var phoneNumber = $('#phone-number_input').val();
    var code = $('#code_input').val();
    var hash = window.phone_code_hash;

    telegramApi.signIn(phoneNumber, hash, code).then(function() {
        window.location.reload();
    });
}

/* user-panel.html */

function loadUserData(user) {
    $('#first-name_span').text(user.first_name);
    $('#last-name_span').text(user.last_name);

    if (user.username) {
        $('#username_span').text('@' + user.username);
    }

    telegramApi.getUserPhoto('base64', 'small').then(function(base64) {
        if (base64) {
            $('#avatar_img').attr('src', base64);
        }
    });
}

function loadDialogs() {
    var usersData = {};

    telegramApi.getDialogs().then(function(data) {
        var messages = data.result.messages;
        var users = data.result.users;

        users.forEach(function(user) {
            usersData[user.id] = user;
        });

        var items = [];

        messages.forEach(function(message) {
            try{
                var user = usersData[message.from_id];
                items.push('<div>' + (user.pFlags.self ? 'You' : user.first_name) + ': ' + (message.media ? 'File' : message.message) + '</div>');
            } catch (e) {
                items.push('<div>ERROR</div>');
            }
        });

        $('#dialogs-container').append(items.join(''));
    });
}
