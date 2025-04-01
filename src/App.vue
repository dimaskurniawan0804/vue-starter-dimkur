<script setup lang="ts">
import { useI18n } from 'vue-i18n'
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
const { locale, t } = useI18n({ useScope: 'global' })

const updateLocale = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
}
</script>

<template>
  <div class="app">
    <h1>THIS IS THE NEW WORLD</h1>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <!--REMIX ICON-->
    <i class="ri-admin-line"></i>
    <!--PRIME ICON-->
    <i class="pi pi-check"></i>

    <Button label="Toggle Language" @click="updateLocale()" />
    {{ t('hello') }}
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.dark {
  .app {
    // dark mode styles
  }
}
</style>
