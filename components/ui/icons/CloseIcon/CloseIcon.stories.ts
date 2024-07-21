import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CloseIcon } from "./CloseIcon";

const meta = {
  title: "Design system/Icons/CloseIcon",
  component: CloseIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom Close icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
