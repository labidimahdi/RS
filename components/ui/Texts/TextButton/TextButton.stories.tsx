import type { Meta, StoryObj } from "@storybook/react";

// Component
import { TextButton } from "./TextButton";

const meta = {
  title: "Design system/Texts/TextButton",
  component: TextButton,
  argTypes: {
    fontWeight: {
      options: ["bold", "semibold", "extrabold", "thin", "normal"],
      control: { type: "select" },
    },
    fontStyle: {
      options: ["italic", "not-italic"],
      control: { type: "radio" },
    },
    textDecoration: {
      options: ["underline", "not-overline", "line-through", "no-underline"],
      control: { type: "select" },
    },
    size: {
      options: ["xlarge", "large", "medium", "default"],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Text is a component "].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextbuttonExample: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "normal",
    size: "default",
  },
};

export const TextButtonBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "bold",
  },
};
export const TextButtonSemiBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "semibold",
  },
};
export const TextButtonExtrBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "extrabold",
  },
};
export const TextButtonThin: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "thin",
  },
};
export const TextButtonDecorationUnderline: Story = {
  args: {
    children: <>Hello Every</>,
    textDecoration: "underline",
  },
};
export const TextButtonDecorationLineThrough: Story = {
  args: {
    children: <>Hello Every</>,
    textDecoration: "line-through",
  },
};
export const TextButtonItalic: Story = {
  args: {
    children: <>Hello Every</>,
    fontStyle: "italic",
  },
};
