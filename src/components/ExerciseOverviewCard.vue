<script setup>
import { exercises } from '../structures/ExercisesTMP_TEST';
const $props = defineProps({
    exercise: {
        type: Object,
        required: true,
    },
});

function addTraining(name,description,img) {

    //TODO
    exercises.find( elem => elem.id === "Do").trainingsPlan.push(
        {
                id: name,
                description: description,
                imgUrl: img,
                weight: 10,
                repeats: 10
            }
    )
}
</script>

<template>

    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 overview-card">
        <div class="col">
            <div class="card">
                <img class="card-img-top w-100 d-block fit-cover" style="height: 200px;" :src="$props.exercise.url">   
                <div class="card-body p-4">
                    
                        <p class="text-primary card-text mb-0" v-on:click="addTraining($props.exercise.name,$props.exercise.description,$props.exercise.url)">+ADD</p>
                    <h4 class="card-title">{{ $props.exercise.name }}</h4>
                    <p class="card-text">{{ $props.exercise.description }}</p>

                </div>
            </div>
        </div>
    </div>

</template>

<style>
.fit-cover {
    object-fit: cover;
}

.overview-card {
    margin-bottom: 2%;
}
</style>
