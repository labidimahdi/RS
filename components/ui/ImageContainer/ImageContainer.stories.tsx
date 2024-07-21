import type { Meta, StoryObj } from "@storybook/react";

// Component
import { ImageContainer } from "./ImageContainer";

const meta = {
  title: "Design system/Cards/ImageContainer",
  component: ImageContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Image Container component"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof ImageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardImageContainer: Story = {
  args: {
    imgSrc: "assets/HomePageAssets/about1.svg",
    alt: "ImageContainer",
    width: 250,
    height: 250,
    className: "",
  },
};
