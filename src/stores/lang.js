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
                }
            }
        }
    }
})