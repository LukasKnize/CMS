# AUTH

## Post /signUp
```
headers:
    authorization: token

body:
    username
    email
    type
    password
```

response: token nebo chybová hláška

> Role administrátora je zapotřebí

## Post /logIn

```
body:
    email
    password
```

response: token nebo chybová hláška

## Post /signUpAdmin

```
headers:
    authorization: token

body:
    username
    email
    type
    password
    adminPassword 
    adminEmail
```
response: token nebo chybová hláška
> Role administrátora je zapotřebí