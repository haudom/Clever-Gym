<script setup>
import { ref } from 'vue';
import AppView from '../components/AppView.vue';
import { useSettingsStore } from '../store/settings.store';

const settingsStore = useSettingsStore();

const name = ref(settingsStore.name);
const bornAt = ref(settingsStore.bornAt);
const weight = ref(settingsStore.weight);

function saveSettings() {
  settingsStore.setSettings({
    name: name.value, bornAt: bornAt.value, weight: weight.value,
  });
}
</script>

<template>
  <AppView header="Einstellungen" back-button>
    <b-form @change="saveSettings">
      <b-form-group label="Name:" label-for="settings-name">
        <b-form-input id="settings-name" v-model="name" type="text" placeholder="Name eingeben"></b-form-input>
      </b-form-group>
      
      <b-form-group label="Gewichte:" label-for="settings-weight">
        <b-input-group append="kg">
          <b-form-input id="settings-weight" v-model.number="weight" type="number" :min="0"></b-form-input>
        </b-input-group>
      </b-form-group>
      
      <b-form-group label="Geburtsdatum:" label-for="settings-bornAt">
        <b-form-input id="settings-bornAt" v-model="bornAt" type="date"></b-form-input>
      </b-form-group>
    </b-form>
  </AppView>
</template>
