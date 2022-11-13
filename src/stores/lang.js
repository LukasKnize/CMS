import { defineStore } from 'pinia'

export const useLangStore = defineStore("lang", {
    state: () => {
        return {
            en:
            {
                settings: {
                    h2: "Settings",
                    mode: "Dark mode",
                    language: "Language",
                    wList: "Whitelist of domains (for headless option).",
                    addButton: "Add domain",
                    saveButton: "Save settings"
                },
                addNewpage: {
                    h2: "Add new page",
                    title: "Title",
                    desc: "Description",
                    addButton: "ADD"
                },
                login:{
                    password: "Password",
                    loginButton: "Log in"
                },
                signUp: {
                    accountType: "what kind of account you want to create:",
                    username: "username (we recommande to use your full name, so other admins and editors can identify your work)",
                    password: "create safe password (at least 12 characters and one number)",
                    passwordValidation: "confirm your password",
                    loginButton: "create account"
                }
            },
            cz: {
                settings: {
                    h2: "Nastavení",
                    mode: "Tmavý režim",
                    language: "Jazyk",
                    wList: "Bílá listina domén (pro headless možnost).",
                    addButton: "Přidat doménu",
                    saveButton: "Uložit nastavení"
                },
                addNewpage: {
                    h2: "Přidat novou stránku",
                    title: "Titulek",
                    desc: "Popis",
                    addButton: "Přidat"
                },
                login:{
                    password: "Heslo",
                    loginButton: "Přihlásit se"
                },
                signUp: {
                    accountType: "zvolte typ účtu:",
                    username: "uživatelské jméno (doporučujeme vaše celé jméno, aby ostatní administrátoři a uživatelé mohli identifikovat vaší práci)",
                    password: "vytvořte bezpečné heslo (alespoň 12 znaků a minimálně jedno číslo)",
                    passwordValidation: "potvrďte své heslo",
                    loginButton: "vytvořit účet"
                }
            }
        }
    }
})