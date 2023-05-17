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
          path: '/favourites',
          name: 'FavouritesView',
          component: () => import('@/views/FavouritesView.vue'),
        },
        {
          path: '/map',
          name: 'MapView',
          component: () => import('@/views/VacanciesMap.vue'),
        },
        {
          path: '/vacancy/:id',
          name: 'AboutVacancy',
          component: () => import('@/views/VacancyAbout.vue'),
        }
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
  if (to.name !== 'AuthView' && !Cookies.get('ACCESS_TOKEN_KEY')) {
    next({ name: 'AuthView' })
  }
  else next();
});

export default router;
