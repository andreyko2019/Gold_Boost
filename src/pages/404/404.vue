<template>
  <router-view></router-view>

  <section class="page-404">
    <img class="page-404__background" src="@/assets/images/MainPage/background-1.webp" />

    <div class="container">
      <h1 class="page-404__title">404</h1>

      <p class="page-404__description">{{ $t('404.pageNotFound') }}</p>

      <ButtonComponent class="page-404__button" rectangle transparent @click="goToHome">{{
        $t('404.backToHome')
      }}</ButtonComponent>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale } = useI18n()

const goToHome = () => {
  router.replace(`/${locale.value}`)
}
</script>

<style>
@import './404.scss';
</style>
