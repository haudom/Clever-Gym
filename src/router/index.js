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

/*
 * Die Meta-Property "viewIndex" sagt dem Router, in welche Richtung eine
 * Transition durchgeführt werden soll.
 */

/** @type {import('vue-router').RouteRecordRaw[]} */
const routes = [{
  path: "/",
  component: DefaultLayout,

  children: [{
    path: '',
    name: 'main',
    meta: { viewIndex: 0 },
    component: MainView,
  }, {
    path: 'statistiken',
    name: 'statistiken',
    meta: { viewIndex: 1 },
    component: StatistikenView,
  }, {
    path: 'kalender',
    name: 'kalender',
    meta: { viewIndex: 2 },
    component: PlanerKalenderView,
  }]
}, {
  path: "/",
  component: NoTabsLayout,

  children: [{
    path: 'optionen',
    name: 'optionen',
    meta: { viewIndex: 10 },
    component: OptionenView,
  }, {
    path: 'exercise-picker/:weekId/:dayId',
    name: 'exercise-picker',
    props: true,
    meta: { viewIndex: 10 },
    component: ChooseTrainingView,
  }, {
    path: 'training',
    name: 'training',
    meta: { viewIndex: 10 },
    component: TrainingsView,
  }]
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// https://router.vuejs.org/guide/advanced/transitions.html#route-based-dynamic-transition
router.beforeEach((to, from, next) => {
  // tell the router transition in which direction it should transition
  if (typeof from.meta.viewIndex === "undefined") {
    to.meta.transition = ""; // Keine Transition
  } else if (to.meta.viewIndex >= from.meta.viewIndex) {
    to.meta.transition = "next";
  } else {
    to.meta.transition = "prev";
  }

  next();
});

export default router;
