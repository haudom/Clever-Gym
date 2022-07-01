<template>
  <AppView header="Übungsfinder" bg-grey back-button>
    <ExerciseOverviewCard v-for="exercise in exercises" :key="exercise.id" :exercise="exercise" />
  </AppView>
</template>

<script>
import {
  EXERCISES
} from '../data/exercises'
import ExerciseOverviewCard from '../components/ExerciseOverviewCard.vue'
import AppView from '../components/AppView.vue';

export default {
  data() {
    return {
      exercises: EXERCISES
    };
  },
  components: {
    ExerciseOverviewCard,
    AppView
  }
}
</script>
