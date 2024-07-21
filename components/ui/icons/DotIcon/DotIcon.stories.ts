import type { Meta, StoryObj } from "@storybook/react";

// Component
import { DotIcon } from "./DotIcon";

const meta = {
  title: "Design system/Icons/DotIcon",
  component: DotIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Dot Icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof DotIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DotIconExample: Story = {
  args: {
    width: 25,
    height: 25,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
