<script setup>
import AppView from '../components/AppView.vue';
</script>

<template>
  <AppView header="Einstellungen">
    <div>
      Name
      <input type="text">
    </div>
    <div>
      Gewichte

      <input type="text" value="70">kg
    </div>
    <div>
      Geburtsdatum
      <input type="date">
    </div>
  </AppView>
</template>

<style>
input {
  margin: 5px;
}
</style>
