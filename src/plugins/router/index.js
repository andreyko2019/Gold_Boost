import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from '@/plugins/i18n/translation'
import MainPage from '@/pages/MainPage/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '/',
          name: 'home',
          component: MainPage,
          meta: {
            title: 'Головна сторінка',
            metaTags: [
              {
                name: 'description',
                content: 'Опис головної сторінки'
              }
            ]
          }
        }
      ]
    }
  ]
})

export default router
