<template>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Untitled</title>

</head>

<body>
    <div class="container py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>choose training</h2>
            </div>
        </div>
        <div v-for="exercise in exercises">
            <ExerciseOverviewCard :exercise="exercise"></ExerciseOverviewCard>
        </div>
        
    </div>
</body>
</template>

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