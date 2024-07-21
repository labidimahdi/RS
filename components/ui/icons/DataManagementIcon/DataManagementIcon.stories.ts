import type { Meta, StoryObj } from "@storybook/react";

// Component
import { DataManagementIcon } from "./DataManagementIcon";

const meta = {
  title: "Design system/Icons/DataManagementIcon",
  component: DataManagementIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Data Management Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof DataManagementIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DataManagementIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
