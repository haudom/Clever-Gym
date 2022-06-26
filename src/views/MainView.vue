<template>
  <AppView bg-grey header="CleverGym">
    <template v-slot:action>
      <router-link to="/optionen" class="settings-action">
        <i class="fas fa-cog"></i>
      </router-link>
    </template>

    <router-link to="/training">
      <AppCard type="black"  class="btn-big" center style="background-color:black">
        <h1>Starte Training</h1>
        <img src="../assets/liegestutz.png" alt="" class="img-trainingsbutton">
        <h3>Brust Training</h3>
      </AppCard>
    </router-link>

    <router-link to="/statistiken">
      <AppCard type="white" class="btn-big" center>
        <Statistik></Statistik>
      </AppCard>
    </router-link>
  </AppView>
</template>

<style>
html, body {margin: 0; height: 100%; overflow: hidden}
.settings-action {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-gray-900);
  font-size: 2rem;
  height: 100%;
}

.btn-big {
  left: 5vw;
  width: 80vw;
  height: 80vw;
  margin-bottom: 10%;
  border-radius: 30px;
}

.img-trainingsbutton {
  position: relative;
  width: 80%;
  height: 80%;
}
h3{
  position: relative;
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
