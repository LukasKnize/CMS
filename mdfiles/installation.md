# Instalace

## Co je zapotřebí?

- Node.js - aplikace je napsaná v javaScriptu a pro její spuštění je zapotřebí node.js a spolu s ním i NPM (zpravidla se instaluje automaticky s node.js). [Node.js](https://nodejs.org/en/)

- MongoDB - je zapotřebí mongoDB databáze, ta je možná buďto lokálně a nebo hostovaná jako cizí služba. [MongoDB](https://www.mongodb.com/)

## Instalace

- z [Githubu](https://github.com/LukasKnize/CMS/tree/backend) stáhněte projekt a nainstalujte balíčky NPM

`#npm i`

## Enviromentální proměnné

- je zapotřebí vytvořit soubor `.env` jehož formát bude následující:

`SECRET=vášSecret`

`DBHOST=DBADRESS`

## Spuštění

- prvně je zapotřebí spustit databázi, pokud je na vašem serveru a poté se program spustí pomocí `npm run start`