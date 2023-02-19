# Pages

## Get /all

response: list všech stránek

## Post /
```
headers:
    authorization: token

body:
    headline
    url
    desc
    template
```

## Post /data/:urlParameter

```
headers:
    authorization: token

body:
    content
```

## Get /:urlParameter

response: data stránky s url :urlParameter

## Delete /:urlParameter

```
headers:
    authorization: token
```

> uživatel musí být autor nebo admin

## Post /save
```
headers:
    authorization: token

body:
    headline
    url
    desc
    template
```

## Post /save/data/:name

```
headers:
    authorization: token

body:
    name
    data
```

## Get /id/:pageId

response: data stránky podle id :pageId