import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App'
import Home from './components/Home'
import SignUp from './components/SignUp'
import UserPage from './components/UserPage'
import ResetPassword from './components/ResetPassword'
import Notification from './components/Notification'
import Settings from './components/Settings'
import LoginPage from './components/LoginPage'

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
