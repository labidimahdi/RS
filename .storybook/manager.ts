import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",

    // Brand
    brandTitle: "RS Technologies",
    brandUrl: "https://rstechnologies.ee/",
    brandImage: "/assets/logo_light.png",
    brandTarget: "_self",

    //
    colorPrimary: "#e20080",
    colorSecondary: "#e20080",

    // UI
    appBg: "#f0f0f0",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#ccc",
    appBorderRadius: 0,

    // Text colors
    textColor: "#10162F",
    //  textColor: "#FF0000",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#e20080",
    barSelectedColor: "#585C6D",
    barHoverColor: "#585C6D",
    barBg: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#e20080",
    inputTextColor: "#10162F",
    inputBorderRadius: 2,
  }),
});
