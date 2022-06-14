<script setup>
import { useSlots } from 'vue';

const $props = defineProps({
  header: {
    type: String,
    default: null,
  },
  bgGrey: {
    type: Boolean,
  },
  bottomPadding: {
    type: [Number, String],
    default: null,
  }
});

const $slots = useSlots();
</script>

<template>
  <div class="app-view" :class="{ 'app-view-bg-grey': $props.bgGrey }" :style="{ 'padding-bottom': $props.bottomPadding ?? 0 }">
    <header v-if="$props.header || $slots.header || $slots.action">
    <!-- Header Title -->
      <div class="app-view-header-text">
        <slot name="header" v-if="$slots.header"></slot>
        <h1 v-else>{{ $props.header }}</h1>
      </div>

      <div class="app-view-header-action" v-if="$slots.action">
        <slot name="action"></slot>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.app-view {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-view-bg-grey {
  background-color: #E5E5E5;
}

.app-view > header {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.app-view > header > * {
  padding-top: 1rem;
}
.app-view > header > :first-child {
  padding-left: 1.5rem;
}
.app-view > header > :last-child {
  padding-right: 1.5rem;
}

.app-view-header-text {
  flex-grow: 1;
}
.app-view-header-text > h1 {
  margin: 0;
  font-weight: 800;
  font-size: 2rem;
  font-family: Inter;
  letter-spacing: -0.02em;
}
.app-view-header-action {

}

.app-view > main {
  flex-grow: 1;
  padding: 1.25rem 1.5rem;
}
</style>