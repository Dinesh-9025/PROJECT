// eslint-disable-next-line
/* eslint-disable */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Login from '../components/Login.vue'
import jeans from "../components/User/jeans.vue"
import smartphones from "../components/User/SmartPhones.vue"


function guest(to:any, from:any, next:any) {
  if (localStorage.user) {
    next({ name: "dashboard" });
  } else next();
}

function guard(to:any, from:any, next:any) {
  if (localStorage.user) {
    next();
  } else next({ name: "login" });
}

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue'),
    beforeEnter: guest
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    beforeEnter: guard,
  },
  {
    path: '/jeans',
    name: 'jeans',
    component: () => import("../components/User/jeans.vue"),
    beforeEnter: guard,
  },
  {
    path: '/smartphones',
    name: 'smartphones',
    component: () => import("../components/User/SmartPhones.vue"),
    beforeEnter: guard,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
