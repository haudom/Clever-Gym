<template>
  <AppView bg-gray header="CleverGym">
    <template v-slot:action>
      <router-link :to="{ name: 'optionen' }" class="settings-action">
        <i class="fas fa-cog"></i>
      </router-link>
    </template>

    <b-card-group deck class="d-flex flex-column">
      <router-link :to="{ name: 'training' }" style="text-decoration: none;">
        <AppCard type="black" class="main-card" center>
          <h1>Starte Training</h1>
          <img src="../assets/liegestutz.png" class="img-trainingsbutton">
          <h3>Brust Training</h3>
        </AppCard>
      </router-link>

      <router-link :to="{ name: 'statistiken' }">
        <AppCard type="white" class="main-card" center>
          <Statistik></Statistik>
        </AppCard>
      </router-link>
    </b-card-group>
  </AppView>
</template>

<style>
.settings-action {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-gray-900);
  font-size: 2rem;
  height: 100%;
}

.main-card {
  max-width: 80vw;
  width: 100%;
  margin: 0 auto;
}

.main-card .img-trainingsbutton {
  width: 80%;
}

.main-card h3 {
  bottom: 20px;
}
</style>

<script>
import Statistik from '../components/Statistik.vue';
import AppCard from '../components/AppCard.vue';
import AppView from '../components/AppView.vue';

export default {
  components: {
    Statistik,
    AppCard,
    AppView
  }
}
</script>
