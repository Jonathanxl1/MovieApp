// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["primeicons/primeicons.css"],
  devtools: { enabled: false },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      theme: Aura,
      ripple: true,
    },
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      api: "https://api.themoviedb.org/3/",
      imageTmbd: "https://image.tmdb.org/t/p/",
      tokenAccess: process.env.NUXT_TOKEN_ACCESS,
      apiKey: process.env.NUXT_API_KEY,
    },
  },
});
