<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import { useColorStore } from "@/stores/colorPalete.js";
import { useSettingsStore } from "@/stores/settingsPre.js";

let colors = computed(() => {
    let colorStore = useColorStore();
    let settingsStore = useSettingsStore();
    if (settingsStore.mode == "Dark") {
        return {
            base: colorStore.dark.base,
            gray: colorStore.dark.gray,
            color: colorStore.dark.color,
            darkColor: colorStore.dark.darkColor,
            text: colorStore.dark.text,
        };
    } else if (settingsStore.mode == "Light") {
        return {
            base: colorStore.light.base,
            gray: colorStore.light.gray,
            color: colorStore.light.color,
            darkColor: colorStore.light.darkColor,
            text: colorStore.light.text,
        };
    }

    return {
        base: "#ecf0f1",
        gray: "#bdc3c7",
        color: "#3498db",
        darkColor: "#2980b9",
        text: "#000000",
    };
});
</script>

<template>
    <div class="app">
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        </header>

        <RouterView />

        <nav>
            <router-link to="/pages" tabindex="-1"
                ><button class="navButton">
                    <img
                        src="./assets/allPages.svg"
                        alt=""
                        class="icon"
                    /></button
            ></router-link>
            <router-link to="/newPage" tabindex="-1"
                ><button class="navButton">
                    <img
                        src="./assets/addPage.svg"
                        alt=""
                        class="icon"
                    /></button
            ></router-link>
            <router-link to="/settings">
                <button class="navButton">
                    <img src="./assets/settings.svg" alt="" class="icon" />
                </button>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
.app {
    background-color: v-bind("colors.base");
    position: relative;
    min-height: 100vh;
    width: 100%;
}

header {
    width: 100%;
    height: 50px;
    border-bottom: v-bind("colors.gray") 1px solid;
    position: fixed;
    top: 0;
    left: 0;
    background-color: v-bind("colors.color");
    display: flex;
    align-items: center;
    box-shadow: #34495e 0 0 10px;
    z-index: 2;
}

header .logo {
    width: 40px;
    padding-left: 15px;
}

nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: v-bind("colors.color");
    filter: drop-shadow(0px 0px 6px #34495e);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    z-index: 2;
}

.navButton {
    width: 42px;
    height: 42px;
    border-radius: 21px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 0px 2px #7f8c8d);
    background-color: v-bind("colors.base");
}

.navButton:hover {
    filter: drop-shadow(0px 0px 4px #bdc3c7);
}

.icon {
    width: 30px;
}
</style>
