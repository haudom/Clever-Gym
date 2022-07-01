<script setup>
import Statistik from '../components/Statistik.vue';
import AppView from '../components/AppView.vue';
import AppCard from '../components/AppCard.vue';
</script>

<template>
  <AppView bg-gray header="Statistiken">
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
