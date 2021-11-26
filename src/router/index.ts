import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import test from '@/views/test.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/test',
    name: 'test',
    component: test
  },

]

const router = new VueRouter({
  routes
})

export default router
