<template>
<div class="container">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
            filled
            v-model="data.pageName"
            label="Page name *"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
            :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
        />

        <q-input
            filled
            v-model="data.url"
            label="Adress *"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
            :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
        />

        <q-input
            filled
            v-model="data.desc"
            label="Short description *"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
            :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
        />

        <q-select filled v-model="data.template" :options="options" label="Select template *" :rules="[
                (val) => (val && val.length > 0) || 'Please select something',
            ]"
            :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
                />

        <q-btn label="Submit" type="submit" :color="colors.qbase" />
    </q-form>
</div>
    
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { reactive, computed } from "vue";
import { useColorStore } from "@/stores/colorPalete.js";

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

let data = reactive({
pageName: "",
url: "",
desc: "",
template: ""
})
let options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

</script>

<style scoped>
.container{
    padding-top: 50px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>

<style>
input{
    color: v-bind("colors.text") !important;
}
</style>