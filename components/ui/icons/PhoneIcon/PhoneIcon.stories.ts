import type { Meta, StoryObj } from "@storybook/react";

// Component
import { PhoneIcon } from "./PhoneIcon";

const meta = {
  title: "Design system/Icons/PhoneIcon",
  component: PhoneIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Phone Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof PhoneIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhoneIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
