import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-app.vue'
import stayDetails from '../views/stay-details.vue'
import userDetails from '../views/user-details.vue'
import userDashboard from '../views/user-dashboard.vue'

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
      name: 'explore-page',
      component: explorePage
    },
    {
      path: '/stay/:id',
      name: 'stay-details',
      component: stayDetails
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: userDetails,
    },
    {
      path: '/user/:id/dashboard',
      name: 'user-dashboard',
      component: userDashboard,
    },
    // {
    //         path: '/toy/details/:toyId',
    //         name: 'toy-details',
    //         component: toyDetails,
    //         children: [{
    //             path: 'chat',
    //             name: 'chat',
    //             component: chat
    //         }, ]

    //     },



  ]
})

export default router
