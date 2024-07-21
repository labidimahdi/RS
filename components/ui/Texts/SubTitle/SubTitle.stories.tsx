import type { Meta, StoryObj } from "@storybook/react";

// Component
import { SubTitle } from "./SubTitle";

const meta = {
  title: "Design system/Texts/SubTitle",
  component: SubTitle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Subtitle component "].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof SubTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitle: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-normal not-italic",
  },
};

export const SubTitleBold: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font- not-italic ",
  },
};
export const SubTitleSemiBold: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-semibold",
  },
};
export const SubTitleExtrBold: Story = {
  args: {
    children: <>Hello Every</>,
    className: "font-extrabold",
  },
};
export const SubTitleThin: Story = {
  args: {
    children: <>Hello Every</>,
    className: "thin",
  },
};
export const SubTitleDecorationUnderline: Story = {
  args: {
    children: <>Hello Every</>,
    className: "underline",
  },
};
export const SubTitleDecorationLineThrough: Story = {
  args: {
    children: <>Hello Every</>,
    className: "line-through",
  },
};
export const SubTitleItalic: Story = {
  args: {
    children: <>Hello Every</>,
    className: "italic",
  },
};
