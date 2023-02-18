<template>
    <div class="listContainer">
        <h2 class="chapterH2">{{listItem.chapterName}}</h2>
        <v-list v-for="(item, i) in listItem.pages" :key="i" @click="changeCurrentData(item.data)" class="chapterLink">{{item.pageName}}</v-list>
    </div>
</template>

<script setup>
import { useContentStore } from "@/stores/currentContent.js";
const props = defineProps({
    listItem: Object,
});

function changeCurrentData(data) {
    console.log(data)
    useContentStore().data = data
}
</script>

<style>
    .chapterH2{
        color: #424242;
        padding-left: 5px;
    }

    .chapterLink{
        padding-left: 10px !important;
        text-decoration: underline;
        cursor: pointer;
    }
</style>