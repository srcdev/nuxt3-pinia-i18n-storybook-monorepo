import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@styles": fileURLToPath(new URL("../../shared/assets/styles", import.meta.url)),
    "@shared/composables": fileURLToPath(new URL("../../shared/composables", import.meta.url)),
    "@packages": fileURLToPath(new URL("../../packages/nuxt3-websites-package/lib/components", import.meta.url)),
  },
  ssr: false,
  css: [fileURLToPath(new URL("../../assets/styles/index.scss", import.meta.url))],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "apiSecret from Nuxt.config",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api-from-Nuxt.config",
    },
  },
  modules: [
    "nuxt3-websites-package",
    "@pinia/nuxt",
    // [
    //   "@nuxtjs/i18n",
    //   {
    //     locales: [
    //       {
    //         code: "en",
    //         file: "en-GB.json",
    //         name: "English",
    //       },
    //     ],
    //     lazy: true,
    //     langDir: "locales",
    //     defaultLocale: "en",
    //     globalInjection: true,
    //     legacy: false,
    //     // useScope: "global",
    //   },
    // ],
  ],
  // imports: {
  //   dirs: ["stores"],
  // },
  plugins: ["@/plugins/i18n"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s - Website name",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/assets/images/favicon.jpg",
        },
      ],
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
});
