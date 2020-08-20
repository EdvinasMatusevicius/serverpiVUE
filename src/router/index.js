import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'


Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['session/getIsLogedIn']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['session/getIsLogedIn']) {
    next()
    return
  }
  next('/login')
}

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
    component: () => import('../views/Login.vue'),
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/shell/:slug/:language',
    name: 'Project configuration',
    component: () => import('../views/Shell.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/shell-solo',
    name: 'shell output',
    component: () => import('../views/ShellSolo.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/panel',
    name: 'Control panel',
    component: () => import('../views/Panel.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/account',
    name: 'account settings',
    component: () => import('../views/AccountSettings.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/new-app',
    name: 'New application form',
    component: () => import('../views/New-app.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/Bad-request.vue')

  },
]

const router = new VueRouter({
  mode: 'history',                       //activate history mode
  routes
})

export default router
