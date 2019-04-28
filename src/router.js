import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ItinerariesIndex from './views/ItinerariesIndex.vue';
import ItinerariesNew from './views/ItinerariesNew.vue';
import ItinerariesShow from './views/ItinerariesShow.vue';
import ItinerariesEdit from './views/ItinerariesEdit.vue';

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
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/itineraries',
      name: 'ItinerariesIndex',
      component: ItinerariesIndex
    },
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});