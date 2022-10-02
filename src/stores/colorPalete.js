import { defineStore } from 'pinia'

export const useColorStore = defineStore("colors", {
    state: () => {
        return {
            dark:
            {
                base: "#2c3e50",
                gray: "#34495e",
                color: "#9b59b6",
                darkColor: "#8e44ad" ,
                text: "#ffffff"
            },
            light: {
                base: "#ecf0f1",
                gray: "#bdc3c7",
                color: "#3498db",
                darkColor: "#2980b9",
                text: "#000000"
            }
        }
    }
})