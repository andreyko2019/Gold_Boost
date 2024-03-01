<template>
  <DropdownComponent
    :optionsList="countries"
    :selectedOption="selectedOption"
    @optionSelected="handleOptionSelected"
  />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/plugins/i18n/translation'
import DropdownComponent from '@/atoms/ui/DropdownComponent/DropdownComponent.vue'

const { t, locale } = useI18n()

const supportedLocales = Tr.supportedLocales

const countries = supportedLocales.map((locale) => ({
  value: locale,
  img: new URL(`/src/assets/images/flags/${locale}.svg`, import.meta.url)
}))

const getSelectedOption = () => {
  return {
    value: locale.value,
    img: new URL(`/src/assets/images/flags/${locale.value}.svg`, import.meta.url)
  }
}

const selectedOption = getSelectedOption()

const router = useRouter()

const switchLanguage = async (value) => {
  const newLocale = value

  await Tr.switchLanguage(newLocale)

  try {
    await router.replace({ params: { locale: newLocale } })
  } catch (e) {
    console.log(e)
    router.push('/')
  }
}

const handleOptionSelected = (option) => {
  selectedOption.value = option.value
  selectedOption.img = new URL(`/src/assets/images/flags/${option.value}.svg`, import.meta.url)
  switchLanguage(selectedOption.value)
}
</script>
