<script lang="ts" setup>
// https://primevue.org/button/
defineOptions({
  name: 'dk-button',
})
</script>

<template>
  <Button class="dk-button" v-bind="$attrs">
    <slot />
  </Button>
</template>
