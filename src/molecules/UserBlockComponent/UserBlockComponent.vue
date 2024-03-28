<!--TODO-->
<template>
  <div class="user-block" :class="{ 'user-block_main': isHomePage }">
    <ButtonComponent v-show="!isHomePage" @click="goToHomePage" circle>
      <SearchIcon />
    </ButtonComponent>

    <ButtonComponent ariaLabel="Basket button" circle>
      <SupermarketIcon />
    </ButtonComponent>

    <template v-if="!hasTokens">
      <ButtonComponent rectangle transparent @click="goToSignIn">
        {{ $t('signIn') }}
      </ButtonComponent>
    </template>

    <template v-else>
      <ButtonComponent rectangle transparent @click="signOut">
        {{ $t('header.signOut') }}
      </ButtonComponent>
    </template>
  </div>
</template>

<script setup>
import SearchIcon from '@/atoms/icons/SearchIcon.vue'
import SupermarketIcon from '@/atoms/icons/SupermarketIcon.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import { useRoute, useRouter } from 'vue-router'
import { hasTokens } from '@/composables/CheckToken.js'

const route = useRoute()
const router = useRouter()

const isHomePage = route.path === '/' || route.path === `/${route.params.locale}`

const goToHomePage = () => {
  router.push('/')
}

const signOut = () => {
  document.cookie = 'access=; max-age=0'
  document.cookie = 'email=; max-age=0'
  document.cookie = 'refresh=; max-age=0'
  hasTokens.value = false
}

const goToSignIn = async () => {
  if (route.matched[1].children.length > 0) {
    const param = await route.matched[1].children[0].name
    router.push({ name: param, params: { locale: route.params.locale } })
  }
}
</script>

<style>
@import './UserBlockComponent.scss';
</style>
