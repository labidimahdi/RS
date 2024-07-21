import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Text } from "./Text";

const meta = {
  title: "Design system/Texts/Text",
  component: Text,
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
  },
  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: ["Text component "].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleTextNormal: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "normal",
  },
};
export const ExampleTextBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "bold",
  },
};
export const ExampleTextSemiBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "semibold",
  },
};
export const ExampleTextExtrBold: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "normal",
  },
};
export const ExampleTextThin: Story = {
  args: {
    children: <>Hello Every</>,
    fontWeight: "thin",
  },
};
export const ExampleTextDecorationUnderline: Story = {
  args: {
    children: <>Hello Every</>,
    textDecoration: "underline",
  },
};
export const ExampleTextDecorationLineThrough: Story = {
  args: {
    children: <>Hello Every</>,
    textDecoration: "line-through",
  },
};
export const ExampleTextItalic: Story = {
  args: {
    children: <>Hello Every</>,
    fontStyle: "italic",
  },
};
