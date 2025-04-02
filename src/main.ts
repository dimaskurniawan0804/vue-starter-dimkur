import './assets/main.css'
import 'remixicon/fonts/remixicon.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

import { i18n } from './plugins/vi18n'

import registerGlobalComponents from './plugins/global-components'

const app = createApp(App)
registerGlobalComponents(app)

app.use(createPinia())
app.use(router)

app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark',
    },
  },
})

app.mount('#app')
