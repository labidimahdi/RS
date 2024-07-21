import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CyberSecurityIcon } from "./CyberSecurityIcon";

const meta = {
  title: "Design system/Icons/CyberSecurityIcon",
  component: CyberSecurityIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Cyber Security Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof CyberSecurityIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberSecurityIconExample: Story = {
  args: {
    width: 46,
    height: 46,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
