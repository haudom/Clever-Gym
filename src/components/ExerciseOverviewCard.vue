<template>
    
         <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" id="OverviewCard">
            <div class="col">
                <div class="card"><img class="card-img-top w-100 d-block fit-cover" style="height: 200px;" src:exerciseImage>
                    <div class="card-body p-4">
                        <router-link to="/kalender">
                        <p class="text-primary card-text mb-0" v-on:click="addTraining">+ADD</p>
                        </router-link>
                        <h4 class="card-title">{{exerciseName}}</h4>
                        <p class="card-text">{{exerciseDescription}}</p>
                        
                    </div>
                </div>
            </div>
        </div>

</template>
<style>
    #OverviewCard{
        margin-bottom: 2%;
    }
</style>
<script>
export default {
    props: ["exercise"],
    data() {
        return {
            exerciseName: this.exercise.name,
            exerciseDescription: this.exercise.description,
            exerciseImage: this.exercise.url
        }
    },
    methods: {
        addTraining(){
            //TODO
        }

    }
}
</script>