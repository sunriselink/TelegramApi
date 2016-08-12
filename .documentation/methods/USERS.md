# Работа с пользователями

### Получение информации о пользователе
```
telegramApi.getUserInfo();
```
### Изменение @username
* username - новый @username пользователя
```
telegramApi.updateUsername(username);
```
### Изменение имени и фамилии пользователя
* first_name - имя пользователя
* last_name - фамилия пользователя
```
telegramApi.updateProfile(first_name, last_name);
```
### Получить фото пользователя
* type - тип фотографии (base64, blob, byteArray)
```
/*
 * По-умолчанию тип base64
 */
telegramApi.getUserPhoto(type);
```
### Обновить фото пользователя
* photo - объект с информацией о фотографии, полученный через элемент input[type="file"]
```
telegramApi.updateProfilePhoto(photo);
```