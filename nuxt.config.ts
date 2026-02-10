// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/image', 'nuxt-swiper', '@nuxt/eslint'],

  css: [
    '~/assets/styles/base/main.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/base/global.scss" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true // <---
    }
  }
})