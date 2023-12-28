// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
   css: ['/assets/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      },
      
  },
  app: {
    head: {
      title: "Nuxt App",
      meta: [
        {name: "description", content:"Everything about Nuxt Js"}
      ],
      link: [
        {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'}
      ]
      }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
