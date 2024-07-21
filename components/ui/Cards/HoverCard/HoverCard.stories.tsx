import type { Meta, StoryObj } from "@storybook/react";

// Component
import { HoverCard } from "./HoverCard";
import { GlobeWebIcon } from "../../icons";

const meta = {
  title: "Design system/Cards/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Hover Card component : All arguments are optional"].join(
          "  \n",
        ),
      },
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardHoverCard: Story = {
  args: {
    extraLink:{
      pathname:"",
      params:""
    },
    className:
      "bg-purple-gray-500 group duration-100 ease-in-out hover:bg-white-color",
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

export const StandardHoverCardWithChildren: Story = {
  args: {
    extraLink:{
      pathname:"",
      params:""
    },
    className: "group",
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

export const HoverCardWithChildrenBeforeText: Story = {
  args: {
    extraLink:{
      pathname:"",
      params:""
    },
    className: "group",
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
