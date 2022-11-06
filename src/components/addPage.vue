<template>
<div class="container">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
            filled
            v-model="name"
            label="Page name *"
            hint="the title of your page/blog post"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
        />

        <q-input
            filled
            v-model="name"
            label="Adress *"
            hint="www.example.com/..."
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
        />

        <q-input
            filled
            v-model="name"
            label="Short description *"
            hint="Helps you to orient in your pages"
            lazy-rules
            :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
            ]"
        />

        <q-select filled v-model="model" :options="options" label="Select template *" hint="Select template from your installed template" :rules="[
                (val) => (val && val.length > 0) || 'Please select something',
            ]"/>

        <q-btn label="Submit" type="submit" color="primary" />
    </q-form>
</div>
    
</template>

<script setup>
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