<template>
    <div class="Container">
        <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
                filled
                v-model="loginData.email"
                label="Email*"
                lazy-rules
                :rules="[
                    (val) => (val && val.length > 0) || 'Please type your email',
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
                        (val !== null && val !== '') || 'Please type your password'
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
                <q-btn label="Submit" type="submit" :color="colors.qbase" />
            </div>
        </q-form>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";
import { useSettingsStore } from "@/stores/settingsPre.js";
import { reactive, computed } from "@vue/reactivity";
import { useColorStore } from "@/stores/colorPalete.js";

let userStore = useUserStore();
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

let loginData = reactive({
    email: "",
    password: "",
    save: false
});

async function onSubmit(e) {
    e.pre
    let salt = "";
    let userIndex = "";
    for (let i = 0; i < userStore.user.length; i++) {
        if (userStore.user[i].email == loginData.email) {
            salt = userStore.user[i].salt;
            userIndex = i;
            break;
        }
    }

    if (salt != "") {
        if (await checkPassword(salt, loginData.password, userIndex)) {
            let token = generateToken();
            settingsStore.$patch((state) => {
                state.token = token;
            });

            useUserStore.$patch((state) => {
                state.user[userIndex].token.push(token);
            });
        }
    } else {
        //error
    }
}

async function checkPassword(salt, pass, userIndex) {
    let peperArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    for (let i = 0; i < peperArray.length; i++) {
        const encoder = new TextEncoder();
        let fullPass = pass + salt + peperArray[i];
        const data = encoder.encode(fullPass);
        const hash = await crypto.subtle.digest("SHA-256", data);
        let hpass = Array.prototype.map
            .call(new Uint8Array(hash), (x) =>
                ("00" + x.toString(16)).slice(-2)
            )
            .join("");
        if (userStore.user[userIndex].pass == JSON.stringify(hpass)) {
            return true;
        }
    }
    return false;
}

function generateToken() {
    let tokenCharSet =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += tokenCharSet.charAt(
            Math.floor(Math.random() * tokenCharSet.length)
        );
    }
    return token;
}
</script>
<style scoped>
.Container {
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