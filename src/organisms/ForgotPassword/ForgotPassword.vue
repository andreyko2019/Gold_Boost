<template>
  <PopupComponent>
    <form class="form forgot-password">
      <h2 class="form__title">Forgot password?</h2>

      <InputComponent class="form__input input-component_border" placeholderText="Email" />

      <ButtonComponent class="forgot-password__submit" rectangle>Reset my password</ButtonComponent>

      <ButtonComponent class="forgot-password__back-button" @click="openPopup(0)"
        >Back</ButtonComponent
      >
    </form>
  </PopupComponent>
</template>

<script setup>
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const openPopup = async (popupNumber) => {
  const param = await route.matched[1].children[popupNumber].name
  router.push({ name: param, params: { locale: route.params.locale } })
}
</script>

<style>
@import './ForgotPassword.scss';
</style>
