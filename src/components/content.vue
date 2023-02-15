<template>
    <div id="content"></div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import { usePagesStore } from "@/stores/pages.js";
let contentArea = "";
let data = `# Idk
    
***Some* text** idk
# Idk2`;

onMounted(() => {
    contentArea = document.getElementById("content");
    contentArea.innerHTML = marked.parse(data)
});
</script>

<style scoped>
#content {
    margin-left: 300px;
}
</style>