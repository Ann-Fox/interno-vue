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
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/homework10',
      name: 'homework10',
      component: () => import('../components/ProductDetails.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/project-details',
      name: 'project-dateils',
      component: () => import('../components/ProjectDetails.vue')
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
