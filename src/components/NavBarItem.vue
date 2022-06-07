<template>
  <div class="navbar-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.navbar-item {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>