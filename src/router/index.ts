import Vue from 'vue';
import VueRouter from 'vue-router';
import test from '@/views/test.vue';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },

  base: process.env.BASE_URL,

  routes: [
    {
      path: '/test',
      component: test
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'dashboard'
          }
        }
      ]
    }
  ]
});
