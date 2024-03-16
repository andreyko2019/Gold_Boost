import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from '@/plugins/i18n/translation'
import MainPage from '@/pages/MainPage/MainPage.vue'
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import SignInComponent from '@/organisms/SignInComponent/SignInComponent.vue'
import Page404 from '@/pages/404/404.vue'
import CatalogPage from '@/pages/CatalogPage/CatalogPage.vue'
import ProductPage from '@/pages/ProductPage/ProductPage.vue'
import CabinetPage from '@/pages/CabinetPage/CabinetPage.vue'
import BasketPage from '@/pages/BasketPage/BasketPage.vue'
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage.vue'
import SignUpComponent from '@/organisms/SignUpComponent/SignUpComponent.vue'
import ForgotPassword from '@/organisms/ForgotPassword/ForgotPassword.vue'
import ConfirmEmailComponent from '@/organisms/ConfirmEmailComponent/ConfirmEmailComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
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
          },
          children: [
            {
              path: 'Sign_In',
              name: 'home sign in',
              component: SignInComponent
            },
            {
              path: 'Sign_Up',
              name: 'home sign up',
              component: SignUpComponent
            },
            {
              path: 'Forgot_Password',
              name: 'home forgot password',
              component: ForgotPassword
            },
            {
              path: 'Confirm_Email/:uidb64/:token',
              name: 'emailConfirmation',
              component: ConfirmEmailComponent
            }
          ]
        },
        {
          path: 'Catalog',
          name: 'catalog',
          component: CatalogPage,
          children: [
            {
              path: 'Sign_In',
              name: 'catalog sign in',
              component: SignInComponent
            },
            {
              path: 'Sign_Up',
              name: 'catalog sign up',
              component: SignUpComponent
            },
            {
              path: 'Reset_Password',
              name: 'catalog reset password',
              component: PopupComponent
            }
          ]
        },
        {
          path: 'Product',
          name: 'product',
          component: ProductPage,
          children: [
            {
              path: 'Sign_In',
              name: 'product sign in',
              component: SignInComponent
            },
            {
              path: 'Sign_Up',
              name: 'product sign up',
              component: SignUpComponent
            },
            {
              path: 'Forgot_Password',
              name: 'product forgot password',
              component: ForgotPassword
            }
          ]
        },
        {
          path: 'Cabinet',
          name: 'cabinet',
          component: CabinetPage
        },
        {
          path: 'Basket',
          name: 'basket',
          component: BasketPage
        },
        {
          path: 'Checkout',
          name: 'checkout',
          component: CheckoutPage
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not found',
          component: Page404,
          children: [
            {
              path: 'Sign_In',
              name: 'notFound sign in',
              component: SignInComponent
            },
            {
              path: 'Sign_Up',
              name: 'notFound sign up',
              component: SignUpComponent
            },
            {
              path: 'Reset_Password',
              name: 'notFound reset password',
              component: PopupComponent
            }
          ]
        }
      ]
    }
  ]
})

export default router
