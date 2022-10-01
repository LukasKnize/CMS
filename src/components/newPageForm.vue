<template>
<div class="app">
    <form onsubmit="event.preventDefault()">
        <h2>Add new page</h2>
        <input type="text" placeholder="Title" v-model="data.title">
        <input type="text" placeholder="Description" v-model="data.desc">
        <input type="text" placeholder="www.yourdomain.com/url" v-model="data.url">

        <button @click="add()">ADD</button>
    </form>
</div>
    
</template>

<script setup>
import { useListOfPagesStore } from '@/stores/listOfPages.js'
import { reactive } from "vue";
const data = reactive({
title: "",
desc: "",
url: ""
})

const store = useListOfPagesStore()

function add() {
    store.$patch((state) => {
        state.page.push({title: data.title,
        desc: data.desc,
        url: data.url})
    })

    console.log(store.page)
}

</script>

<style scoped>
.app{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form{
    display: flex;
    flex-direction: column;
    background-color: #ecf0f1;
    filter: drop-shadow(0px 0px 6px #34495e76);
    padding: 50px 25px;
    border-radius: 15px;
}

input{
    width: 250px;
    margin: 15px 0;
    height: 35px;
    border: #bdc3c7 2px solid;
    border-radius: 5px;
} 

input:focus{
    border: #3498db 2px solid;
     outline: none;
}

button{
    height: 35px;
    border: none;
    background-color: #3498db;
    border-radius: 5px;
    color: #ecf0f1;
    font-weight: 700;
    margin-top: 15px;
}

button:hover{
    background-color: #2980b9;
}

h2{
    color: #3498db;
}
</style>