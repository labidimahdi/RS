import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CardSlider } from "./CardSlider";

//Shared
import { ourPhilosophyData } from "shared";

const meta = {
  title: "Design system/Cards/CardSlider",
  component: CardSlider,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          "Card Slider component : All arguments are optional except data.",
        ].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof CardSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCardSlider: Story = {
  args: {
    data: ourPhilosophyData,
  },
};

export const CardSliderWithTitle: Story = {
  args: {
    title: "lorem ipsum",
    data: ourPhilosophyData,
  },
};
export const CardSliderWithTitleAndText: Story = {
  args: {
    title: "lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    data: ourPhilosophyData,
  },
};
