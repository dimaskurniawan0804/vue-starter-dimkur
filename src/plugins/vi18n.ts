import { createI18n } from 'vue-i18n'
import english from '@/locales/en.json'
import indonesian from '@/locales/id.json'

const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages: {
    en: english,
    id: indonesian,
  },
})

export { i18n }
