<template>
  <div class="no-tabs-layout">
    <div class="no-tabs-container">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" class="no-tabs-view" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.no-tabs-container {
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  min-height: 100vh;
}

.no-tabs-view {
  top: 0;
  left: 0;
  position: absolute;
}
</style>