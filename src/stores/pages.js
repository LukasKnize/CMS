import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePagesStore = defineStore("pages", {
    state: () => {
        return {
            data: {
                chapters: [
                    {
                        chapterName: "first website",
                        pages: [
                            {
                                pageName: "new post",
                                data: `# Idk
    
                        ***Some* text** idk
                        # Idk2`,
                            }
                        ]
                    },
                    {
                        chapterName: "second website",
                        pages: [
                            {
                                pageName: "new post",
                                data: `# Idk
    
                        ***Some* text** idk
                        # Idk2`,
                            }
                        ]
                    }
                ]
            }
        }
    }
})