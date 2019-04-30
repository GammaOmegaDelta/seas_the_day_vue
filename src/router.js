import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ActivitiesNew from './views/ActivitiesNew.vue';
import ActivitiesShow from './views/ActivitiesShow.vue';
import ActivitiesEdit from './views/ActivitiesEdit.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/activities/:id/edit',
      name: 'ActivitiesEdit',
      component: ActivitiesEdit
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
      path: '/activities/new',
      name: 'ActivitiesNew',
      component: ActivitiesNew
    },
    {
      path: '/activities/:id',
      name: 'ActivitiesShow', 
      component: ActivitiesShow 
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