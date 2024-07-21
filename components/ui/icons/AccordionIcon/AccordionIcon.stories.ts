import type { Meta, StoryObj } from "@storybook/react";

// Component
import { AccordionIcon } from "./AccordionIcon";

const meta = {
  title: "Design system/Icons/AccordionIcon",
  component: AccordionIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom Accordion icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof AccordionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionIconExample: Story = {
  args: {
    width: 12,
    height: 12,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
