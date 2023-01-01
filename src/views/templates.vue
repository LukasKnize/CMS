<template>
    <div class="Container">
        <q-card
            class="my-card"
            :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext"
            v-for="(template, index) in templates.templates"
            :key="index"
        >
            <q-card-section>
                <div class="text-h6 q-mb-xs">{{ template.name }}</div>
            </q-card-section>

            <img :src="'http://localhost:5500/' + template.img" />

            <q-card-actions
                style="display: flex; justify-content: space-evenly"
            >
                <q-btn flat round color="primary" icon="edit" />
                <q-btn flat round color="red" icon="delete" />
                <q-btn flat round color="teal" icon="download" />
            </q-card-actions>
        </q-card>

        <q-card
            class="my-card addCard"
            :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext"
            @click="addTemplate"
        >
            <q-icon name="add_circle" color="primary" size="xl" />
        </q-card>
    </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { reactive, computed } from "vue";
import { useColorStore } from "@/stores/colorPalete.js";

let settingsStore = useSettingsStore();
let colorStore = useColorStore();

let templates = reactive({ templates: "" });

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

function addTemplate() {
    let input = document.createElement("input");
    input.type = "file";
    input.name = "template";
    input.accept = ".zip";

    input.onchange = (e) => {
        let file = e.target.files[0];
        let data = new FormData();
        data.append("template", file);
        fetch("http://localhost:5500/template", {
            method: "POST",
            headers: {
                authorization: settingsStore.token,
            },
            body: data,
        }).then((resp) => {
            console.log(resp);
        });
    };

    input.click();
}

fetch("http://localhost:5500/template/all", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        authorization: settingsStore.token,
    },
}).then((resp) => {
    resp.json().then((data) => {
        templates.templates = data.templates;
    });
});
</script>

<style scoped>
.Container {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 300px);
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
}

.my-card {
    width: 250px;
    height: 300px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.addCard {
    display: flex;
    justify-content: center;
    align-items: center;
}
.addCard:hover {
    background-color: rgba(0, 0, 0, 0.105);
}

.q-card > img {
    max-height: 170px;
}

@media (max-width: 1000px) {
    .Container {
        justify-content: center;
    }
}

@media (max-width: 650px) {
    .Container {
        width: 100%;
    }
}
</style>