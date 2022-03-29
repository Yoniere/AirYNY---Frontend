import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-app.vue'
import stayDetails from '../views/stay-details.vue'
import userDetails from '../views/user-details.vue'
import userDashboard from '../views/user-dashboard.vue'
import userWishList from '../views/user-wish-list.vue'

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',

<<<<<<< HEAD
    routes: [{
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
            path: '/dashboard',
            name: 'user-dashboard',
            component: userDashboard,
        },
=======
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
      path: '/dashboard',
      name: 'user-dashboard',
      component: userDashboard,
    },
    {
      path: '/wishList',
      name: 'user-wish-list',
      component: userWishList,
    },
>>>>>>> 1652eb066b1a5ef5979cc6105e74246935b403cc




    ]
})

export default router