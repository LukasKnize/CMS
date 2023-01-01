<script setup>
import { computed } from "vue";
import { useColorStore } from "@/stores/colorPalete.js";
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useUserStore } from "@/stores/user.js";
import router from "@/router";
import {useRoute} from 'vue-router'
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";

let menu = ref(null);
let userMenu = ref(null)
let animComponent = ref(null);
let comp = reactive({ component: "" });
onMounted(() => {
    menu = menu.value;
    userMenu = userMenu.value
    animComponent = animComponent.value;
});

function menuToggle() {
    menu.classList.toggle("menuOpened");
    animComponent.classList.toggle("openAnim");
}

let userStore = useUserStore();
let colorStore = useColorStore();
let settingsStore = useSettingsStore();

if (userStore.user.length == 0) {
    router.push("signUp");
} else if (settingsStore.token == "") {
    router.push("logIn");
}

function changePages(p) {
    if (p == "myPages") {
        router.push("pages");
    } else if (p == "addPage") {
        router.push("newPage");
    } else if (p == "templates") {
        router.push("templates");
    } else if (p == "plugins") {
        router.push("plugins");
    } else if (p == "settings") {
        router.push("settings");
    } else if (p == "login") {
        router.push("logIn");
    }else if(p == "signup"){
        router.push("signUp")
    }
}

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    settingsStore.$patch((state) => {
        state.mode = "Dark";
    });
}

if ((navigator.language || navigator.userLanguage) == "cs") {
    settingsStore.$patch((state) => {
        state.language = "cs";
    });
} else {
    settingsStore.$patch((state) => {
        state.language = "en";
    });
}

let colors = computed(() => {
    colorStore = useColorStore();
    settingsStore = useSettingsStore();
    if (settingsStore.mode == "Dark") {
        return {
            base: colorStore.dark.base,
            grey: colorStore.dark.gray,
            color: colorStore.dark.color,
            darkColor: colorStore.dark.darkColor,
            text: colorStore.dark.text,
            qbase: colorStore.dark.qbase,
            qtext: colorStore.dark.qtext,
            qgrey: colorStore.dark.qgrey,
            qcolor: colorStore.dark.qcolor,
            qdarkcolor: colorStore.dark.qdarkColor,
        };
    } else if (settingsStore.mode == "Light") {
        return {
            base: colorStore.light.base,
            grey: colorStore.light.gray,
            color: colorStore.light.color,
            qcolor: colorStore.light.qcolor,
            darkColor: colorStore.light.darkColor,
            text: colorStore.light.text,
            qbase: colorStore.light.qbase,
            qtext: colorStore.light.qtext,
            qgrey: colorStore.light.qgrey,
            qdarkcolor: colorStore.light.qdarkColor,
        };
    }

    return {
        qbase: "blue",
        base: "#ecf0f1",
        grey: "#bdc3c7",
        qgrey: "grey-3",
        color: "#3498db",
        darkColor: "#2980b9",
        text: "#000000",
        qtext: "dark",
        qcolor: "blue-10",
        qdarkcolor: "dark",
    };
});

let route=useRoute();

async function tokenCheck () {
    console.log("checked")
    if (settingsStore.token == "" && route.path != "'/logIn" && route.path != "/adminRegistration") {
        
        let resp = fetch("http://localhost:5500/users", {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })
        resp = await (await resp).json()
        console.log(resp)
        if(resp.message == "no users"){
            console.log(resp.token)
            router.push({path: "/adminRegistration", query: {token:  resp.token}})
        }else{
            router.push("logIn")
        }
        
    }
}

tokenCheck()

watch(route, () => {
    tokenCheck()
})

function logout(){
    settingsStore.token = ""
    router.push("logIn")
    accountMenu()
}

function accountMenu(){
    userMenu.classList.toggle("displayBlock")
}
</script>

<template>
    <div :class="'bg-' + colors.qdarkcolor" class="container">
        <q-layout
            view="lHh lpr lFf"
            container
            style="height: 50px"
            class="shadow-2"
        >
            <q-header elevated :class="'bg-' + colors.qbase">
                <q-toolbar>
                    <q-btn
                        flat
                        round
                        dense
                        icon="menu"
                        class="q-mr-sm"
                        @click="menuToggle"
                    />
                    <router-link to="/">
                    <q-avatar>
                        <img
                            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                        />
                    </q-avatar>
                    </router-link>

                    <q-toolbar-title>WEBRANE</q-toolbar-title>

                    <q-btn
                        flat
                        round
                        dense
                        icon="account_circle"
                        @click="accountMenu"
                    />
                </q-toolbar>
            </q-header>
        </q-layout>
        <div class="contentContainer">
            <div class="accountMenu" ref="userMenu">
            <button><q-icon name="settings" /> account settings</button>
            <button @click="logout"><q-icon name="logout" /> log out</button>
        </div>
            <div class="sideMenuPanelBackdrop" ref="menu" @click="menuToggle">
                <div
                    style="width: 250px; height: calc(100vh - 50px)"
                    class="sideMenuPanel"
                    ref="animComponent"
                    >
                    <q-list
                        bordered
                        padding
                        class="text-primary sideMenu"
                        :class="'bg-' + colors.qgrey"
                    >
                        <div>
                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('myPages')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="library_books"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >My pages</q-item-section
                                >
                            </q-item>

                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('addPage')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="library_add"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >Add page</q-item-section
                                >
                            </q-item>

                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('templates')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="web"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >Templates</q-item-section
                                >
                            </q-item>

                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('plugins')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="extension"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >Plugins</q-item-section
                                >
                            </q-item>
                        </div>

                        <div>
                            <q-separator spaced />
                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('settings')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="settings"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >Settings</q-item-section
                                >
                            </q-item>

                            <q-item
                                clickable
                                v-ripple
                                @click="changePages('signup')"
                                active-class="my-menu-link"
                            >
                                <q-item-section avatar>
                                    <q-icon
                                        name="help"
                                        :class="'text-' + colors.qcolor"
                                    />
                                </q-item-section>

                                <q-item-section :class="'text-' + colors.qcolor"
                                    >Help</q-item-section
                                >
                            </q-item>
                        </div>
                    </q-list>
                </div>
            </div>
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
}

.sideMenuPanelBackdrop {
    display: none;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 500;
    background: rgba(0, 0, 0, 0.712);
    width: 100%;
}

.menuOpened {
    display: block !important;
}

.openAnim{
animation: slideIn 0.6s ease-in-out forwards;
}

.sideMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex-shrink: 0;
}

.contentContainer {
    width: 100%;
    display: flex;
}

.accountMenu{
    display: none;
    height: 100px;
    width: 200px;
    background-color: antiquewhite;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 100;
}

.accountMenu button{
    height: 50px;
    width: 200px;
    list-style-type: none;
    border: none;
    background-color: v-bind("colors.darkColor") !important;
    color: v-bind("colors.text") !important;
}

.accountMenu button:hover{
    background-color: v-bind("colors.color") !important;
}

.displayBlock{
    display: block;
}

@keyframes slideIn {
    from {
        margin-left: -250px;
    }

    to {
        margin-left: 0;
    }
}

.q-layout-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
}
</style>
