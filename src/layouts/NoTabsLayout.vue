<template>
  <div class="main-view">
    <div class="main">
      <transition name="fade">
        <router-view class="main-view" style="padding-bottom: var(--app-tab-group-height)"></router-view>
      </transition>
    </div>
  </div>
</template>