// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', 'nuxt-swiper', '@nuxt/eslint'],

  css: ['~/assets/styles/base/main.scss'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001',
    },
  },
  compatibilityDate: '2025-07-15',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/base/global.scss" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
});
