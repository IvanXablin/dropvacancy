import { createRouter, createWebHistory } from 'vue-router';
import Cookies from "js-cookie";

const router = createRouter({
  history: createWebHistory(''),
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
        },
        {
          path: '/vacancy/:id',
          name: 'AboutVacancy',
          component: () => import('@/views/VacancyAbout.vue'),
        },
        {
          path: '/filterSettings',
          name: 'filterSettings',
          component: () => import('@/views/SettingFilterView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'AuthView',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: {
        name: '404'
      },
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
  ]
});

router.beforeEach(async (to, from, next) => {
  const accessToken = Cookies.get('ACCESS_TOKEN_KEY');
  if (to.name !== 'AuthView' && !accessToken) next({ name: 'AuthView' })
  else next();
})

export default router;
