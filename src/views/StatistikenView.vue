<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Statistics } from '../structures/ExercisesTMP_TEST';
import { totalTrainingDays } from '../structures/ExercisesTMP_TEST';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  mounted() {//Linke Daten in ein Arbeitsarray
    const amountTrainingDays = totalTrainingDays;

    for (var i = 0; i< amountTrainingDays; i++){
      this.chartData.labels.push("Trainings Tag "+(i+1));   
    }
    Statistics.forEach(element => {
       this.chartData.datasets.push({data: [], label: "", backgroundColor: []})
    });

  for(var exercise = 0; exercise< Statistics.length; exercise++){
  var statisticValues = [];
    var statisticValues = Statistics[exercise].dataSet.map(trainigDay => {
       statisticValues.push(trainigDay.weight+1 * trainigDay.repeats * trainigDay.sentence /100);
       return statisticValues;
    })


    this.chartData.datasets[exercise].data = statisticValues[0];
    this.chartData.datasets[exercise].label = Statistics[exercise].id;
    this.chartData.datasets[exercise].backgroundColor= [Statistics[exercise].statsColor]
    

  }

/*
    const totalTrainingDays = statistics[0].dataSet.length; //Testen mit einer Struktur die ich verstehe @Christian hier bitte dein System einbinden
    
    //this.training = this.calendar.weeks.days.trainingsPlan.clone(); //@Christian: Kannst du das bitte exestierend machen?

    // speichere die Kalenderdaten bei Verändernung in localStorage 
    this.calendar.$subscribe((_, state) => {
      localStorage.setItem("calendar", JSON.stringify(state));
    });
    */
    
  },
  name: 'BarChart',
  components: { Bar },
  

  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ ],
        datasets: [ ]
      },
      chartOptions: {
        responsive: true
      },

    }
  },
  
}
</script>