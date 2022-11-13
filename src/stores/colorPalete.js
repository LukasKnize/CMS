import { defineStore } from 'pinia'

export const useColorStore = defineStore("colors", {
    state: () => {
        return {
            dark:
            {
                qbase: "purple",
                base: "#2c3e50",
                gray: "#34495e",
                qgrey:"grey-10",
                color: "#9b59b6",
                qcolor: "purple-11",
                darkColor: "#8e44ad",
                qdarkColor: "dark",
                text: "#ffffff",
                qtext: "purple-1"
            },
            light: {
                qbase: "blue",
                base: "#ecf0f1",
                gray: "#bdc3c7",
                qgrey:"grey-3",
                color: "#3498db",
                qcolor: "blue-10",
                qdarkColor: "grey-1",
                darkColor: "#2980b9",
                text: "#000000",
                qtext: "dark"
            }
        }
    }
})