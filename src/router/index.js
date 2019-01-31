import Vue from 'vue'
import Router from 'vue-router'
import { 
  Main,
  SignUp,
  SignIn
} from '@/components/container/';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ]
})
