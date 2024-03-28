<template>
  <PopupComponent>
    <template v-if="!successResult">
      <form class="form sign-up" @submit="onSubmit">
        <h2 class="form__title">
          {{ $t('popup.signUp') }}
        </h2>

        <InputComponent
          class="form__input input-component_border"
          :class="{ 'validate-input-error': errors.email }"
          :placeholderText="$t('popup.email')"
          v-model="email"
          v-bind="emailAttrs"
        />

        <p class="validate-error" v-if="submitCount > 0">
          {{ errors.email }}
        </p>

        <InputComponent
          class="form__input input-component_border"
          :class="{ 'validate-input-error': errors.password }"
          v-bind="passwordAttrs"
          type="password"
          :placeholderText="$t('popup.password')"
          v-model="password"
        />

        <p class="validate-error" v-if="submitCount > 0">
          {{ errors.password }}
        </p>

        <CheckboxComponent
          class="sign-up__checkbox-privacy form__checkbox"
          :class="{ 'validate-checkbox-error': errors.privacy }"
          v-model="privacy"
        >
          <span class="sign-up__checkbox-text">
            {{ $t('popup.agreePrivacy') }}
            <LinkComponent
              class="sign-up__checkbox-text-link"
              :text="$t('popup.privacy')"
              :to="{
                name: 'not found',
                params: { locale: $i18n.locale }
              }"
            />.
          </span>
        </CheckboxComponent>

        <CheckboxComponent
          class="form__checkbox"
          :class="{ 'validate-checkbox-error': errors.notification }"
          value="AAAA"
          v-model="notification"
        >
          <span class="sign-up__checkbox-text">
            {{ $t('popup.agreeNotifications') }}
          </span>
        </CheckboxComponent>

        <ButtonComponent class="sign-up__submit" type="submit" rectangle>
          {{ $t('signUp') }}
        </ButtonComponent>

        <ButtonComponent class="sign-up__sign-in-button" type="submit" @click="openPopup(0)">
          {{ $t('signIn') }}
        </ButtonComponent>
      </form>
    </template>

    <template v-else>
      <div class="success-popup">
        <div class="success-popup__icon-block">
          <SuccessIcon />
        </div>

        <p class="success-popup__description">
          {{ $t('success.registration.description') }}
        </p>

        <p class="success-popup__link-text">
          {{ $t('success.linkText') }}
          <LinkComponent
            class="link_underline-gradient"
            text="Gmail.com"
            to="https://mail.google.com/"
            href
          />
        </p>
      </div>
    </template>
  </PopupComponent>
</template>

<script setup>
import axios from 'axios'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import CheckboxComponent from '@/atoms/ui/CheckboxComponent/CheckboxComponent.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'

const { t } = useI18n()
const toast = useToast()
const route = useRoute()
const router = useRouter()
const successResult = ref(false)

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email(t('validate.email.email')).required(t('validate.email.required')),
    password: yup
      .string()
      .required(t('validate.password.required'))
      .max(128, t('validate.password.max')),
    privacy: yup.boolean().isTrue().required(),
    notification: yup.boolean().isTrue().required()
  })
})

const onSubmit = handleSubmit(() => {
  signUp(email.value, password.value, notification.value)
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [privacy] = defineField('privacy')
const [notification] = defineField('notification')

const signUp = async (email, password, notification) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/registration/`, {
      email,
      password,
      notify_me: notification
    })
    successResult.value = true
    console.log(response)
  } catch (error) {
    console.error(error)
    toast.error(error.response.data.detail)
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
