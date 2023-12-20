import { testStore } from '../stores/test/test'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      useTestStore: testStore(),
    },
  }
})
