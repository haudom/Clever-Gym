<template>
  <transition name="fade">
    <router-view class="app"></router-view>
  </transition>
</template>

<style>
/* Variables */
:root {
  --app-tab-group-height: 5rem;
  --text-color: #2c3e50;
}

html,
body {
  margin: 0;
}

.app {
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
