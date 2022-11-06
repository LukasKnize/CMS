<template>
<div class="Container">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-xs">Our Changing Planet</div>
      </q-card-section>

      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-actions style="display: flex; justify-content: space-evenly">
        <q-btn flat round color="primary" icon="edit" />
        <q-btn flat round color="red" icon="delete" />
        <q-btn flat round color="teal" icon="download" />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-xs">Our Changing Planet</div>
      </q-card-section>

      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-actions style="display: flex; justify-content: space-evenly">
        <q-btn flat round color="primary" icon="edit" />
        <q-btn flat round color="red" icon="delete" />
        <q-btn flat round color="teal" icon="download" />
      </q-card-actions>
    </q-card>
</div>
</template>

<style scoped>
.Container{
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 300px);
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
}

.my-card{
  width: 250px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>