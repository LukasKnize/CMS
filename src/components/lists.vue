<template>
    <div class="container">
        <h2>{{listItem.chapterName}}</h2>
        <v-list v-for="(item, i) in listItem.pages" :key="i">{{item.pageName}}</v-list>
    </div>
</template>

<script setup>
const props = defineProps({
    listItem: Object,
});
console.log(props.listItem)
</script>