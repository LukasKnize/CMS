<script setup>
import myPages from "./components/myPages.vue";
import addPage from "./components/addPage.vue";
import notes from "./components/notes.vue";
import templates from "./components/templates.vue";
import plugins from "./components/plugins.vue";
import settings from "./components/settings.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";



let menu = ref(null)
let comp = reactive({component: ""})
onMounted(() => {
  menu = menu.value
})

function menuToggle() {
  menu.classList.toggle("menuOpened")
}

function changePages(p) {
  if(p == "myPages"){
    comp.component = myPages
  }else if (p == "addPage") {
    comp.component = addPage
  }else if(p == "notes"){
    comp.component = notes
  }else if(p == "templates"){
    comp.component = templates
  }else if(p == "plugins"){
    comp.component = plugins
  }else if(p == "settings"){
    comp.component = settings
  }
  
}
</script>

<template>
    <q-layout view="lHh lpr lFf" container style="height: 50px" class="shadow-2">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="menuToggle" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>WEBRANE</q-toolbar-title>

          <q-btn flat round dense icon="account_circle" />
        </q-toolbar>
      </q-header>
    </q-layout>
    <div class="contentContainer">
    <div style="width: 250px; height: calc(100vh - 50px)" class="sideMenuPanel" ref="menu">
    <q-list bordered padding class="text-primary sideMenu">
      <div>
        <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="changePages('myPages')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="library_books" />
        </q-item-section>

        <q-item-section>My pages</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="changePages('addPage')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="library_add" />
        </q-item-section>

        <q-item-section>Add page</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="changePages('notes')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="checklist" />
        </q-item-section>

        <q-item-section>Notes</q-item-section>
      </q-item>

       <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="changePages('templates')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="web" />
        </q-item-section>

        <q-item-section>Templates</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="changePages('plugins')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="extension" />
        </q-item-section>

        <q-item-section>Plugins</q-item-section>
      </q-item>
      </div>

      <div>
        <q-separator spaced />
          <q-item
        clickable
        v-ripple
        :active="link === 'settings'"
        @click="changePages('settings')"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
      </q-item>    
      </div>


    </q-list>
  </div>

  <component :is="comp.component" />
    </div>

</template>

<style scoped>
.sideMenuPanel{
  display: none;
}

.menuOpened{
  display: block;
  animation: slideIn 0.6s ease-in-out forwards;
}

.sideMenu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
}

.contentContainer{
  width: 100%;
  display: flex;
}

@keyframes slideIn {
  from {
    margin-left: -250px;
  }

  to {
    margin-left: 0;
  }
}
</style>
