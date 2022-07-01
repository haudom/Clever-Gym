<script setup>
function getTransition(route) {
  return "scale-slide-" + route.meta.transition;
}
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route)">
      <component :is="Component" class="position-absolute" />
    </transition>
  </router-view>
</template>

<style>
/* Variables */
:root {
  --app-tabs-height: 5rem;

  /* Überschreibe Bootstrap-Farben */

  /* Farben */
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #ffffff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-black: #000000;
 
  --bs-primary:   var(--bs-blue);
  --bs-secondary: var(--bs-gray);
  --bs-success:   var(--bs-green);
  --bs-info:      var(--bs-cyan);
  --bs-warning:   var(--bs-yellow);
  --bs-danger:    var(--bs-red);
  --bs-light:     var(--bs-gray-100);
  --bs-dark:      var(--bs-gray-900);
  
  --bs-body-color:       var(--bs-gray-900);
  --bs-body-color-light: var(--bs-gray-800);
  --bs-body-bg:          var(--bs-white);
  --bs-body-bg-dark:     var(--bs-gray-100);
  
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-font-sans-serif: 'Inter', Arial, sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
