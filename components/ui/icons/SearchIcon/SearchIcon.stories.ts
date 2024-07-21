import type { Meta, StoryObj } from "@storybook/react";

// Component
import { SearchIcon } from "./SearchIcon";

const meta = {
  title: "Design system/Icons/SearchIcon",
  component: SearchIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom search icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof SearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
