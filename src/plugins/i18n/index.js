import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

const getLanguageFromUrl = () => {
  const url = window.location.pathname

  const matches = url.match(/^\/(ua|en)(\/|$)/)
  return matches && matches[1] ? matches[1] : 'en'
}

export default createI18n({
  locale: getLanguageFromUrl(),
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en, ua },
  runtimeOnly: false
})
