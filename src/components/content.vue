<template>
    <div id="content"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let contentArea = ""
let data = `# Idk
    
Some text idk
# Idk2`;
data = data.split("\n");

onMounted(() => {
    contentArea = document.getElementById("content")
    for (let i = 0; i < data.length; i++) {
    if (/^\# (.*)$/gm.test(data[i])) {
        contentArea.innerHTML += "<h1>" + data[i].split("# ")[1] + "</h1>"
    }else {
        contentArea.innerHTML += "<p>" + data[i] + "</p>"
    }
    console.log(data[i])
}
});


</script>

<style scoped>
#content{
    margin-left: 300px;
}
</style>