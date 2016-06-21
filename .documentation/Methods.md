# Методы

## Авторизация/Регистрация
### Отправка кода авторизации пользователю
* phone_number - номер телефона (начинается с 7)
```
telegramApi.sendCode(phone_number);
```
### Отправка кода по смс
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
```
telegramApi.sendSms(phone_number, phone_code_hash);
```
### Авторизация пользователя
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
* phone_code - код авторизации
```
telegramApi.signIn(phone_number, phone_code_hash, phone_code);
```
### Регистрация пользователся
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
* phone_code - код авторизации
* first_name - Имя пользователя
* last_name - Фамилия пользователя
```
telegramApi.signUp(phone_number, phone_code_hash, phone_code, first_name, last_name);
```
### Выйти из системы
```
telegramApi.logOut();
```

## Работа с информацией о пользователе
### Получение информации о пользователе
```
telegramApi.getUserInfo();
```
### Изменение @username
* username - Новый username пользователя
```
telegramApi.updateUsername(username);
```
### Изменение имени и фамилии пользователя
* first_name - Имя пользователя
* last_name - Фамилия пользователя
```
telegramApi.updateProfile(first_name, last_name);
```
### Получить ссылку на фото пользователя
```
telegramApi.getUserPhoto();
```
### Обновить фото пользователя
* photo - объект с информацией о фотографии, полученный через элемент input[type="file"]
```
telegramApi.updateProfilePhoto(photo);
```

## Работа с сообщениями
### Получение списка диалогов (последние 20 штук)
```
telegramApi.getDialogs();
```
### Отправка сообщения
* id - идентификатор пользователя (получен из getDialogs)
* message - текст сообщения
```
telegramApi.sendMessage(id, message);
```

## Чаты
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
```
telegramApi.getChatLink(chatID);
```

## Работа с ботами
### Добавление бота (боту автоматически отправляется команда /start)
* botName - имя бота
```
telegramApi.startBot(botName);
```

## Конфигурация
### Установить настройки приложения
* config - объект конфигурации
```
telegramApi.setConfig(config);
```
