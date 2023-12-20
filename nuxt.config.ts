// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/ui', 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt','@nuxt/image',],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Portfolio',
      meta:[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio' },
        {charset: 'utf-8'},
      ],
    },
  }
})
