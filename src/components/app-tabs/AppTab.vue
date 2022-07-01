<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const $props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const active = computed(() => route.path === $props.to);
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