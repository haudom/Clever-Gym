<script setup>
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const route=useRoute();

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
    class="d-flex align-items-center justify-content-center bg-white btn btn-primary nav-bar-item" style="flex-grow: 1"
    :class="{ 'text-primary': active }">
    <slot></slot>
  </router-link>
</template>

<style>
.nav-bar-item {
  color: var(--bs-gray-900);
  font-size: 32px;
}
</style>