import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CloudManagementIcon } from "./CloudManagementIcon";

const meta = {
  title: "Design system/Icons/CloudManagementIcon",
  component: CloudManagementIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Cloud Management Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof CloudManagementIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloudManagementIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
