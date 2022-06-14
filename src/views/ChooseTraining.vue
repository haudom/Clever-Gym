<template>
<AppView header="Übungsfinder" bg-grey>
    <ExerciseOverviewCard v-for="exercise in exercises" :key="exercise.id" :exercise="exercise"  />
</AppView>
</template>

<style>
#back {
  background-color: gray;
}
</style>

<script>
import {
  EXERCISES
} from '../data/exercises'
import ExerciseOverviewCard from '../components/ExerciseOverviewCard.vue'
import AppView from '../components/AppView.vue';
import AppCard from '../components/AppCard.vue';

export default {
  data() {
    return {
      exercises: EXERCISES
    };
  },
  components: {
    ExerciseOverviewCard,
    AppView,
    AppCard
}
}
</script>
