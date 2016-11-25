telegramApi.createChat('Chat title', [123456789]).then(function(updates) {
    // If you want all users to be administrators, use it
    return telegramApi.invokeApi('messages.toggleChatAdmins', {
        chat_id: updates.chats[0].id,
        enabled: false
    });
});
