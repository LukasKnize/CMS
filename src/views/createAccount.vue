<template>
    <div class="app">
        <form onsubmit="event.preventDefault()">
            <ul>
                <li>
                    <p>{{ texts.accountType }}</p>
                    <select v-model="data.accountType">
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                </li>
                <li>
                    <p>{{ texts.username }}</p>
                    <input type="text" name="usename" v-model="data.username" />
                </li>
                <li>
                    <p>email</p>
                    <input type="email" name="email" v-model="data.email" />
                </li>
                <li>
                    <p>{{ texts.password }}</p>
                    <input type="password" name="pass" v-model="data.pass" />
                </li>
                <li>
                    <p>{{ texts.passwordValidation }}</p>
                    <input type="password" name="pass" v-model="data.passV" />
                </li>
            </ul>
            <button @click="validateForm">Log in</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useUserStore } from "@/stores/user.js";
import { useSettingsStore } from "@/stores/settingsPre.js";

let userStore = useUserStore();
let settingsStore = useSettingsStore();

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
    role: "",
    accountType: "",
});

let pasRegEx = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/);
let emRegEx = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
async function validateForm() {
    if (data.username.length < 2) {
        console.log("short user")
    } else if (!emRegEx.test(data.email)) {
        console.log("wrong email")
    } else if (!pasRegEx.test(data.pass)) {
        console.log("unsafe pass")
    } else if (data.pass != data.passV) {
        console.log("not mathing pass")
    } else {
        let passInfo = await hashPassword(data.pass);
        let token = generateToken();
        userStore.$patch((state) => {
            state.user.push({
                username: data.username,
                email: data.email,
                pass: passInfo.pass,
                salt: passInfo.salt,
                token: [token],
                accountType: data.accountType,
            });
        });
        settingsStore.$patch((state) => {
                state.token = token;
            });
        console.log(userStore);
    }
}

async function hashPassword(pass) {
    let saltCharSet =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let salt = "";
    for (let i = 0; i < 32; i++) {
        salt += saltCharSet.charAt(
            Math.floor(Math.random() * saltCharSet.length)
        );
    }

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
    let peper = peperArray[Math.floor(Math.random() * peperArray.length)];
    const encoder = new TextEncoder();
    let fullPass = pass + salt + peper;
    const data = encoder.encode(fullPass);
    const hash = await crypto.subtle.digest("SHA-256", data);
    let hpass = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
    return { pass: JSON.stringify(hpass), salt: salt };
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
.app {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    background-color: #ecf0f1;
    filter: drop-shadow(0px 0px 6px #34495e76);
    padding: 50px 25px;
    border-radius: 15px;
}

input {
    width: 250px;
    margin: 15px 0;
    height: 35px;
    border: #bdc3c7 2px solid;
    border-radius: 5px;
}

input:focus {
    border: #3498db 2px solid;
    outline: none;
}

button {
    height: 35px;
    border: none;
    background-color: #3498db;
    border-radius: 5px;
    color: #ecf0f1;
    font-weight: 700;
    margin-top: 15px;
}

button:hover {
    background-color: #2980b9;
}

h2 {
    color: #3498db;
}
</style>