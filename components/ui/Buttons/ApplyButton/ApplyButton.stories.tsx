import type { Meta, StoryObj } from "@storybook/react";

// Component
import { ApplyButton } from "./ApplyButton";

const meta = {
  title: "Design system/Buttons/ApplyButton",
  component: ApplyButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Apply Button component"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof ApplyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// with text
export const ApplyButtonExample: Story = {
  args: {
    children: <>Apply</>,
    className: "",
  },
};
