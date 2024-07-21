import type { Meta, StoryObj } from "@storybook/react";

// Component
import Logo from "./Logo";

const meta = {
  title: "Design system/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Logo icon"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoLightDesktop: Story = {
  args: {
    width: 256,
    height: 56,
    light: true,
  },
};

export const LogoDarkDesktop: Story = {
  args: {
    width: 256,
    height: 56,
    light: false,
  },
};
export const LogoLightMobile: Story = {
  args: {
    width: 178,
    height: 40,
    light: true,
  },
};

export const LogoDarkMobile: Story = {
  args: {
    width: 178,
    height: 40,
    light: false,
  },
};
