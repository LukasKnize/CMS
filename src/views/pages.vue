<template>
    <div class="app">
        <pageCard
            v-for="(data, index) in Xdata.page"
            :key="index"
            :title="data.title"
            :desc="data.desc"
            :url="data.url"
        />
    </div>
</template>

<script setup>
import pageCard from "../components/pageCard.vue";
import { useListOfPagesStore } from '@/stores/listOfPages.js'
const Xdata = useListOfPagesStore()
console.log(Xdata.page)
</script>

<style scoped>
.app{
    padding-top: 60px;
    padding-bottom: 75px;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: max-content;
    justify-items: center;
}

@media (min-width: 550px){
    .app{
        grid-template-columns: 50% 50%;
    }
}

@media (min-width: 900px){
    .app{
        grid-template-columns: 25% 25% 25% 25%;
    }
}

@media (min-width: 1200px){
    .app{
        grid-template-columns: 20% 20% 20% 20% 20%;
    }
}
</style>