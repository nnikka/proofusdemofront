import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../features/welcome'
import RegisterCompany from '../features/registerCompany'
import LoginCompany from '../features/loginCompany'

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
    },
    {
      path: '/login_company',
      name: 'LoginCompany',
      component: LoginCompany
    }
  ]
})
