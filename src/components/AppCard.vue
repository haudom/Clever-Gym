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
  border-radius: .5em;
  border-radius: 1em;
}
.app-card:not(:last-child) {
  margin-bottom: 1.5em;
}

.app-card-center {
  text-align: center;
}

.app-card-black {
  /* background-color: #00061A; */
  background-color: var(--bs-black);
  color: var(--bs-white);
}
</style>
