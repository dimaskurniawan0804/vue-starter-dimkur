<script setup lang="ts">
import DkButton from '@/components/global/DkButton.vue'
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
  <div class="home">
    <h1>THIS IS THE NEW WORLD</h1>
    <DkButton
      variant="rounded"
      severity="warn"
      label="Toggle Dark Mode"
      @click="toggleDarkMode()"
    />
    <!--REMIX ICON-->
    <i class="ri-admin-line"></i>
    <!--PRIME ICON-->
    <i class="pi pi-check"></i>

    <DkButton label="Toggle Language" @click="updateLocale()" />
    {{ t('hello') }}

    <dk-button
      icon="pi pi-times"
      severity="danger"
      variant="text"
      raised
      rounded
      aria-label="Cancel"
    ></dk-button>
    <dk-input-text />
  </div>
</template>

<style lang="scss" scoped>
.home {
  //   height: 100vh;
  //   width: 100vw;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dark {
  .home {
    // dark mode styles
  }
}
</style>
