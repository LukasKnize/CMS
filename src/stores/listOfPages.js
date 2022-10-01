import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListOfPagesStore = defineStore("pages", {
    state: () => {
        return{
            page: [
                {
                    title: "first website",
                    desc: "lets build something awesome",
                    url: "www.google.com",
                },
                {
                    title: "second website",
                    desc: "lets build something awesome",
                    url: "www.google.com",
                },
            ]
        }
    },
    actions: {
        addNewPage(data) {
            this.page.push(data)
            console.log(this.page)
        },
        deletePage(index){
            this.page.splice(index, 1)
        }
    }
})