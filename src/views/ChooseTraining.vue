<template>
    <div class="container py-4 py-xl-5" id="back">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>choose exercise</h2>
            </div>
        </div>
        <div v-for="exercise in exercises" :key="exercise">
            <ExerciseOverviewCard :exercise="exercise"></ExerciseOverviewCard>
        </div>
        
    </div>
</template>
<style>
#back{
    background-color: gray;
    
}

</style>
<script>
import { EXERCISES } from '../data/exercises'
import ExerciseOverviewCard from '../components/ExerciseOverviewCard.vue'

    export default{
    data() {
        return {
            exercises: EXERCISES
        };
    },
    components: { ExerciseOverviewCard }
}
</script>