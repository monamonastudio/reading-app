// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt Configuration
  devtools: { enabled: true },
  ssr: false,

  // Modules and deps
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-vuefire",
    "@nuxt/image",
    "@pinia/nuxt"
  ],

  // Vuefire integration with Firebase config
  vuefire: {
    config: {
      apiKey: "AIzaSyCq7VoRRqu-_Aq8yoKTOyPeMOb4KY2sHkI",
      authDomain: "app-reader-demo.firebaseapp.com",
      projectId: "app-reader-demo",
      storageBucket: "app-reader-demo.appspot.com",
      messagingSenderId: "767095443858",
      appId: "1:767095443858:web:097c9c0acb71e8fe41f14b"
    },
    auth: {
      enabled: true,
      popupRedirectResolver: "browser",
      persistence: [
        "indexedDBLocal"
      ]
    }
  },
  //Stylings
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css"
  },

  // Transitions and Animations
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})
