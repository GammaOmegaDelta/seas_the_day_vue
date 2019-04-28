import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import ItinerariesIndex from './views/ItinerariesIndex.vue';
import ItinerariesNew from './views/ItinerariesNew.vue';
import ItinerariesShow from './views/ItinerariesShow.vue';
import ItinerariesEdit from './views/ItinerariesEdit.vue';
import ItinerariesDestroy from './views/ItinerariesDestroy.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/itineraries/:id/edit',
      name: 'ItinerariesEdit',
      component: ItinerariesEdit
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home  //index route
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    // {
    //   path: '/itineraries',
    //   name: 'ItinerariesIndex',
    //   component: ItinerariesIndex
    // },
    {
      path: '/itineraries/new',
      name: 'ItinerariesNew',
      component: ItinerariesNew
    },
    {
      path: '/itineraries/:id',
      name: 'ItinerariesShow',
      component: ItinerariesShow
    },
    {
      path: '/itineraries/:id/destroy',
      name: 'ItinerariesDestroy',
      component: ItinerariesDestroy
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});