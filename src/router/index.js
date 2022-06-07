import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
