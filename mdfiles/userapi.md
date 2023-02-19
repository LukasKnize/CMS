# Users

## Get /

pokud v aplikaci neexistuje žádný uživatel tak odešle dočasný token sloužící k založení prvního administrátora


## Post /deleteAccount

```
headers:
    authorization: token

body:
    id
```
> Role administrátora je zapotřebí

## Patch /:userId

```
headers:
    authorization: token

body:
    username
    email
    password
```
> Může měnit jen uživatel sám sebe nebo administrátor ostatní uživatele