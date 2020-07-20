import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/shell',
    name: 'Project configuration',
    component: () => import('../views/Shell.vue')
  },
  {
    path: '/panel',
    name: 'Control panel',
    component: () => import('../views/Panel.vue')
  },
  {
    path: '/new-app',
    name: 'New application form',
    component: () => import('../views/New-app.vue')
  },
]

const router = new VueRouter({
  mode: 'history',                       //activate history mode
  routes
})

export default router
