import type { Meta, StoryObj } from "@storybook/react";

// Component
import { ReloadIcon } from "./ReloadIcon";

const meta = {
  title: "Design system/Icons/ReloadIcon",
  component: ReloadIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom reload icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ReloadIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReloadIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
