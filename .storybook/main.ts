import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(tsx|ts|mdx)",
    "../components/ui/**/*.stories.@(tsx|ts|mdx)",
    "../components/ui/**/*.@(mdx)",
    "../components/ui/**/**/*.stories.@(tsx|ts|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-react-intl",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../"),
      };
    }
    return config;
  },
};
export default config;
