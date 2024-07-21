import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CalendarIcon } from "./CalendarIcon";

const meta = {
  title: "Design system/Icons/CalendarIcon",
  component: CalendarIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Calendar Icon icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof CalendarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
