telegramApi.getHistory({
    id: 12345678,
    take: 50,
    type: 'user'
}).then(function(data) {
    var totalCount = data.count || data.messages.length;

    data.messages.forEach(function(message) {
        /**
         * message.from_id - Sender ID
         * message.date - Date
         * message.media - If message is Document or Photo
         * message.message - Message text
         */
    });
});
