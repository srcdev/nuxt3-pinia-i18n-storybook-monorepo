// import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/vue3-vite';
const path = require("path");

const config: StorybookConfig = {
  stories: ["../**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", {
      name: '@storybook/addon-docs',
      // options: {
      //   mdxPluginOptions: {
      //     mdxCompileOptions: {
      //       remarkPlugins: [remarkGfm],
      //     },
      //   },
      // },
    }
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  // features: {
  //   storyStoresV7: true
  // },
  async viteFinal(config: any, {
    configType
  }) {
    config.base = "/src/";
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./../"),
      "~": path.resolve(__dirname, "./../"),
      "@shared/composables": path.resolve(__dirname, "../../../shared/composables"),
      "@shared/styles": path.resolve(__dirname, "../../../shared/assets/styles")
    };
    if (configType === "DEVELOPMENT") {
      return {
        ...config,
        define: {
          ...config.define,
          global: "window"
        }
      };
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;
