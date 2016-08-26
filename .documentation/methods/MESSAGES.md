# Работа с сообщениями и чатами

### Получение списка диалогов (последние 20 штук)
```
telegramApi.getDialogs();
```

### Отправка сообщения
* id - идентификатор пользователя
* message - текст сообщения
```
telegramApi.sendMessage(id, message);
```

### Отправка файла в чат
* _id - идентификатор чата
* _type - тип чата (~~user~~, chat, ~~channel~~) (по-умолчанию chat)
* _file - файл, полученный через элемент input[type="file"]
* _caption - подпись к файлу
```
telegramApi.sendFile({
    id: _id,
    type: _type,
    file: _file,
    caption: _caption
});
```

### Загрузка документа
* doc - объект документа
* progress - функция прогресса загрузки
```
telegramApi.downloadDocument(doc, function (downloaded, size){
    console.log(downloaded * 100 / size + '% загружено.');
});
```

### Создать чат
* title - Название чата
* userIDs - массив идентификаторов пользователей (для приглашения)
```
telegramApi.createChat(title, userIDs);
```
> Необходимо указать минимум одного пользователя

### Добавить пользователя в чат
* chatID - идентификатор чата
* userID - идентификатор пользователя
```
telegramApi.addChatUser(chatID, userID);
```

### Получить ссылку на чат
* chatID - идентификатор чата
* forse - создавать ли новую ссылку (по-умолчанию false)
```
telegramApi.getChatLink(chatID, forse);
```

### Присоединение к чату по ссылке (или хешу)
* link - ссылка на чат вида https://telegram.me/joinchat/qweryqwerty или хеш вида qwertyqwerty
```
telegramApi.joinChat(link);
```

### Получение истории сообщений
* _id - идентификатор чата
* _type - тип чата (~~user~~, chat, ~~channel~~) (по-умолчанию chat)
* _take - количество сообщений (по-умолчанию 15)
* _skip - количество пропущенных сообщений (по-умолчанию 0)
```
telegramApi.getHistory({
    id: _id,
    type: _type,
    take: _take,
    skip: _skip,
});
```

### Изменение привилегий пользователя
* chatID - идентификатор чата
* userID - идентификатор пользователя
* isAdmin - права администратора (по-умолчанию true)
```
telegramApi.editChatAdmin(chatID, userID, isAdmin);
```

### Редактирование названия чата
* char_id - идентификатор чата
* title - новое название
```
telegramApi.editChatTitle(chat_id, title);
```

### Выставление пользователю в канале прав админинстратора
* channel_id - идентификатор канала
* user_id - идентификатор пользователя
```
telegramApi.editChannelAdmin(channel_id, user_id);
```