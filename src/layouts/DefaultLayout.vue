<script setup>
import AppTabGroup from "../components/app-tabs/AppTabGroup.vue";
import AppTab from "../components/app-tabs/AppTab.vue";
</script>

<template>
  <div class="main-view">
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