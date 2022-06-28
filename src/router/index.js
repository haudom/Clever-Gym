import {
  createRouter,
  createWebHistory
} from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';
import NoTabsLayout from '../layouts/NoTabsLayout.vue';

import MainView from '../views/MainView.vue';
import OptionenView from '../views/OptionenView.vue';
import StatistikenView from '../views/StatistikenView.vue';
import TrainingsView from '../views/TrainingsView.vue';
import PlanerKalenderView from '../views/PlanerKalenderView.vue';
import ChooseTrainingView from '../views/ChooseTrainingView.vue';

const routes = [{
  name: "default-layout",
  path: "/",
  component: DefaultLayout,

  children: [{
    path: '',
    name: 'index',
    component: MainView,
  }, {
    path: 'statistiken',
    name: 'statistiken',
    component: StatistikenView,
  }, {
    path: 'kalender',
    name: 'kalender',
    component: PlanerKalenderView,
  }]
}, {
  name: "no-tabs-layout",
  path: "/",
  component: NoTabsLayout,

  children: [{
    path: 'optionen',
    name: 'optionen',
    component: OptionenView,
  }, {
    path: 'exercise-picker',
    name: 'exercise-picker',
    component: ChooseTrainingView,
  }, {
    path: 'training',
    name: 'training',
    component: TrainingsView,
  }]
}];

export default createRouter({
  history: createWebHistory(),
  routes,
});
