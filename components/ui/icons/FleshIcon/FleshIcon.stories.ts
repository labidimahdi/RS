import type { Meta, StoryObj } from "@storybook/react";

// Component
import { FlechIcon } from "..";

const meta = {
  title: "Design system/Icons/FleshIcon",
  component: FlechIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom Flesh icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof FlechIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlechIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
