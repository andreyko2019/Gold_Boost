<template>
  <PopupComponent>
    <form class="form sign-in" @submit="onSubmit">
      <h2 class="form__title">Sign In</h2>

      <InputComponent
        v-model="email"
        v-bind="emailAttrs"
        class="form__input input-component_border"
        placeholderText="Email"
      />

      <pre>{{ errors.email }}</pre>

      <InputComponent
        v-model="password"
        v-bind="passwordAttrs"
        class="form__input input-component_border"
        type="password"
        placeholderText="Password"
      />

      <pre>{{ errors.password }}</pre>

      <ButtonComponent class="sign-in__forgot-password-button" @click="openPopup(2)"
        >Forgot password?</ButtonComponent
      >

      <ButtonComponent class="sign-in__submit" type="submit" rectangle>Sign in</ButtonComponent>

      <ButtonComponent class="sign-in__sign-up-button" @click="openPopup(1)"
        >Sign up</ButtonComponent
      >

      <div class="sign-in__social">
        <h3 class="sign-in__social-title">Or connect using:</h3>

        <div class="sign-in__social-buttons">
          <ButtonComponent circle>
            <FacebookIcon />
          </ButtonComponent>

          <ButtonComponent circle>
            <GooglePlusIcon />
          </ButtonComponent>

          <ButtonComponent circle>
            <TwitterIcon />
          </ButtonComponent>
        </div>
      </div>
    </form>
  </PopupComponent>
</template>

<script setup>
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import GooglePlusIcon from '@/atoms/icons/GooglePlusIcon.vue'
import TwitterIcon from '@/atoms/icons/TwitterIcon.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().max(128, 'Password must be less than 128 characters')
  })
})

const onSubmit = handleSubmit((values) => {
  console.log('Submitted', JSON.stringify(values, null, 2))
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const route = useRoute()
const router = useRouter()

const openPopup = async (popupNumber) => {
  const param = await route.matched[1].children[popupNumber].name
  router.push({ name: param, params: { locale: route.params.locale } })
}
</script>

<style>
@import './SignInComponent.scss';
</style>
