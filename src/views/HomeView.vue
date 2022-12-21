<script setup>
import { reactive, computed } from "@vue/reactivity";
import { useSettingsStore } from "@/stores/settingsPre.js";
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

let headerText = reactive({ text: "Insane", color: "deep-orange-6" });
let headerTexts = [
    ["Fast", "purple-6"],
    ["Easy", "pink-6"],
    ["User-friendly", "green-6"],
    ["Customizable", "amber-6"],
    ["Insane", "deep-orange-6"],
];
let headerTextPos = 0;
setInterval(() => {
    headerText.text = headerTexts[headerTextPos][0];
    headerText.color = headerTexts[headerTextPos][1];
    if (headerTextPos == headerTexts.length - 1) {
        headerTextPos = 0;
    } else {
        headerTextPos++;
    }
}, 2000);
</script>

<template>
    <main>
        <h1 :class="'text-' + colors.qtext">Welcome to WEBRANE 🤯</h1>
        <h2 :class="'text-' + colors.qtext">
            <span :class="'text-' + headerText.color">{{
                headerText.text
            }}</span>
            Website Content Manager
        </h2>
        <div class="buttonContainer">
            <q-btn
                :class="'bg-' + colors.qbase + ' text-' + colors.qtext"
                label="Documentation"
            />
            <router-link to="/newPage"
                ><q-btn
                    :class="'bg-' + colors.qbase + ' text-' + colors.qtext"
                    label="Create new page"
            /></router-link>
        </div>
        <img src="src\assets\social-media-g75e3e88fd_640.png" alt="" />
    </main>
</template>

<style scoped>
main {
    width: 100%;
    padding-top: 100px;
    text-align: center;
}

h1 {
    font-size: 3em;
    line-height: 3em;
    padding-left: 20px;
    padding-right: 20px;
}

h2 {
    font-size: 2em;
    line-height: 2em;
    padding-left: 20px;
    padding-right: 20px;
}

.buttonContainer button {
    margin: 25px;
}

@media (max-width: 650px) {
    img {
        width: 90%;
    }

    h1 {
        font-size: 2em;
        line-height: 1.5em;
    }

    h2 {
        font-size: 1.3em;
    }
}
</style>
