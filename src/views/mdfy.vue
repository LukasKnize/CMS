<template>
    <v-textarea label="Raw markdown" :model-value="value.text" v-model="value.text" class="mdinp"></v-textarea>
    <v-btn
      variant="flat"
      color="secondary"
      @click="mdfy"
    >
      convert
    </v-btn>

    <v-textarea label="Raw markdown" :model-value="outValue.text" v-model="outValue.text" class="mdinp"></v-textarea>
    <v-btn
      variant="flat"
      color="secondary"
      @click="copy"
    >
      copy
    </v-btn>
</template>

<script setup>
import { reactive } from "@vue/reactivity"

let value = reactive({text: "test"})
let outValue = reactive({text: "test"})
function mdfy() {
    console.log(value.text)
    let text = value.text
    text = text.split("\n")
    text = text.join("\\n")
    outValue.text = text
    console.log(text)
}

function copy() {
     navigator.clipboard.writeText(outValue.text)
}
</script>

<style>
.mdinp{
    max-width: 90%;
}
</style>