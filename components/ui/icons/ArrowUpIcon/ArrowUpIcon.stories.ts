import type { Meta, StoryObj } from "@storybook/react";

// Component
import { ArrowUpIcon } from "./ArrowUpIcon";

const meta = {
  title: "Design system/Icons/ArrowUpIcon",
  component: ArrowUpIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom ArrowUp icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ArrowUpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowUpIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
