import './assets/styles/base/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import i18n from '@/plugins/i18n/index.js'

const app = createApp(App)

app.use(router).use(i18n).mount('#app')
