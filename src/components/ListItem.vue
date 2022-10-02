<template>
    <li>
        <p>{{url}}</p>
        <button><img src="../assets/delete.svg" alt="delete"></button>
    </li>
</template>

<script setup>
const props = defineProps({
    url: {type: String}
});
</script>

<style scoped>
li{
    display: flex;
}

button{
    height: 25px;
    width: 25px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    height: 25px;
    width: 25px;
}
</style>