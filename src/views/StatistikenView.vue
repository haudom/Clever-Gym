<script setup>
import Statistik from '../components/Statistik.vue';
import AppView from '../components/AppView.vue';
import AppCard from '../components/AppCard.vue';
</script>

<style>
html, body {margin: auto; height: auto; overflow: auto}
</style>

<template>
<AppView bg-grey header="Statistiken">
  <h1>diese Woche</h1>
  <AppCard>
    <Statistik></Statistik>
  </AppCard>
  <h1>Letzte Woche</h1>
  <AppCard>
    <Statistik></Statistik>
  </AppCard>
</AppView>
</template>
