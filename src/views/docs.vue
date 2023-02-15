<template>
    <v-container class="container">
        <v-app-bar color="primary" density="compact">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>CMS</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>
        <SideBar />
        <Content />
    </v-container>
</template>

<script setup>
import SideBar from "@/components/sideBar.vue";
import Content from "@/components/content.vue";
import { usePagesStore } from "@/stores/pages.js";
let dataStore = usePagesStore();
</script>

<style>
    .container {
        min-height: 100vh;
        position: relative;
    }
</style>