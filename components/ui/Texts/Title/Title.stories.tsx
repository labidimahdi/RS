import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Title } from "./Title";

const meta = {
  title: "Design system/Texts/Title",
  component: Title,
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Text is a component "].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleExample: Story = {
  args: {
    children: <>Hello</>,
  },
};

export const TitleBold: Story = {
  args: {
    children: <>Hello Every</>,
  },
};
export const TitleSemiBold: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-semibold",
  },
};
export const TitleExtrBold: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-extrabold",
  },
};
export const TitleThin: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-thin",
  },
};
export const TitleDecorationUnderline: Story = {
  args: {
    children: <>Hello Every</>,
    className: "underline",
  },
};
export const TitleDecorationLineThrough: Story = {
  args: {
    children: <>Hello Every</>,
    className: "line-through",
  },
};
export const TitleItalic: Story = {
  args: {
    children: "Hello Every",
    className: "italic",
  },
};
