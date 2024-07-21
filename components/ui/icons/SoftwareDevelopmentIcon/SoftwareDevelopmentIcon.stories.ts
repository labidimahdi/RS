import type { Meta, StoryObj } from "@storybook/react";

// Component
import { SoftwareDevelopmentIcon } from "./SoftwareDevelopmentIcon";

const meta = {
  title: "Design system/Icons/SoftwareDevelopmentIcon",
  component: SoftwareDevelopmentIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Software Development Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof SoftwareDevelopmentIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoftwareDevelopmentIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};

export const WhiteStrokeSoftwareDevelopmentIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
    strokeColor: "#FFF",
  },
};
