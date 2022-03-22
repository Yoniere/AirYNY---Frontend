import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-app.vue'
import stayDetails from '../views/stay-details.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/stay',
      name: 'stay',
      component: explorePage
    },
    {
      path: '/stay/:id?',
      name: 'stay-details',
      component: stayDetails
    },

  ]
})

export default router
