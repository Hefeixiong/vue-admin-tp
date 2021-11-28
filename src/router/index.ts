import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import test from '@/views/test.vue';
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
