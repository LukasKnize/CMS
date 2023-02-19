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
                                data: "# Instalace\n\n> Tato aplikace je stále ve stádiu vývoje a proto nedoporučujeme tuto aplikaci používat. Spousta užitečných funkcí stále chybí a je možné že dojde k velkým zménám v programu který by mohl kompletně rozbít aplikaci.\n\n## Co je zapotřebí?\n\n- Node.js - aplikace je napsaná v javaScriptu a pro její spuštění je zapotřebí node.js a spolu s ním i NPM (zpravidla se instaluje automaticky s node.js). [Node.js](https://nodejs.org/en/)\n\n- MongoDB - je zapotřebí mongoDB databáze, ta je možná buďto lokálně a nebo hostovaná jako cizí služba. [MongoDB](https://www.mongodb.com/)\n\n## Instalace\n\n- z [Githubu](https://github.com/LukasKnize/CMS/tree/backend) stáhněte projekt a nainstalujte balíčky NPM\n\n`#npm i`\n\n## Enviromentální proměnné\n\n- je zapotřebí vytvořit soubor `.env` jehož formát bude následující:\n\n`SECRET=vášSecret`\n\n`DBHOST=DBADRESS`\n\n## Spuštění\n\n- prvně je zapotřebí spustit databázi, pokud je na vašem serveru a poté se program spustí pomocí `npm run start`",
                            },
                            {
                                pageName: "první administrátor",
                                data: "# Začínáme\n\n## Registrace prvního administrátora\n\n- Po instalaci je zapotřebí zaregistrovat prvního administrátora, administrátor má přístůp ke všem funkcím CMS, tato role by tedy měla být udělováná jen speciálně pověřeným osobám.\n\n![Registrace administrátora](../src/assets/adminRegistration.PNG)\n\n- Jako uživatelské jméno doporučujeme zvolit jméno skutečné neboť toto jméno se bude zobrazovat jako autor příspěvků pro všechny v aplikaci (toto jméno je možné změnit)\n- Heslo musí být složeno alespoň z dvanácti znaků kombinujících malá a velká písmena a čísla"
                            },
                            {
                                pageName: "šablony",
                                data: "# Šablona\n\n> šablona je poviná součást, bez ní není možné tvořit stránky\n\n## Formát šablony\n\nformát šablony je složka s názvém dané šablony obsahující obrázek s názvem screenshot (aplikace přijmá formatý JPEG, PNG a WEBP) a jeden HTML soubor.\n\n```\n-blogPost\n---index.html\n---screenshot.png\n```\n\n## Instalace šablony\n\nŠablonu je možné přidat přímo v souborovém systému programu do složky templates a nebo je možné tuto zazipovanou šablonu nahrát v administraci"
                            },
                            {
                                pageName: "úprava stránek",
                                data: "# První stránka\n\n## Typy stránek\n\n- Uložená jako soubor - tato varianta se hodí pro většinu uživatelů. Soubory ukládá přímo do souborového systému aplikace a není zapotřebí žádný speciální script na zobrazení této stránky\n\n- API - data se uloží jako text do databáze a speciální script pak tyto data umožní číst a zobrazit na stránkách. Tato varianta se hodí pokud chcete umožnit ostatním doménám získávat data z vašich stránek\n\nTyp stránek zvíme při přidávání stránky\n![přepínač mezi uložením a api](../src/assets/apiSwitch.PNG)\n\n## Přidání stránky\n\n- Stránku můžeme přidat kliknutím na nová stránka v menu nebo na tlačítko plus v seznamu všech stránek\n\n- Prvně nastavíme název stránky. Toto jméno se bude zobrazovat v prohlížeči a seznamu stránek\n- Poté adresu na které bude stránka dostupná. Používejte pouze malá a velká písmena anglické abecedy (tedy bez háčků a čárek) a čísla, nepoužívejte žádné speciální znaky\n\n> Pokud zadáte třeba 'produkty' tak vaše stránka bude dostupná na www.vasedomena.cz/produkty\n\n-Kráktý popisek, ten se zobrazuje v administraci a zároveň je potřebná pro vyhledávače a některé jiné nástroje\n- Jako poslední je zapotřebí zvolit šablonu\n\n## Uprava stránky\n\n- Upravit je možné jak nově vytvořenou tak i již existující stránku\n\n- Obsah se upravuje přímo na stránce a je možné přepisovat texty a měnit obrázky a odkazy"
                            }
                        ]
                    },
                    {
                        chapterName: "API",
                        pages: [
                            {
                                pageName: "Auth",
                                data: "# AUTH\n\n## Post /signUp\n```\nheaders:\n    authorization: token\n\nbody:\n    username\n    email\n    type\n    password\n```\n\nresponse: token nebo chybová hláška\n\n> Role administrátora je zapotřebí\n\n## Post /logIn\n\n```\nbody:\n    email\n    password\n```\n\nresponse: token nebo chybová hláška\n\n## Post /signUpAdmin\n\n```\nheaders:\n    authorization: token\n\nbody:\n    username\n    email\n    type\n    password\n    adminPassword \n    adminEmail\n```\nresponse: token nebo chybová hláška\n> Role administrátora je zapotřebí",
                            },
                            {
                                pageName: "Users",
                                data: "# Users\n\n## Get /\n\npokud v aplikaci neexistuje žádný uživatel tak odešle dočasný token sloužící k založení prvního administrátora\n\n\n## Post /deleteAccount\n\n```\nheaders:\n    authorization: token\n\nbody:\n    id\n```\n> Role administrátora je zapotřebí\n\n## Patch /:userId\n\n```\nheaders:\n    authorization: token\n\nbody:\n    username\n    email\n    password\n```\n> Může měnit jen uživatel sám sebe nebo administrátor ostatní uživatele"
                            },
                            {
                                pageName: "Upload",
                                data: "# Upload\n\n## Post /\n```\nheaders:\n    authorization: token\n\nbody: multipart/form-data\n```"
                            },
                            {
                                pageName: "Template",
                                data: "# Template\n\n## Post /\n```\nheaders:\n    authorization: token\n\nbody: multipart/form-data\n```\n\n## Get /all\n\nresponse: list všech šablon\n\n## Get /edit/:param\n\nresponse šablona s názvem :param s editačním kódem"
                            },
                            {
                                pageName: "Pages",
                                data: "# Pages\n\n## Get /all\n\nresponse: list všech stránek\n\n## Post /\n```\nheaders:\n    authorization: token\n\nbody:\n    headline\n    url\n    desc\n    template\n```\n\n## Post /data/:urlParameter\n\n```\nheaders:\n    authorization: token\n\nbody:\n    content\n```\n\n## Get /:urlParameter\n\nresponse: data stránky s url :urlParameter\n\n## Delete /:urlParameter\n\n```\nheaders:\n    authorization: token\n```\n\n> uživatel musí být autor nebo admin\n\n## Post /save\n```\nheaders:\n    authorization: token\n\nbody:\n    headline\n    url\n    desc\n    template\n```\n\n## Post /save/data/:name\n\n```\nheaders:\n    authorization: token\n\nbody:\n    name\n    data\n```\n\n## Get /id/:pageId\n\nresponse: data stránky podle id :pageId"
                            }
                        ]
                    }
                ]
            }
        }
    }
})