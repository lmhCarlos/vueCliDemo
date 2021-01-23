import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Config from '../views/Config.vue'
import Application from '../views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  },
  {
    path: '/application',
    name: 'application',
    component: Application
  }
]

const router = new VueRouter({
  routes
})

export default router
