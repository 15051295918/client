import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import patient from '@/components/patient'
import doctor from '@/components/doctor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/register',
      name: 'register',
      component: register
    },

    {
      path: '/patient',
      name: 'patient',
      component: patient
    },

    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    }
  ]
})
