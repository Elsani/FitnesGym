import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import GymStep from '../components/GymStep.vue';
import Cardio from '../components/Cardio.vue';
import Back from '../components/Back.vue';
import Lifting from '../components/Lifting.vue';
import Shoulder from '../components/Shoulder.vue';
import Pushups from '../components/Pushups.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/gymstep',
      name: 'gymstep',
      component: GymStep
    },
    {
      path: '/cardio',
      name: 'cardio',
      component: Cardio
    },
    {
      path: '/back',
      name: 'back',
      component: Back
    },
    {
      path: '/lifting',
      name: 'lifting',
      component: Lifting
    },
    {
      path: '/pushups',
      name: 'pushups',
      component: Pushups
    },
    {
      path: '/shoulder',
      name: 'shoulder',
      component: Shoulder
    }
  ]
})
