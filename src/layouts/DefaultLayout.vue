<script setup>
import AppTabGroup from "../components/app-tabs/AppTabGroup.vue";
import AppTab from "../components/app-tabs/AppTab.vue";

function getTransition(route) {
  return "slide-" + route.meta.transition;
}
</script>

<template>
  <div class="default-layout">
    <div class="main-view-container">
      <router-view v-slot="{ Component, route }">
        <transition :name="getTransition(route)">
          <component :is="Component" class="main-view" />
        </transition>
      </router-view>
    </div>

    <AppTabGroup class="main-nav">
      <AppTab to="/">
        <i class="fa-solid fa-dumbbell"></i>
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
.main-view-container {
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  min-height: 100vh;
}

.main-view {
  top: 0;
  left: 0;
  position: absolute;
  padding-bottom: var(--app-tabs-height);
}

.main-nav {
  position: fixed;
  top: calc(100vh - var(--app-tabs-height));
  left: 0;
  width: 100vw;
  height: var(--app-tabs-height);
}
</style>