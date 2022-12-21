<template>
    <div class="Container">
        <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
                filled
                v-model="loginData.email"
                label="Email*"
                lazy-rules
                :rules="[
                    (val) =>
                        (val && val.length > 0) || 'Please type your email',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-input
                filled
                type="password"
                v-model="loginData.password"
                label="Password *"
                lazy-rules
                :rules="[
                    (val) =>
                        (val !== null && val !== '') ||
                        'Please type your password',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-toggle
                v-model="loginData.save"
                label="Remember my email on this device."
                :class="'text-' + colors.qtext"
            />

            <div>
                <q-btn label="Submit" type="submit" :color="colors.qbase" @click="login" />
            </div>
        </q-form>
    </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { reactive, computed } from "@vue/reactivity";
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

let loginData = reactive({
    email: "",
    password: "",
    save: false,
});

async function login(e) {
    e.preventDefault();
    let data = {
        email: loginData.email,
        password: loginData.password,
    };
    const resp = fetch("http://localhost:5500/auth/logIn/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log(await resp);
}
</script>
<style scoped>
.Container {
    padding-top: 100px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 550px) {
    .Container {
        width: calc(100% - 40px);
    }
}
</style>

<style>
input {
    color: v-bind("colors.text") !important;
}
</style>