<template>
  <AppView header="Training" bg-gray style="overflow: hidden; max-height: 100vh;" back-button>
    <AppCard
      center
      class="swipe-area" 
      v-touch:swipe.left="swipeSeriesSkip" 
      v-touch:swipe.right="swipeSeriesFinished" 
      v-touch:swipe.top="swipeExerciseFinished"
    >
      <h2 style="margin-top: 5%;">{{ exerciseName }}</h2>
      <img v-bind:src="exerciseImgUrl" class="swipe-element-child">

   
<div class="swipe-element-child">{{ exerciseDescription }}</div>

      <div class="aaa">
        <div class="btn-swipe">
          <button class="btn-swipe-btn" @click="exerciseWeight++">+</button>
          <h3 id="weight">{{ exerciseWeight }}</h3>
          <button class="btn-swipe-btn" @click="exerciseWeight--">-</button>
        </div>

        <div class="btn-swipe">
          <button class="btn-swipe-btn" @click="exerciseRepeats++">+</button>
          <h3 id="repeat">{{ exerciseRepeats }}</h3>
          <button class="btn-swipe-btn" @click="exerciseRepeats--">-</button>
        </div>
      </div>
      
    </AppCard>

  </AppView>
</template>

<script>
//import { mapStores } from 'pinia';
//import { useCalendarStore } from '../store/calendar.store';
import { exercises, Statistics, totalTrainingDays, increaseTotalTraininDays } from '../structures/ExercisesTMP_TEST';
import AppView from '../components/AppView.vue';
import AppCard from '../components/AppCard.vue';

import initTrainingImg from "../assets/initTraining.jpg";

//let amountExercises = 0;

export default {
  mounted() {//Linke Daten in ein Arbeitsarray
    this.training = exercises[0].trainingsPlan //Testen mit einer Struktur die ich verstehe @Christian hier bitte dein System einbinden

    //this.training = this.calendar.weeks.days.trainingsPlan.clone(); //@Christian: Kannst du das bitte exestierend machen?

    // speichere die Kalenderdaten bei Verändernung in localStorage 
    //   this.calendar.$subscribe((_, state) => {
    //    localStorage.setItem("calendar", JSON.stringify(state));
    //  });
  
    this.swipeSeriesFinished();

    increaseTotalTraininDays();
    Statistics.forEach(element => {
      element.dataSet.push({
        trainingsDay: totalTrainingDays,
        week: 3, //Static, hier muss noch variable eingebaut werden.
        day: "Mon",
        weight: 0,
        repeats: 0,
        sentence: 0,
      });
    });
  },
  components: {
    AppView,
    AppCard
  },
  methods: {
    swipeSeriesFinished() {
      if (this.exerciseIndex == -1)
        this.exerciseIndex = 0;
      if (this.training.id = undefined)
        return;

      //Statistics:
      const exercise = Statistics.filter(exerciseObj => {
        return exerciseObj.id == this.training[this.exerciseIndex].id;
      })
      exercise[0].dataSet[totalTrainingDays - 1].weight = parseInt(this.exerciseWeight);
      exercise[0].dataSet[totalTrainingDays - 1].sentence++;
      exercise[0].dataSet[totalTrainingDays - 1].repeats = parseInt(this.exerciseRepeats);


      this.exerciseName = this.training[this.exerciseIndex].id;
      this.exerciseDescription = this.training[this.exerciseIndex].description;
      this.exerciseImgUrl = this.training[this.exerciseIndex].imgUrl;
      this.exerciseWeight = this.training[this.exerciseIndex].weight;
      this.exerciseRepeats = this.training[this.exerciseIndex].repeats;


    },
    swipeSeriesSkip() {

      const training = this.training; //HÄsslich aber Faulheit
      const tmpExercise = training[this.exerciseIndex];
      training[this.exerciseIndex] = training[training.length - 1];
      training[training.length - 1] = tmpExercise;

      this.exerciseName = training[this.exerciseIndex].id;
      this.exerciseDescription = training[this.exerciseIndex].description;
      this.exerciseImgUrl = training[this.exerciseIndex].imgUrl;
      this.exerciseWeight = training[this.exerciseIndex].weight;
      this.exerciseRepeats = training[this.exerciseIndex].repeats;
      this.training = training;
    },
    swipeExerciseFinished() {


      exercise[0].dataSet[totalTrainingDays - 1].weight = parseInt(this.exerciseWeight);
      exercise[0].dataSet[totalTrainingDays - 1].sentence++;
      exercise[0].dataSet[totalTrainingDays - 1].repeats = parseInt(this.exerciseRepeats);
      //Speichere neue Werte zu Widerholungen und zu Gewichten
      this.training[this.exerciseIndex].weight = parseInt(document.getElementById("weight").innerHTML);
      this.training[this.exerciseIndex].repeat = parseInt(document.getElementById("repeat").innerHTML);


      this.exerciseIndex++;
      if (this.exerciseIndex == this.training.length) {

        this.exerciseName = "Good Job";
        this.exerciseDescription = "Du hast die heutige Übungen beendet. Weiter so!"
        this.exerciseImgUrl = initTrainingImg;
        this.exerciseWeight = 100;
        this.exerciseRepeats = 100;
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
    exerciseImgUrl: initTrainingImg,
    exerciseWeight: 0,
    exerciseRepeats: 0,

    statisticTrainingDay: 0,
  }),
  // computed: {
  //   calendar: mapStores(useCalendarStore).calendarStore,
  // },
}                            
</script>

<style>
.aaa{
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 50px;
}
.btn-tmp-Swipe {
  width: calc(100% / 3);
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
  margin: auto;
}

.swipe-area {
  height: calc(100% - 10vw - 5rem);
  bottom: 20px;
  left: 15px;
  right: 15px;
  position: absolute;
}
</style>