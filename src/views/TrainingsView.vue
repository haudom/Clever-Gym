<template>
  <div>
    <h1>Training</h1>
  </div>
  <div class="swipe-area round-box">
    <h2 style="margin-top: 5%;">Liegestütz</h2>  
    <img src="../assets/logo.png" class="swipe-element-child">
    <div class="swipe-element-child">Dies ist eine sehr einfache Übung. Stütze dich auf deine Arme und mach Liegestütze.</div>


    <div class="btn-swipe">
        <button class="btn-swipe-btn">+</button>
        <h3>25</h3>
        <button class="btn-swipe-btn">-</button>
    </div>

    <div class="btn-swipe">
        <button class="btn-swipe-btn">+</button>
        <h3>25</h3>
        <button class="btn-swipe-btn">-</button>
    </div>


  </div>
  
</template>

<script>
import { mapStores } from 'pinia';
import { useLocalStore } from '../store/local.storage';

export default {
   mounted() {
       this.training = this.localStore.calendar.weeks.days.trainingsPlan.clone(); //@ Christian: Kannst du das bitte exestierend machen?
   },
  components: {
      
  },
  methods: {
      swipeSeriesFinished(){
   //     this.training.
      },
      swipeSeriesSkip(){

      },
      swipeExerciseFinished(){

      }      
  },
  data: () => ({
      training: []
  }),
  computed: {
    localStore: mapStores(useLocalStore).localStore
  }
}
</script>


<style>
html{
    background: #cccccc;
}

.btn-swipe{
    margin: 10%;
    display: inline-block;
}
.btn-swipe-btn{
    width: 15vw;
    border-radius: 30px;
    display: inline-block;
}

.swipe-element-child{
    width: 50vw;
    height: 50vw;
    margin: auto;
}

.round-box{

    border-radius: 30px;
    box-shadow: 5px;
}
.swipe-area{
    
    background: #EEEEEE;
    height: 75vh;
    width: 80vw;
    bottom: 5%;
    overflow: hidden;
    display: block;
    margin-left: 10%;
    margin-right: 10%;
}

</style>