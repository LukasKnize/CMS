import { defineStore } from 'pinia'

export const useSettingsStore = defineStore("settings", {
    state: () => {
        return{
            mode: "light",
            language: "en",
            whiteList: ["www.google.com", "www.docs.google.com"],
            token: ""
        }
    },
    persist: true
})