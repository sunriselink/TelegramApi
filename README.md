# TelegramApi
> Documentation for version 1.2.6

Based on [**webogram**](https://github.com/zhukov/webogram)

## Getting started

1. Add a ```<script>``` to your index.html
```
<html>
<head>
    <title>My amazing app</title>
</head>
<body>
    <script src="js/jquery.js"></script>
    <script src="js/telegramApi.js"></script>
<body>
</html>
```

2. Set your app configuration
```
/* You should register your application on https://my.telegram.org/ */
telegramApi.setConfig({
  app: {
    id: 0, /* App ID */
    hash: 'qwertyasdfghzxcvbnqwertyasd', /* App hash */
    version: '0.0.0' /* App version */
  },
  server: {
    test: [
      {
        id: 2, /* DC ID */
        host: '0.0.0.0',
        port: 443
      }
    ],
    production: [
      {
        id: 2, /* DC ID */
        host: '0.0.0.0',
        port: 123
      }
    ]
  }
});
```

3. Check your status
```
telegramApi.getUserInfo().then(function(user) {
    if (user.id) {
        // You have already signed in
    } else {
        // Log in
    }
});
```

# Methods



<dl>
<dt><a href="#invokeApi">invokeApi(method, [params])</a></dt>
<dd><p>Invoke any method from .files/schema.txt</p>
</dd>
<dt><a href="#sendCode">sendCode(phone_number)</a></dt>
<dd><p>Send code by phone number</p>
</dd>
<dt><a href="#signIn">signIn(phone_number, phone_code_hash, phone_code)</a></dt>
<dd><p>Sign in</p>
</dd>
<dt><a href="#signUp">signUp(phone_number, phone_code_hash, phone_code, first_name, [last_name])</a></dt>
<dd><p>Sign up</p>
</dd>
</dl>

<a name="invokeApi"></a>

## invokeApi(method, [params])
Invoke any method from .files/schema.txt



| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | Method name |
| [params] | <code>Object</code> | Parameters |

**Example**
```js
telegramApi.invokeApi('messages.getDialogs', {
    offset_peer: {_: 'inputPeerEmpty'},
    offset_date: 0,
    limit: 20
}).then(function(dialogResult) {
    /* Do something */
});
```
<a name="sendCode"></a>

## sendCode(phone_number)
Send code by phone number



| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |

**Example**
```js
telegramApi.sendCode('some_phone_number').then(function(sent_code) {
    if (!sent_code.phone_registered) {
        // New user
    }

    // phone_code_hash will need to sigh in or sign up
    window.phone_code_hash = sent_code.phone_code_hash;
});
```
<a name="signIn"></a>

## signIn(phone_number, phone_code_hash, phone_code)
Sign in



| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |
| phone_code_hash | <code>String</code> | Code hash (was received in sendCode method) |
| phone_code | <code>String</code> | Code by Telegram |

**Example**
```js
telegramApi.signIn('some_phone_number', window.phone_code_hash, '000000').then(function() {
    // Sign in complete
    delete window.phone_code_hash;
}, function(err) {
    switch (err.type) {
        case 'PHONE_CODE_INVALID':
            // alert "Phone code invalid"
            break;
        case 'PHONE_NUMBER_UNOCCUPIED':
            // User not registered, you should use signUp method
            break;
    }
});
```
<a name="signUp"></a>

## signUp(phone_number, phone_code_hash, phone_code, first_name, [last_name])
Sign up



| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |
| phone_code_hash | <code>String</code> | Code hash (was received in sendCode method) |
| phone_code | <code>String</code> | Code by Telegram |
| first_name | <code>String</code> | User first name |
| [last_name] | <code>String</code> | User last name |

**Example**
```js
telegramApi.signUp('some_phone_number', window.phone_code_hash, '000000', 'John', 'Doe').then(function() {
    // Sign up complete
    delete window.phone_code_hash;
});
```


To be continued
