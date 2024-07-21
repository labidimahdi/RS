import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Banner } from "./Banner";

const meta = {
  title: "Design system/Banners/Banner",
  component: Banner,
  parameters: {
    docs: {
      description: {
        component: [
          "Banner component : All arguments are optional except bgImage url.",
        ].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroBanner: Story = {
  args: {
    bgImage: "lg:bg-video bg-video",
    className: "w-full bg-center lg:h-[740px]",
    isHero: true,
  },
};

export const PageBanner: Story = {
  args: {
    title: "Web Development",
    subtitle:
      "Crafting responsive and user-friendly websites to establish your digital presence and engage your audience.",
    bgImage: "lg:bg-banner_about_us bg-mobile_banner_about_us",
  },
};
