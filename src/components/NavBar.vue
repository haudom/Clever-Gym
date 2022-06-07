<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>