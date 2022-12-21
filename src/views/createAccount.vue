<template>
    <div class="Container">
        <q-form @submit="onSubmit" class="q-gutter-md">
            <q-select
                filled
                v-model="data.accountType"
                :options="accountTypes"
                label="Type of account"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-input
                filled
                v-model="data.email"
                label="Email*"
                lazy-rules
                :rules="[
                    (val) => emailValid(val) || 'This is not a valid email.',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-input
                filled
                v-model="data.username"
                label="UserName*"
                lazy-rules
                :rules="[
                    (val) =>
                        (val && val.length > 0) || 'Please type your username',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-input
                filled
                type="password"
                v-model="data.pass"
                label="Password *"
                lazy-rules
                :rules="[
                    (val) =>
                        passValid(val) ||
                        'Password must contain atleast 12 characters, capital letter and numbers.',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <q-input
                filled
                type="password"
                v-model="data.passV"
                label="Password *"
                lazy-rules
                :rules="[
                    (val) => val == data.pass || 'Passwords are different',
                ]"
                :bg-color="colors.qgrey"
                :color="colors.qtext"
                :label-color="colors.qtext"
            />

            <div>
                <q-btn label="Submit" type="submit" :color="colors.qbase" @click="createUser" />
            </div>
        </q-form>
    </div>
</template>

<script setup>
import { reactive, computed } from "@vue/reactivity";
import { useUserStore } from "@/stores/user.js";
import { useSettingsStore } from "@/stores/settingsPre.js";
import { useColorStore } from "@/stores/colorPalete.js";

let userStore = useUserStore();
let settingsStore = useSettingsStore();
let colorStore = useColorStore();

let texts = {
    accountType: "what kind of account you want to create:",
    username:
        "username (we recommande to use your full name, so other admins and editors can identify your work)",
    password: "create safe password (at least 12 characters and one number)",
    passwordValidation: "confirm your password",
    loginButton: "create account",
};

let data = reactive({
    username: "",
    email: "",
    pass: "",
    passV: "",
    accountType: "",
});

let accountTypes = ["admin", "editor"];

let pasRegEx = new RegExp(
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/
);
let emRegEx = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function passValid(p) {
    return pasRegEx.test(p);
}

function emailValid(p) {
    return emRegEx.test(p);
}

async function createUser(e) {
    e.preventDefault()
    if (
        data.username != "" &&
        emailValid(data.email) &&
        data.accountType != "" &&
        passValid(data.pass) &&
        data.pass == data.passV
    ) {
        let userData = {
            username: data.username,
            email: data.email,
            type: data.accountType,
            password: data.pass,
        };
        const resp = fetch("http://localhost:5500/auth/signUp/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        console.log(await resp)
    }
}

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

span,
.q-toggle__label {
    color: v-bind("colors.text") !important;
}

.q-item__label > span {
    color: black !important;
}
</style>