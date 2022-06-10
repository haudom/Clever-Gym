<template>
  <div>
    <h1>Training</h1>
  </div>
  
  <div class="swipe-area round-box" >
    <h2 style="margin-top: 5%;">{{exerciseName}}</h2>
    <img v-bind:src="exerciseImgUrl" class="swipe-element-child">
    <div class="swipe-element-child">{{exerciseDescription}}
    </div>

    <div class="btn-swipe">
      <button class="btn-swipe-btn">+</button>
      <h3 id="weight">{{exerciseWeight}}</h3>
      <button class="btn-swipe-btn">-</button>
    </div>

    <div class="btn-swipe">
      <button class="btn-swipe-btn">+</button>
      <h3 id="repeat">{{exerciseRepeats}}</h3>
      <button class="btn-swipe-btn">-</button>
    </div>

  </div>
  <div>
      <button class="btn-tmp-Start" id="swipe-controls1" v-on:click="initTraining" >Bereit!</button>
      <button class="btn-tmp-Swipe" id="swipe-controls2" v-on:click="swipeSeriesSkip" >Überspringen</button>
      <button class="btn-tmp-Swipe" id="swipe-controls3" v-on:click="swipeExerciseFinished">Übung fertig</button>
      <button class="btn-tmp-Swipe" id="swipe-controls4" v-on:click="swipeSeriesFinished">Satz fertig</button>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useCalendarStore } from '../store/calendar.store';
import { exercises } from '../structures/ExercisesTMP_TEST';
import { Statistics } from '../structures/ExercisesTMP_TEST';
import { totalTrainingDays } from '../structures/ExercisesTMP_TEST';


//let amountExercises = 0;

export default {
  mounted() {//Linke Daten in ein Arbeitsarray
    this.training = exercises[0].trainingsPlan //Testen mit einer Struktur die ich verstehe @Christian hier bitte dein System einbinden
    
    //this.training = this.calendar.weeks.days.trainingsPlan.clone(); //@Christian: Kannst du das bitte exestierend machen?

    // speichere die Kalenderdaten bei Verändernung in localStorage 
    this.calendar.$subscribe((_, state) => {
      localStorage.setItem("calendar", JSON.stringify(state));
    });
    
  },
  components: {

  },
  methods: {
    
    initTraining(){
        document.getElementById("swipe-controls1").style.visibility = "hidden";
        document.getElementById("swipe-controls2").style.visibility = "visible";
        document.getElementById("swipe-controls3").style.visibility = "visible";
        document.getElementById("swipe-controls4").style.visibility = "visible";
        this.swipeSeriesFinished();
        //Statistic Setup:

        totalTrainingDays++;
        Statistics.forEach(element => {
            element.dataSet.push( {
                trainingsDay: totalTrainingDays,
                week: 3, //Static, hier muss noch variable eingebaut werden.
                day: "Mon",
                weight: 0,
                repeats: 0,
                sentence: 0,
            });
        });
    },
    swipeSeriesFinished() {
      if(this.exerciseIndex==-1)
        this.exerciseIndex=0;
      if(this.training.id = undefined)
      return;

      //Statistics:
       const exercise = Statistics.filter(exerciseObj =>{
        return exerciseObj.id = this.training[this.exerciseIndex].id;
      })
      exercise.weight = parseInt(this.exerciseWeight);
      exercise.sentence++;
      exercise.repeats = parseInt(this.exerciseRepeats);


      this.exerciseName         = this.training[this.exerciseIndex].id;
      this.exerciseDescription  = this.training[this.exerciseIndex].description;
      this.exerciseImgUrl       = this.training[this.exerciseIndex].imgUrl;
      this.exerciseWeight       = this.training[this.exerciseIndex].weight;
      this.exerciseRepeats      = this.training[this.exerciseIndex].repeats;
      
     
    },
    swipeSeriesSkip() {

      const training = this.training; //HÄsslich aber Faulheit
      const tmpExercise = training[this.exerciseIndex];
      training[this.exerciseIndex] = training[training.length-1];
      training[training.length-1] = tmpExercise;

      this.exerciseName         = training[this.exerciseIndex].id;
      this.exerciseDescription  = training[this.exerciseIndex].description;
      this.exerciseImgUrl       = training[this.exerciseIndex].imgUrl;
      this.exerciseWeight       = training[this.exerciseIndex].weight;
      this.exerciseRepeats      = training[this.exerciseIndex].repeats;
      this.training = training;
    },
    swipeExerciseFinished() {
   
      //Speichere neue Werte zu Widerholungen und zu Gewichten
      this.training[this.exerciseIndex].weight = parseInt(document.getElementById("weight").innerHTML);
      this.training[this.exerciseIndex].repeat = parseInt(document.getElementById("repeat").innerHTML);
      

      this.exerciseIndex++;
      if( this.exerciseIndex== this.training.length){

        this.exerciseName = "Good Job";
        this.exerciseDescription = "Du hast die heutige Übung beendet. Weiter so!"
        this.exerciseImgUrl = "/src/assets/initTraining.jpg";
        this.exerciseWeight = 100;
        this.exerciseRepeats = 100;
        return
      }

      this.exerciseName = exercises[0].trainingsPlan[this.exerciseIndex].id;
      this.exerciseDescription = exercises[0].trainingsPlan[this.exerciseIndex].description;
      this.exerciseImgUrl = exercises[0].trainingsPlan[this.exerciseIndex].imgUrl;
      this.exerciseWeight = exercises[0].trainingsPlan[this.exerciseIndex].weight;
      this.exerciseRepeats = exercises[0].trainingsPlan[this.exerciseIndex].repeats;
    }
  },
  data: () => ({
    exerciseIndex: -1,
    training: [],
    exerciseName: "",
        exerciseDescription: "",
        exerciseImgUrl: "/src/assets/initTraining.jpg",
        exerciseWeight: 0,
        exerciseRepeats: 0,


    statisticTrainingDay:0,

  }),
  computed: {
    calendar: mapStores(useCalendarStore).calendarStore,
  },
}                            

</script>


<style>
html {
  background: #cccccc;
}

.btn-tmp-Start{
  position: absolute;
  width: 40%;
  left: 30vw;
  right: 30vw;
}
.btn-tmp-Swipe{
 visibility: hidden;
  width: 120px;
  height: 40px;
}

.btn-swipe {
  margin: 10%;
  display: inline-block;
}

.btn-swipe-btn {
  width: 15vw;
  border-radius: 30px;
  display: inline-block;
}

.swipe-element-child {
  width: 50vw;
  height: 50vw;
  margin: auto;
}

.round-box {

  border-radius: 30px;
  box-shadow: 5px;
}

.swipe-area {

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