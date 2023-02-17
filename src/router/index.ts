import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Layout.vue'),
      name: 'Layout',
      redirect: {
        name: 'AuthView',
      },
      children: [
        {
          path: '/auth',
          name: 'AuthView',
          component: () => import('@/views/AuthView.vue'),
        },
        {
          path: '/account',
          name: 'AccountView',
          component: () => import('@/views/AccountView.vue'),
        },
      ],
    },
  ]
});

export default router;
