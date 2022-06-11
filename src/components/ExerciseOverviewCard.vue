<template>
         <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col">
                <div class="card"><img class="card-img-top w-100 d-block fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                    <div class="card-body p-4">
                        <p class="text-primary card-text mb-0" v-on:click="addTraining">+ADD</p>
                        <h4 class="card-title">{{exercise.name}}</h4>
                        <p class="card-text">{{excercise.description}}</p>
                        <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            props: [exercise]
        }
    },
    methods: {
        addTraining(){
            //TODO
        }

    }
}
</script>