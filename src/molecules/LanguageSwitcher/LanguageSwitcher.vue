<!--TODO-->
<template>
  <DropdownComponent
    :optionsList="countries"
    :selectedOption="selectedOption"
    @optionSelected="handleOptionSelected"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
import Tr from '@/plugins/i18n/translation'
import DropdownComponent from '@/atoms/ui/DropdownComponent/DropdownComponent.vue'
import Trans from '@/plugins/i18n/translation'

const supportedLocales = Tr.supportedLocales

const countries = supportedLocales.map((locale) => ({
  value: locale,
  img: new URL(`/src/assets/images/flags/${Trans.currentLocale}.svg`, import.meta.url)
}))

const getSelectedOption = () => {
  const localeValue = Trans.currentLocale

  return {
    value: localeValue,
    img: new URL(`/src/assets/images/flags/${localeValue}.svg`, import.meta.url)
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
    router.replace({ name: 'home', params: { locale: Trans.currentLocale } })
  }
}

const handleOptionSelected = (option) => {
  selectedOption.value = option.value
  selectedOption.img = new URL(`/src/assets/images/flags/${option.value}.svg`, import.meta.url)
  switchLanguage(selectedOption.value)
}
</script>
