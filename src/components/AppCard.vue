<script setup>
const $props = defineProps({
  type: {
    type: String,
    default: "white"
  },
  center: {
    type: Boolean,
  }
});
</script>

<template>
  <b-card class="app-card" :class="{
    'app-card-black': $props.type === 'black',
    'app-card-white': $props.type === 'white',
    'app-card-center': $props.center,
  }">
    <slot></slot>
  </b-card>
</template>

<style scoped>
.app-card {
  margin-bottom: 10vw;
  border-radius: 30px;
}

.app-card-center {
  text-align: center;
}

.app-card-black {
  background-color: #00061A;
  color: #FFFFFF;
}
</style>
