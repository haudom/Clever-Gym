import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import OptionenView from '../views/OptionenView.vue';
import StatistikenView from '../views/StatistikenView.vue';

const routes = [{
  path: '/',
  name: 'Main',
  component: MainView,
}, {
  path: '/optionen',
  name: 'Optionen',
  component: OptionenView,
}, {
  path: '/statistiken',
  name: 'Statistiken',
  component: StatistikenView,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
