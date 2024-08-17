// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
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
      api: "https://api.themoviedb.org/3/movie/",
      tokenAccess: process.env.NUXT_TOKEN_ACCESS,
    },
  },
});
