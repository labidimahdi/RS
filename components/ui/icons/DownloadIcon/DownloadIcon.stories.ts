import type { Meta, StoryObj } from "@storybook/react";

// Component
import { DownloadIcon } from "./DownloadIcon";

const meta = {
  title: "Design system/Icons/DownloadIcon",
  component: DownloadIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Download Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof DownloadIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DownloadIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
