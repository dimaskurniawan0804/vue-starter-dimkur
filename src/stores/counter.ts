import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { StoreId } from './StoreEnum'

export const useCounterStore = defineStore(StoreId.COUNTER, () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
