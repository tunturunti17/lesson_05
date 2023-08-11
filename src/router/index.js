import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/HomeComponent.vue'
import axios from "axios";

const routes = [
  {
    path: '/',
    name: 'homeComponent',
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
      const res = await axios.get(`http://localhost:3000/auth`);
      if (res.data.auth) next();
    },
  },
  {
    path: '/tasklist/:id',
    component: () => import('../views/taskComponentIdPage.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      const res = await axios.get(`http://localhost:3000/auth`);
      if (res.data.auth) next();
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundComponent',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router