import '@/assets/styles/base/index.scss'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n/index.js'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const app = createApp(App)
app.use(router).use(i18n).use(VueToast).mount('#app')
