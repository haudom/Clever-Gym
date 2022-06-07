<template>
  <div class="d-flex flex-row align-items-stretch flex-wrap bg-white nav-bar">
    <slot></slot>
  </div>
</template>

<style>
.nav-bar {
  box-shadow: 0px 5px 10px var(--bs-gray-400);
  min-height: 64px;
  max-height: 86px;
  height: 11%;
}
</style>