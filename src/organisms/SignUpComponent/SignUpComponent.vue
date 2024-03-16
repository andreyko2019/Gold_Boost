<template>
  <PopupComponent>
    <form class="form sign-in" @submit.prevent="handleSubmit">
      <h2 class="form__title">Sign Up</h2>

      <InputComponent
        class="form__input input-component_border"
        placeholderText="Email"
        v-model="email"
      />

      <InputComponent
        class="form__input input-component_border"
        type="password"
        placeholderText="Password"
        v-model="password"
      />

      <CheckboxComponent class="sign-up__checkbox-privacy form__checkbox"
        ><span class="sign-up__checkbox-text"
          >I agree to the terms of use of the service and the
          <LinkComponent
            class="sign-up__checkbox-text-link"
            text="Privacy policy"
            :to="{
              path: `/${$route.params.locale}/Privacy`,
              params: { locale: $route.params.locale }
            }"
          />.</span
        ></CheckboxComponent
      >

      <CheckboxComponent class="form__checkbox"
        ><span class="sign-up__checkbox-text">
          I agree to receive special offers and notifications regarding order fulfillment.
        </span></CheckboxComponent
      >

      <ButtonComponent class="sign-up__submit" type="submit" rectangle> Sign Up </ButtonComponent>

      <ButtonComponent class="sign-up__sign-in-button" type="submit" @click="openPopup(0)">
        Sign In
      </ButtonComponent>
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

import axios from 'axios'
import { ref } from 'vue'
import CheckboxComponent from '@/atoms/ui/CheckboxComponent/CheckboxComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

const email = ref('')
const password = ref('')
const notify_me = ref(true)

const handleSubmit = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/registration/`, {
      email: email.value,
      password: password.value,
      notify_me: notify_me.value
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const openPopup = async (popupNumber) => {
  const param = await route.matched[1].children[popupNumber].name
  router.push({ name: param, params: { locale: route.params.locale } })
}
</script>

<style>
@import './SignUpComponent.scss';
</style>
