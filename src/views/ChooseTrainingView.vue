<script setup>
import { EXERCISES } from '../data/exercises';
import { exercises } from '../structures/ExercisesTMP_TEST';

import ExerciseOverviewCard from '../components/ExerciseOverviewCard.vue';
import AppView from '../components/AppView.vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const $props = defineProps({
  weekId: {
    type: String,
    required: true,
  },
  dayId: {
    type: String,
    required: true,
  },
});

function addExercise(exercise) {
  // TODO 
  exercises.find(elem => elem.id === $props.dayId)?.trainingsPlan.push({
    id: exercise.id,
    description: exercise.description,
    imgUrl: exercise.url,
    weight: 10,
    repeats: 10
  });
  
  $router.go(-1);
}
</script>

<template>
  <AppView header="Übungsfinder" bg-gray back-button>
    <ExerciseOverviewCard v-for="exercise in EXERCISES" :key="exercise.id" :exercise="exercise"
      @selected="addExercise(exercise)" />
  </AppView>
</template>
