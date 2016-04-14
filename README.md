# TelegramApi

Основано на проекте [**webogram**](https://github.com/zhukov/webogram)  

Для использования библиотеки необходимо зарегистрировать свое приложение на https://my.telegram.org/.

Для сборки выполнить
```
npm install
grunt build
```

После сборки в папке example появятся дополнительные файлы, такие как telegramApi-full.js (.min.js) и другие служебные файлы, которые должны располагаться относительно страницы, на которой происходит взаимодействие с telegramApi, так же, как и в примере.

На странице так же необходимо подключить jQuery.

telegramApi-full.js следует подключать в блоке &lt;body&gt;

Настройки можно задать через метод setConfig
```
telegramApi.setConfig({
  app: {
    id: 0, /* ID приложения */
    hash: 'qwertyasdfghzxcvbnqwertyasd' /* Хеш приложения */
  },
  server: {
    test: [
      {
        id: 2, /* DC */
        host: '0.0.0.0', /* Адрес тестового сервера */
        port: 123 /* Порт тестового сервера */
      }
    ],
    production: [
      {
        id: 2, /* DC */
        host: '0.0.0.0', /* Адрес продакшн сервера */
        port: 123 /* Порт продакшн сервера */
      }
    ]
  }
});
```

## Methods

### Авторизация/Регистрация
Отправка кода авторизации пользователю
* phone_number - номер телефона (начинается с 7)
```
telegramApi.sendCode(phone_number);
```
Отправка кода по смс
* phone_number - номер телефона (начинается с 7)
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
```
telegramApi.sendSms(phone_number, phone_code_hash);
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
Получение списка диалогов (последние 20 штук)
```
telegramApi.getDialogs();
```
Отправка сообщения
* id - идентификатор пользователя (получен из getDialogs)
* message - текст сообщения
```
telegramApi.sendMessage(id, message);
```

### Чаты
Создать чат
* title - Название чата
* userIDs - массив идентификаторов пользователей (для приглашения)
```
telegramApi.createChat(title, userIDs);
```
Добавить пользователя в чат
* chatID - идентификатор чата
* userID - идентификтор пользователя
```
telegramApi.addChatUser(chatID, userID);
```

### Работа с ботами
Добавление бота (боту автоматически отправляется команда /start)
* botName - имя бота
```
telegramApi.startBot(botName);
```

### Кофигурация
Установить настройки приложения
* config - объект конфигурации
```
telegramApi.setConfig(config);
```
