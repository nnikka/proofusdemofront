import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../features/welcome'
import RegisterCompany from '../features/registerCompany'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/register_company',
      name: 'RegisterCompany',
      component: RegisterCompany
    }
  ]
})
