import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../features/welcome'
import RegisterCompany from '../features/registerCompany'
import LoginCompany from '../features/loginCompany'
import ProfilePage from '../features/profile'
import RegisterProduct from '../features/registerProduct'

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
    },
    {
      path: '/profile_page',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/register_product',
      name: 'RegisterProduct',
      component: RegisterProduct
    }
  ]
})
