<template>
    <div class="container">
        <q-select filled v-model="Language" :options="options" label="Language" />

        <q-toggle label="Dark mode" v-model="darkMode" />

        <q-input
            filled
            v-model="name"
            label="White listed domains"
            hint="Domains that can access your api."
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
        />
        <q-btn color="primary" label="Add domain" style="margin-top: 20px" />
    </div>
</template>

<script setup>
let options = ["Čeština", "English"];
import {ref} from 'vue'

let darkMode = ref(false)
let Language = ref("English")
</script>

<style scoped>
.container{
    padding-top: 50px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>