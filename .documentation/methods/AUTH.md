# Авторизация/Регистрация

### Отправка кода авторизации пользователю
* phone_number - номер телефона
```
/**
 * В ответе придет объект с полем phone_code_hash, 
 * которое необходимо сохранить до окончания авторизации\регистрации
 */
telegramApi.sendCode(phone_number);
```
### Отправка кода по смс
* phone_number - номер телефона
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
```
telegramApi.sendSms(phone_number, phone_code_hash);
```
### Авторизация пользователя
* phone_number - номер телефона
* phone_code_hash - хеш кода авторизации (был получен из sendCode)
* phone_code - код авторизации
```
telegramApi.signIn(phone_number, phone_code_hash, phone_code);
```
### Регистрация пользователся
* phone_number - номер телефона
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