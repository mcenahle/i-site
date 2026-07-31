import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Home.vue'
import Articles from '../articles.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home
    },

    {
      path: '/articles',
      component: Articles
    }
  ]
})

export default router