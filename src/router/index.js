import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/HomeComponent.vue'
import store from '@/store'

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'aboutComponent',
    component: () => import('../views/AboutComponent.vue')
  },
  {
    path: '/tasklist',
    name: 'tasklistComponent',
    component: () => import('../views/TaskListComponent.vue'),
    async beforeEnter(to, from, next) {
      if (store.state.auth) {
        next()
      } next('/')
    },
  },
  {
    path: '/tasklist/:id',
    name: "taskId",
    component: () => import('../views/taskComponentIdPage.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      if (store.state.auth) next();
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundComponent',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({ history: createWebHistory(), routes });
export default router;
