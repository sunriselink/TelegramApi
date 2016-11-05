function jQueryModule() {
    if (typeof window.jQuery == 'undefined') {
        throw new Error('TelegramApi requires jQuery');
    }

    return window.jQuery;
}

jQueryModule.dependencies = [];
