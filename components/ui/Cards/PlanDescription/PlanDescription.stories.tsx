import type { Meta, StoryObj } from "@storybook/react";

// Component
import { PlanDescription } from "./PlanDescription";

const meta = {
  title: "Design system/Cards/PlanDescription",
  component: PlanDescription,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Plan description define strategic step "].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof PlanDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

// with six strategic steps
export const PlanDescriptionExample: Story = {
  args: {
    index: 0,
    title: "Lorem ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati perspiciatis ipsa dicta, minima culpa voluptatibus, unde necessitatibus quo laudantium magni vitae recusandae. Aspernatur voluptates aliquid quaerat porro optio ratione sit.",
  },
};
