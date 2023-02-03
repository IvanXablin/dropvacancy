import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Layout.vue'),
      name: 'Layout',
      redirect: {
        name: 'RegistrationView',
      },
      children: [
        {
          path: '/auth',
          name: 'RegistrationView',
          component: () => import('@/views/RegistrationView.vue'),
        },
      ],
    },
  ]
})

export default router
