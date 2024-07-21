import type { Meta, StoryObj } from "@storybook/react";

// Component
import { DocIcon } from "./DocIcon";

const meta = {
  title: "Design system/Icons/DocIcon",
  component: DocIcon,
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
} satisfies Meta<typeof DocIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DocIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
