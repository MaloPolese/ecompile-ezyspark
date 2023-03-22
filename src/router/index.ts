import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/benefits',
      name: 'benefits',
      component: () => import('../views/NotImplemented.vue')
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../views/NotImplemented.vue')
    }
  ]
})

export default router
