telegramApi.createChannel('New channel', 'This is example channel').then(function(updates) {
    var channel = updates.chats[0];

    /**
     * WARNING!
     * If you often call this method, you will receive a reply FLOOD_WAIT_{seconds}
     */
});
