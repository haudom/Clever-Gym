import {
  createRouter,
  createWebHistory
} from 'vue-router';
import MainView from '../views/MainView.vue'
import OptionenView from '../views/OptionenView.vue';
import StatistikenView from '../views/StatistikenView.vue';
import TrainingsView from '../views/TrainingsView.vue';
import PlanerKalender from '../views/PlanerKalenderView.vue';
import ChooseTraining from '../views/ChooseTraining.vue';

const routes = [{
  path: '/',
  name: 'Main',
  component: MainView,
}, {
  path: '/optionen',
  name: 'Optionen',
  component: OptionenView,
}, {
  path: '/exercisePicker',
  name: 'ExercisePicker',
  component: ChooseTraining,
}, {
  path: '/statistiken',
  name: 'Statistiken',
  component: StatistikenView,
}, {
  path: '/training',
  name: 'TrainingsView',
  component: TrainingsView,
}, {
  path: '/kalender',
  name: 'PlanerKalender',
  component: PlanerKalender,
}];

export default createRouter({
  history: createWebHistory(),
  routes,
});