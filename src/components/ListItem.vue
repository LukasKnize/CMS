<template>
    <li>
        <p>{{ url }}</p>
        <button><img src="../assets/delete.svg" alt="delete" /></button>
    </li>
</template>

<script setup>
import {computed} from "vue"
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useColorStore } from "@/stores/colorPalete.js";
const props = defineProps({
    url: { type: String },
});

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

<style scoped>
p {
    color: v-bind("colors.text");
}

li {
    display: flex;
}

button {
    height: 25px;
    width: 25px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    height: 25px;
    width: 25px;
}
</style>