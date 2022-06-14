<script setup>
import AppTabGroup from "./components/app-tabs/AppTabGroup.vue";
import AppTab from "./components/app-tabs/AppTab.vue";
</script>

<template>
  <div class="app">
    <div class="main">
      <transition name="fade">
        <router-view class="main-view" style="padding-bottom: var(--app-tab-group-height)"></router-view>
      </transition>
    </div>

    <AppTabGroup class="w-100 fixed-bottom" style="height: var(--app-tab-group-height);">
      <AppTab to="/">
        <i class="fas fa-dumbbell"></i>
      </AppTab>
      <AppTab to="/statistiken">
        <i class="fa-solid fa-chart-line"></i>
      </AppTab>
      <AppTab to="/kalender">
        <i class="fa-solid fa-calendar"></i>
      </AppTab>
    </AppTabGroup>
  </div>
</template>

<style>
/* Variables */
:root {
  --app-tab-group-height: 5rem;
  --text-color: #2c3e50;
}

#app {
  font-family: 'Inter', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
