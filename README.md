# TelegramApi

Основано на проекте [**webogram**](https://github.com/zhukov/webogram)  

Для сборки выполнить в проекте
```
npm install
grunt build
```

После сборки в папке example появятся дополнительные файлы, такие как telegramApi-full.js (.min.js) и другие служебные файлы, которые должны располагаться относительно страницы, на которой происходит взаимодействие с telegramApi, так же, как и в примере.

## Methods

### Авторизация/Регистрация
Отправка кода авторизации пользователю
* phone_number - номер телефона (начинается с 7)
```
telegramApi.sendCode(phone_number);
```
Авторизация пользователя
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
* phone_code - код авторизации
```
telegramApi.signIn(phone_number, phone_code_hash, phone_code);
```
Регистрация пользователся
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
* phone_code - код авторизации
* first_name - Имя пользователя
* last_name - Фамилия пользователя
```
telegramApi.signUp(phone_number, phone_code_hash, phone_code, first_name, last_name);
```

### Работа с сообщениями
Получение списка диалогов (последнеи 20 штук)
```
telegramApi.getDialogs();
```
Отправка сообщения
* id - идентификатор пользователя (получен из getDialogs)
* message - текст сообщения
```
telegramApi.sendMessage(id, message);
```

### Работа с ботами
* botName - имя бота (боту автоматически отправляется команда /start)
```
telegramApi.startBot(botName);
```
