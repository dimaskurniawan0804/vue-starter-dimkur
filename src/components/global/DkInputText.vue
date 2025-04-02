<script setup lang="ts">
import { computed } from 'vue'
import { de } from 'vuetify/locale'

defineOptions({
  name: 'dk-input-text',
})

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  isError: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  iconPos: {
    type: String,
    default: 'right',
  },
  focusBorder: {
    type: String,
    require: false,
    default: 'var(--p-blue-500)',
  },
})

const getInvalid = computed(() => {
  return props.isError ? true : false
})
</script>

<template>
  <div>
    <div class="dk-input-text">
      <label v-if="label" for="username">{{ label }}</label>
      <div class="input-wrapper">
        <InputText
          v-bind="$attrs"
          :class="iconPos"
          :style="{ '--focus-border-color': focusBorder }"
          :invalid="getInvalid"
        />
        <i v-if="icon" :class="`${icon} ${iconPos}`"></i>
      </div>
      <div v-if="message || isError" class="message-wrapper">
        <i
          :class="`${isError ? 'ri-close-circle-line' : 'ri-error-warning-line'} ${isError ? 'error' : ''}`"
        ></i>
        <p :class="isError ? 'error' : ''">
          {{ message || isError }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dk-input-text {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    color: var(--p-gray-500);
  }

  .input-wrapper {
    position: relative;
    padding: 0;
    width: 100%;
    .p-inputtext {
      width: 100%;
      &.left {
        padding-left: 42px;
      }
      &.right {
        padding-right: 42px;
      }
      &:enabled {
        &:focus {
          border-color: var(--focus-border-color);
        }
      }
    }
    i {
      &.right {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        color: #999;
      }
      &.left {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        color: #999;
      }
    }
  }

  .message-wrapper {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    p,
    i {
      font-size: 16px;
      color: var(--p-gray-500);
      &.error {
        color: var(--p-red-500);
      }
    }
  }
}
</style>
