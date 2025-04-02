<script setup lang="ts">
import Home from './views/Home.vue'
</script>

<template>
  <div class="app">
    <home />
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
}

.dark {
  .app {
    // dark mode styles
    background-color: #121212;
  }
}
</style>
