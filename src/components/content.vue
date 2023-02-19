<template>
    <div id="content" class="marginLeft"></div>
</template>



<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useContentStore } from "@/stores/currentContent.js";
import { usePagesStore } from "@/stores/pages.js";
let contentArea = "";
let data = "";

data = usePagesStore().data;
data = JSON.parse(JSON.stringify(data.chapters[0].pages[0].data));

watch(useContentStore(), (currData) => {
    data = JSON.parse(JSON.stringify(currData.data));
    contentArea = document.getElementById("content");
    contentArea.innerHTML = marked.parse(data);
    for (const child of contentArea.children) {
        child.classList += "mg"
    }
});

onMounted(() => {
    contentArea = document.getElementById("content");
    contentArea.innerHTML = marked.parse(data);
    for (const child of contentArea.children) {
        child.classList += "mg"
    }
});
</script>

<style scoped>
.marginLeft {
    margin-left: 300px;
}
</style>

<style>
code {
    background-color: #424242;
    color: #fff;
    padding: 15px;
    display: block;
}

img {
    max-width: 90%;
}

.mg {
    margin: 20px 0;
}

blockquote {
    border-left: #D50000 solid 5px;
    background-color: #4242423c;
}
</style>