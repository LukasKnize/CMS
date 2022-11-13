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
      path: '/pages',
      name: 'pages',
      component: () => import('../views/pages.vue')
    },
    {
      path: '/newPage',
      name: 'new page',
      component: () => import('../views/addPage.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/createAccount.vue')
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: () => import('../views/login.vue')
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/templates.vue')
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: () => import('../views/plugins.vue')
    }
  ]
})

export default router
