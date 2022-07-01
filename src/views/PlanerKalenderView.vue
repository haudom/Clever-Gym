<template>
  <AppView bg-gray header="Trainingskalender">
    <AppCard center>
      <div class="row">
        <div v-for="entry in wochen" class="col" style="width: calc(100% / 7);padding-right: 2px;padding-left: 2px;" :key="entry.day">
          <h2 style="width: 40px;">{{ entry.day }}</h2>
          <router-link to="/exercise-picker">
          <button id="addMon" class="btn btn-primary" type="button" v-on:click="setupNewTrainingDay(entry.day)"
            style="width: 40px;padding: 0px;height: 40px;">+</button>
            </router-link>
        </div>
      </div>
    </AppCard>
  </AppView>
</template>

<style>
.add-button {
  height: 50px;
  width: 50px;
}
</style>

<script>
import AppView from '../components/AppView.vue'
import AppCard from '../components/AppCard.vue'
import { exercises } from '../structures/ExercisesTMP_TEST'

export default {
  components: {
    AppView,
    AppCard
},methods:
  {
    setupNewTrainingDay(day){
      exercises.push(
        {
           id: "Do",
           week: 1,
           trainingsPlan: [
          ]
        }
      )
  }
  },
  data: () => ({
    wochen: [{
      day: 'Mo',
      week: 1,
      training: []
    },
    {
      day: 'Di',
      week: 2,
      training: []
    }, {
      day: 'Mi',
      week: 1,
      training: []
    },
    {
      day: 'Do',
      week: 2,
      training: []
    }, {
      day: 'Fri',
      week: 1,
      training: []
    },
    {
      day: 'Sa',
      week: 2,
      training: []
    }
    ]
  })
}
</script>