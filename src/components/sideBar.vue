<template>
    <v-card class="mx-auto sideMenu" width="300">
      <Lists v-for="(data, i) in propData.chapters" :key="i" :listItem="data" />
    </v-card>
</template>

<script setup>
import Lists from "../components/lists.vue"
import {toRaw } from "vue"
import { usePagesStore } from "@/stores/pages.js";
let dataStore = usePagesStore();
let propData = JSON.parse(JSON.stringify(dataStore.data))
console.log(propData.chapters)
console.log(propData.chapters.length)
</script>

<style scoped>
.sideMenu {
    height: calc(100vh - 48px);
    position: fixed;
    top: 48px;
    left: 0;
}
</style>