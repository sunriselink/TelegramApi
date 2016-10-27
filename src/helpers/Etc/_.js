var __ = (function () {
    var locale = Config.I18n.locale;
    var messages = Config.I18n.messages;
    var fallbackMessages = Config.I18n.fallback_messages;
    var paramRegEx = /\{\s*([a-zA-Z\d\-_]+)(?:\s*:\s*(.*?))?\s*\}/g;

    function insertParams(msgstr, params) {
        return msgstr.replace(paramRegEx, function ($0, paramKey, nestedMsgStr) {
            var param = params[paramKey];
            if (param === undefined) {
                console.warn('[i18n] missing param ' + paramKey + ' for message "' + msgstr + '"');
                return '';
            }
            if (nestedMsgStr !== undefined) {
                param = insertParams(param, nestedMsgStr.split('|'));
            }
            return param.toString().trim();
        });
    }

    function parseMarkdownString(msgstr, msgid) {
        msgstr = msgstr
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\n|&#10;/g, "<br/>");

        return msgstr;
    }

    function _(msgid, params) {
        var raw = false;
        var msgstr = msgid;

        if (msgid.substr(-4) === '_raw') {
            raw = true;
            msgid = msgid.substr(0, msgid.length - 4);
        }

        if (messages.hasOwnProperty(msgid)) {
            msgstr = messages[msgid];
        } else if (fallbackMessages.hasOwnProperty(msgid)) {
            msgstr = fallbackMessages[msgid];
            console.warn('[i18n] missing locale key ' + locale + ' / ' + msgid);
        } else {
            console.warn('[i18n] missing key ' + msgid);
            return msgid;
        }

        if (!raw) {
            msgstr = encodeEntities(msgstr);
        }
        if (msgid.substr(-3) == '_md') {
            msgstr = parseMarkdownString(msgstr);
        }

        if (arguments.length > 1) {
            if (typeof params == 'string') {
                Array.prototype.shift.apply(arguments);
                msgstr = insertParams(msgstr, arguments);
            } else {
                msgstr = insertParams(msgstr, params);
            }
        }

        return msgstr;
    }

    _.locale = function () {
        return locale;
    };

    return _;
})();