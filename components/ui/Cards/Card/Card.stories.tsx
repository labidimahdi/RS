import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Card } from "./Card";
import { GlobeWebIcon } from "../../icons";

const meta = {
  title: "Design system/Cards/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Card component : All arguments are optional"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardCard: Story = {
  args: {
    title: "Web Development",
    text: "Crafting responsive and user-friendly websites to establish your digital presence and engage your audience.",
    icon: (
      <GlobeWebIcon
        width={46}
        height={44}
        fillColor="fill-black-color-900"
        className="mb-4"
      />
    ),
  },
};

export const StandardCardWithChildren: Story = {
  args: {
    title: "Web Development",
    text: "Crafting responsive and user-friendly websites to establish your digital presence and engage your audience.",
    icon: (
      <GlobeWebIcon
        width={46}
        height={44}
        fillColor="fill-black-color-900"
        className="mb-4"
      />
    ),
    children: (
      <p>
        Crafting responsive and user-friendly websites to establish your digital
        presence and engage your audience.
      </p>
    ),
  },
};

export const CardWithChildrenBeforeText: Story = {
  args: {
    title: "Web Development",
    text: "Crafting responsive and user-friendly websites to establish your digital presence and engage your audience.",
    beforeText: true,
    icon: (
      <GlobeWebIcon
        width={46}
        height={44}
        fillColor="fill-black-color-900"
        className="mb-4"
      />
    ),
    children: (
      <p>
        Crafting responsive and user-friendly websites to establish your digital
        presence and engage your audience.
      </p>
    ),
  },
};
