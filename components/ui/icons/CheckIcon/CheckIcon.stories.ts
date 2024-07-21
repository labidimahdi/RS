import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CheckIcon } from "./CheckIcon";

const meta = {
  title: "Design system/Icons/CheckIcon",
  component: CheckIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom Check icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckIconIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
