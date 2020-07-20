import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '@/firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiresAuth: true} // tiene que ser verdadera para acceder al home
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
 
  const user = auth.currentUser 
 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user) {
      next()
    } else {
      next({name:'ingreso'})
    }
  } else {
    next() // make sure to always call next()!
  }
})
 
export default router;
