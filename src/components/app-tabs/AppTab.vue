<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const $props = defineProps(["to"]);

const active = computed(() => {
  if (typeof $props.to === "string") {
    return route.path === $props.to;
  }
  if ($props.to.name) {
    return route.name === $props.to.name;
  }
  if ($props.to.path) {
    return route.path === $props.to.path;
  }

  return false;
});
</script>

<template>
  <router-link :to="$props.to"
    class="d-flex align-items-center justify-content-center bg-white btn btn-primary app-tab" style="flex-grow: 1"
    :class="{ 'text-primary': active }">
    <slot></slot>
  </router-link>
</template>

<style>
.app-tab {
  color: var(--bs-gray-900);
  font-size: 2rem;
  border: none;
  box-shadow: none !important;
}

.app-tab:hover {
  color: var(--bs-gray-900);
}
.app-tab:active {
  color: var(--bs-gray-900);
  background-color: var(--bs-gray-100) !important;
}
</style>