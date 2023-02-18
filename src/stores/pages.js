import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePagesStore = defineStore("pages", {
    state: () => {
        return {
            data: {
                chapters: [
                    {
                        chapterName: "Začínáme",
                        pages: [
                            {
                                pageName: "instalace",
                                data: "# Instalace\n\n## Co je zapotřebí?\n\n- Node.js - aplikace je napsaná v javaScriptu a pro její spuštění je zapotřebí node.js a spolu s ním i NPM (zpravidla se instaluje automaticky s node.js). [Node.js](https://nodejs.org/en/)\n\n- MongoDB - je zapotřebí mongoDB databáze, ta je možná buďto lokálně a nebo hostovaná jako cizí služba. [MongoDB](https://www.mongodb.com/)\n\n## Instalace\n\n- z [Githubu](https://github.com/LukasKnize/CMS/tree/backend) stáhněte projekt a nainstalujte balíčky NPM\n\n`#npm i`\n\n## Enviromentální proměnné\n\n- je zapotřebí vytvořit soubor `.env` jehož formát bude následující:\n\n`SECRET=vášSecret`\n\n`DBHOST=DBADRESS`\n\n## Spuštění\n\n- prvně je zapotřebí spustit databázi, pokud je na vašem serveru a poté se program spustí pomocí `npm run start`",
                            }
                        ]
                    },
                    {
                        chapterName: "second website",
                        pages: [
                            {
                                pageName: "new post",
                                data: "# Idk22\n***Some* text** idk\n# Idk2\n![The San Juan Mountains are beautiful!](https://picsum.photos/seed/picsum/2600/300 'San Juan Mountains')",
                            }
                        ]
                    }
                ]
            }
        }
    }
})