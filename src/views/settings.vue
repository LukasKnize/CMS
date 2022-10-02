<template>
    <div class="app">
        <h2>{{ texts.h2 }}</h2>
        <ul>
            <li>
                <p>{{ texts.mode }}</p>
                <input
                    type="checkbox"
                    id="switch"
                    v-model="settingsData.mode"
                /><label for="switch" tabindex="0">Toggle</label>
            </li>
            <li>
                <p>{{ texts.lang }}</p>
                <select v-model="settingsData.language">
                    <option value="en">English</option>
                    <option value="cz">Čeština</option>
                </select>
            </li>
            <li class="block">
                <p class="small">{{ texts.whiteL }}</p>
                <input type="text" />
                <button class="md">{{ texts.addButton }}</button>
                <ListItem
                    v-for="(url, index) in urls"
                    :key="index"
                    :url="url"
                />
            </li>
            <li>
                <button @click="saveSettings()">{{ texts.saveButton }}</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useLangStore } from "@/stores/lang.js";
import { useColorStore } from "@/stores/colorPalete.js";
import ListItem from "../components/ListItem.vue";
import { reactive } from "vue";
const settingsData = reactive({
    mode: "",
    language: "en",
});

const urls = [];
let settingsStore = useSettingsStore();
let langStore = useLangStore();
let colorStore = useColorStore();

let texts = reactive({
    h2: "Settings",
    mode: "Dark mode",
    lang: "Language",
    whiteL: "Whitelist of domains (for headless option).",
    addButton: "Add to list",
    saveButton: "Save",
});

let colors = reactive({
    base: "#ecf0f1",
    gray: "#bdc3c7",
    color: "#3498db",
    darkColor: "#2980b9",
    text: "#000000"
});

function loadColors() {
    if (settingsStore.mode == "Dark") {
        colors.base = colorStore.dark.base;
        colors.gray = colorStore.dark.gray;
        colors.color = colorStore.dark.color;
        colors.darkColor = colorStore.dark.darkColor;
        colors.text = colorStore.dark.text;
    } else if (settingsStore.mode == "Light") {
        colors.base = colorStore.light.base;
        colors.gray = colorStore.light.gray;
        colors.color = colorStore.light.color;
        colors.darkColor = colorStore.light.darkColor;
        colors.text = colorStore.light.text;
    }
}

function loadLanguage() {
    if (settingsStore.language == "cz") {
        texts.h2 = langStore.cz.settings.h2;
        texts.mode = langStore.cz.settings.mode;
        texts.lang = langStore.cz.settings.language;
        texts.whiteL = langStore.cz.settings.wList;
        texts.addButton = langStore.cz.settings.addButton;
        texts.saveButton = langStore.cz.settings.saveButton;
    } else if (settingsStore.language == "en") {
        texts.h2 = langStore.en.settings.h2;
        texts.mode = langStore.en.settings.mode;
        texts.lang = langStore.en.settings.language;
        texts.whiteL = langStore.en.settings.wList;
        texts.addButton = langStore.en.settings.addButton;
        texts.saveButton = langStore.en.settings.saveButton;
    }
}
loadColors();
loadLanguage();

function saveSettings() {
    let mode = ""
    if(settingsData.mode){
        mode = "Dark"
    }else{
        mode = "Light"
    }
    settingsStore.$patch((state) => {
        (state.mode = mode),
        (state.language = settingsData.language);
    });

    console.log(settingsStore.mode)

    settingsStore = useSettingsStore();
    colorStore = useColorStore();
    loadColors();
    loadLanguage();
}
</script>

<style scoped>
/* I used switch from this codePen: https://codepen.io/mburnette/pen/LxNxNg */
.app {
    padding-top: 60px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 24px;
    background: #bdc3c7;
    display: block;
    border-radius: 100px;
    position: relative;
}

label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #ecf0f1;
    border-radius: 90px;
    transition: 0.3s;
}

input:checked + label {
    background: #9b59b6;
}

input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
}

label:active:after {
    width: 30px;
}

p {
    color: v-bind("colors.text");
}

h2 {
    padding-left: 25px;
    color: v-bind("colors.text");
}

ul {
    padding-left: 25px;
    padding-right: 25px;
}

li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
}

.block {
    display: block;
}

.small {
    font-size: 0.8em;
}

select {
    background-color: v-bind("colors.base");
    color: v-bind("colors.text");
    border: none;
}

input[type="text"] {
    width: 250px;
    margin: 15px 0;
    height: 35px;
    background-color: v-bind("colors.base");
    border: v-bind("colors.gray") 2px solid;
    border-radius: 5px;
    color: v-bind("colors.text");
}

input[type="text"]:focus {
    border: v-bind("colors.color") 2px solid;
    outline: none;
}

button {
    width: 250px;
    background-color: v-bind("colors.color");
    border: none;
    color: #ecf0f1;
    font-weight: 700;
    height: 35px;
    border-radius: 5px;
}

button:hover {
    background-color: v-bind("colors.darkColor");
}

.md {
    margin-bottom: 15px;
}
</style>