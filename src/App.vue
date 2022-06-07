<script setup>
import NavBar from "./components/NavBar.vue";
import NavBarItem from "./components/NavBarItem.vue";
</script>

<template>
  <div class="app">
    <div class="main">
      <router-view class="main-view"></router-view>
    </div>
    <NavBar class="w-100 fixed-bottom">
      <NavBarItem to="/">
        <i class="fas fa-dumbbell"></i>
      </NavBarItem>
      <NavBarItem to="/statistiken">
        <i class="fa-solid fa-chart-line" ></i>
      </NavBarItem>
      <NavBarItem to="/kalender">
        <i class="fa-solid fa-calendar"></i>
      </NavBarItem>
    </NavBar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
