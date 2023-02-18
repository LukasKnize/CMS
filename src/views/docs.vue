<template>
    <v-container class="container">
        <v-app-bar color="primary" density="compact">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>CMS</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>
        <SideBar id="sideBar" />
        <Content />
    </v-container>
</template>

<script setup>
import SideBar from "@/components/sideBar.vue";
import Content from "@/components/content.vue";

function toggle(){
    document.getElementById("sideBar").classList.toggle("hide")
    document.getElementById("content").classList.toggle("marginLeft")
}
</script>

<style>
    .container {
        min-height: 100vh;
        position: relative;
    }

    .hide {
        display: none;
    }
</style>