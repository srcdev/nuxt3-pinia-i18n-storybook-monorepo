// const path = require("path");
import { fileURLToPath } from "url";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt3-websites-package"],
  alias: {
    "@styles": fileURLToPath(new URL("../../assets/styles", import.meta.url)),
  },
});
