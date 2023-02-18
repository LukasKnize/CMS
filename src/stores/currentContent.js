import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useContentStore = defineStore("content", {
    state: () => {
        return {
            data: `# Idk
***Some* text** idk
# Idk2`
        }
    }
})