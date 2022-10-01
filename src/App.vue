<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="app">
        <header>
            <img
                alt="Vue logo"
                class="logo"
                src="@/assets/logo.svg"
            />
        </header>

        <RouterView />

        <nav>
          <router-link to="/pages" tabindex="-1"><button class="navButton"><img src="./assets/allPages.svg" alt="" class="icon" /></button></router-link>
           <router-link to="/newPage" tabindex="-1"><button class="navButton"><img src="./assets/addPage.svg" alt="" class="icon" /></button></router-link>
           <router-link to="/settings"> <button class="navButton"><img src="./assets/settings.svg" alt="" class="icon" /></button> </router-link>
        </nav>
    </div>
</template>

<style scoped>
.app{
  background-color: #ecf0f1;
  position: relative;
  min-height: 100vh;
  width: 100%;
}

header{
  width: 100%;
  height: 50px;
  border-bottom: #7f8c8d 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3498db;
  display: flex;
  align-items: center;
  box-shadow: #34495e 0 0 10px;
  z-index: 2;
}

header .logo{
  width: 40px;
  padding-left: 15px;
}

nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #3498db;
  filter: drop-shadow(0px 0px 6px #34495e);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 2;
}

.navButton{
  width: 42px;
  height: 42px;
  border-radius: 21px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 0px 2px #7f8c8d);
  background-color: #ecf0f1;
}

.navButton:hover{
  filter: drop-shadow(0px 0px 4px #bdc3c7);
}

.icon{
  width: 30px;
}
</style>
