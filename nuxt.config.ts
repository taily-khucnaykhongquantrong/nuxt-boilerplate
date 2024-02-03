// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
    ["@nuxtjs/stylelint-module", { lintOnStart: false }],
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
});
