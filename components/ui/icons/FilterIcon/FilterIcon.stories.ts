import type { Meta, StoryObj } from "@storybook/react";

// Component
import { FilterIcon } from "./FilterIcon";

const meta = {
  title: "Design system/Icons/FilterIcon",
  component: FilterIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom filter icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof FilterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
