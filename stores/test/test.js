import { defineStore } from 'pinia'

export const testStore = defineStore(
  'testStore',
  () => {
    const counter = ref(1)

    const counterPlus = () => (counter.value = counter.value * 2)
    return { counter, counterPlus }
  },
  { persist: true }
)
