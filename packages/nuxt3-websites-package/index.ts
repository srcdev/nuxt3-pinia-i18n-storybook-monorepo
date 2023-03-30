import { addPlugin, defineNuxtModule, createResolver } from "@nuxt/kit";
import { join } from "path";

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "lib/components"),
        prefix: "nx3",
      });
    });

    const { resolve } = createResolver(import.meta.url);

    // add the helper plugin
    addPlugin(resolve("lib/plugins/helper.ts"));

    // add external css libs
    // nuxt.options.css.push('path/to.lib.css')
  },
});
