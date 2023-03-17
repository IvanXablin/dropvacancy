import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Layout.vue'),
      name: 'Layout',
      redirect: {
        name: 'HomeView',
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
        {
          path: '/home',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/vacancies',
          name: 'VacanciesView',
          component: () => import('@/views/VacanciesView.vue'),
        }
      ],
    },
  ]
});

export default router;
