<template>
            <div class="container">
        <q-select filled v-model="settingsData.language" :options="options" label="Language" :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext" />

        <q-toggle label="Dark mode" v-model="settingsData.mode" :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext" />

        <q-input
            filled
            v-model="name"
            label="White listed domains"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
            :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
        />
        <q-btn :color="colors.qbase"  label="Add domain" style="margin-top: 20px" />
    </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useLangStore } from "@/stores/lang.js";
import { useColorStore } from "@/stores/colorPalete.js";
import ListItem from "../components/ListItem.vue";
import { reactive, computed } from "vue";
let settingsData = reactive({
    mode: true,
    language: "en",
});

let urls = [];
let langStore = useLangStore();

let settingsStore = useSettingsStore();
let colorStore = useColorStore();

let colors = computed(() => {
    colorStore = useColorStore();
    settingsStore = useSettingsStore();
    if (settingsStore.mode == "Dark") {
        return {
            base: colorStore.dark.base,
            gray: colorStore.dark.gray,
            color: colorStore.dark.color,
            darkColor: colorStore.dark.darkColor,
            text: colorStore.dark.text,
            qbase: colorStore.dark.qbase,
            qtext: colorStore.dark.qtext,
            qgrey: colorStore.dark.qgrey,
            qcolor: colorStore.dark.qcolor,
            qdarkcolor: colorStore.dark.qdarkColor
        };
    } else if (settingsStore.mode == "Light") {
        return {
            base: colorStore.light.base,
            gray: colorStore.light.gray,
            color: colorStore.light.color,
            qcolor: colorStore.light.qcolor,
            darkColor: colorStore.light.darkColor,
            text: colorStore.light.text,
            qbase: colorStore.light.qbase,
            qtext: colorStore.light.qtext,
            qgrey: colorStore.light.qgrey,
            qdarkcolor: colorStore.light.qdarkColor
        };
    }

    return {
        qbase: "blue",
        base: "#ecf0f1",
        gray: "#bdc3c7",
        qgrey: "grey-3",
        color: "#3498db",
        darkColor: "#2980b9",
        text: "#000000",
        qtext: "dark",
        qcolor: "blue-10",
        qdarkcolor: "dark"
    };
});

if (settingsStore.mode == "Dark") {
    settingsData.mode = true;
}else{
    settingsData.mode = false;
}

settingsData.language = settingsStore.language;

urls = settingsStore.whiteList;

let texts = reactive({
    h2: "Settings",
    mode: "Dark mode",
    lang: "Language",
    whiteL: "Whitelist of domains (for headless option).",
    addButton: "Add to list",
    saveButton: "Save",
});

function loadLanguage() {
    if (settingsStore.language == "cs") {
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
loadLanguage();

function saveSettings() {
    let mode = "";
    if (settingsData.mode) {
        mode = "Dark";
    } else {
        mode = "Light";
    }
    settingsStore.$patch((state) => {
        (state.mode = mode), (state.language = settingsData.language);
    });

    console.log(settingsStore.mode);

    settingsStore = useSettingsStore();
    colorStore = useColorStore();
    loadColors();
    loadLanguage();
}
</script>

<style scoped>
/* I used switch from this codePen: https://codepen.io/mburnette/pen/LxNxNg */
.container{
    padding-top: 50px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>