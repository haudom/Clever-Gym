<script setup>
import { useSlots } from 'vue';
import { useRouter } from 'vue-router';

const $props = defineProps({
  header: {
    type: String,
    default: null,
  },
  bgGray: {
    type: Boolean,
  },
  backButton: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["back"]);

const $slots = useSlots();

const $router = useRouter();

function backButtonClicked() {
  $emit("back");
  $router.go(-1);
}
</script>

<template>
  <div class="app-view" :class="{ 'app-view-bg-grey': $props.bgGray }">
    <header v-if="$props.header || $slots.header || $slots.action">
      <div class="app-view-header-back" v-if="$props.backButton" @click="backButtonClicked">
        <i class="fa-solid fa-arrow-left"></i>
      </div>

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
  background-color: var(--bs-body-bg);
}

.app-view-bg-grey {
  background-color: var(--bs-body-bg-dark);
}

.app-view > header {
  display: flex;
  flex-direction: row;
  gap: 1em;
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

.app-view-header-back {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-gray-800);
  font-size: 2rem;
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