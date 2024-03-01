<template>
  <div class="user-block" :class="{ 'user-block_main': isHomePage }">
    <ButtonComponent v-show="!isHomePage" @click="goToHomePage" circle
      ><SearchIcon
    /></ButtonComponent>

    <ButtonComponent ariaLabel="Basket button" circle><SupermarketIcon /></ButtonComponent>

    <ButtonComponent rectangle transparent>{{ $t('header.signIn') }}</ButtonComponent>
  </div>
</template>

<script setup>
import SearchIcon from '@/atoms/icons/SearchIcon.vue'
import SupermarketIcon from '@/atoms/icons/SupermarketIcon.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isHomePage = route.path === '/' || route.path === `/${route.params.locale}`

const goToHomePage = () => {
  router.push('/')
}
</script>

<style>
@import './UserBlockComponent.scss';
</style>
