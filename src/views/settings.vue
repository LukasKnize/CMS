<template>
    <div class="container">
        <q-select
            filled
            v-model="settingsData.language"
            :options="posibleLanguages"
            label="Language"
            :bg-color="colors.qgrey"
            :color="colors.qtext"
            :label-color="colors.qtext"
        />

        <q-toggle
            label="Dark mode"
            v-model="settingsData.mode"
            :bg-color="colors.qgrey"
            :color="colors.qtext"
            :label-color="colors.qtext"
        />

        <q-input
            filled
            v-model="placeholder"
            label="White listed domains"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
            :bg-color="colors.qgrey"
            :color="colors.qtext"
            :label-color="colors.qtext"
        />
        <q-btn
            :color="colors.qbase"
            label="Add domain"
            style="margin-top: 20px"
        />
    </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useColorStore } from "@/stores/colorPalete.js";
import { reactive, computed, watch } from "vue";
let settingsData = reactive({
    mode: true,
    language: "en",
});

let posibleLanguages = ["cs", "en"];

let urls = [];
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
            qdarkcolor: colorStore.dark.qdarkColor,
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
            qdarkcolor: colorStore.light.qdarkColor,
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
        qdarkcolor: "dark",
    };
});

watch(settingsData, (mode) => {
    settingsStore.$patch((state) => {
        let saveMode
        if (mode.mode) {
            saveMode = "Dark";
        } else {
            saveMode = "Light";
        }
        (state.mode = saveMode), (state.language = settingsData.language);
    });
});
</script>

<style scoped>
.container {
    padding-top: 100px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 550px) {
    .container {
        width: calc(100% - 40px);
    }
}
</style>

<style>
span,
.q-toggle__label, .q-field__control-container>input {
    color: v-bind("colors.text") !important;
}

.q-item__label > span {
    color: black !important;
}
</style>