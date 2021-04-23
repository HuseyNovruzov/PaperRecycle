import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)




import App from './App'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import ResetPassword from './pages/ResetPassword'
import Notification from './pages/Notification'
import Settings from './pages/Settings'


const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/register', component: SignUp },
    { path: '/login', component: LoginPage },
    { path: '/user', component: UserPage },
    { path: '/reset_password', component: ResetPassword },
    { path: '/notifications', component: Notification },
    { path: '/settings', component: Settings },
  ],
  mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
