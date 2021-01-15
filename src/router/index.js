import Vue from 'vue'
import VueRouter from 'vue-router'

import { homeRoutes } from './home'

const HelloWorld = () =>
  import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld')

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login')

const Editor = () =>
  import(/* webpackChunkName: "Editor" */ '@/views/modules/editor')

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    component: HelloWorld,
  },

  {
    path: '/cvs/:usrid/editor',
    component: Editor,
  },
  {
    path: '/auth-signin',
    component: Login,
  },

  homeRoutes,
]

const router = new VueRouter({
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const token = window.sessionStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
// })

export default router
