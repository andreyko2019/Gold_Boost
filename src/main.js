import './assets/styles/base/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './plugins/router'
import en from './locales/en.json'
import ua from './locales/ua.json'

const i18n = createI18n({
  locale: 'ua',
  messages: {
    en: en,
    ua: ua
  }
})

const app = createApp(App)

app.use(router).use(i18n).mount('#app')
