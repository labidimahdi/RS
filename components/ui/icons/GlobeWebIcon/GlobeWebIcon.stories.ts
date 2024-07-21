import type { Meta, StoryObj } from "@storybook/react";

// Component
import { GlobeWebIcon } from "./GlobeWebIcon";

const meta = {
  title: "Design system/Icons/GlobeWebIcon",
  component: GlobeWebIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Globe Web Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof GlobeWebIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobeWebIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
