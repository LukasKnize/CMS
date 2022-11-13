<template>
    <div class="pageContainer">
        <q-card class="my-card" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
       <q-btn flat round color="negative" icon="delete" />
        <q-btn flat round color="primary" icon="edit" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
       <q-btn flat round color="negative" icon="delete" />
        <q-btn flat round color="primary" icon="edit" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
       <q-btn flat round color="negative" icon="delete" />
        <q-btn flat round color="primary" icon="edit" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
       <q-btn flat round color="negative" icon="delete" />
        <q-btn flat round color="primary" icon="edit" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-card-actions>
       <q-btn flat round color="negative" icon="delete" />
        <q-btn flat round color="primary" icon="edit" />
      </q-card-actions>
    </q-card>

    <q-card class="my-card addCard" :class="'bg-' + colors.qgrey + ' ' + 'text-' + colors.qtext">
      <q-icon name="add_circle" color="primary" size="xl" />
    </q-card>
    </div>
</template>


<script setup>
import { useSettingsStore } from "@/stores/settingsPre.js";
import { reactive, computed } from "vue";
import { useColorStore } from "@/stores/colorPalete.js";

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
</script>


<style scoped>
.pageContainer{
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

.addCard{
  display: flex;
  justify-content: center;
  align-items: center;
}

.addCard:hover{
  background-color: rgba(0, 0, 0, 0.105);
}
</style>