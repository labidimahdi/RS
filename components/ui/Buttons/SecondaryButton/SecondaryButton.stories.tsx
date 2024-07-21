import type { Meta, StoryObj } from "@storybook/react";

// Component
import { SecondaryButton } from "./SecondaryButton";

// Children
import { ArrowUpIcon } from "../../icons";

// Shared
import { ButtonEnum } from "../../../../shared/enum/button";

const meta = {
  title: "Design system/Buttons/SecondaryButton",
  component: SecondaryButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A primary Button is a component that displays a icon as a children like a Link Button",
          "You can also add text right or left of the icon",
        ].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof SecondaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// with text
export const SecondaryXLButtonWithText: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL Button",
  },
};

export const SecondaryLargeButtonWithText: Story = {
  args: {
    type: ButtonEnum.LARGE,
    text: "Large Button",
  },
};

export const SecondaryMediumButtonWithText: Story = {
  args: {
    type: ButtonEnum.MEDIUM,
    text: "Medium Button",
  },
};

export const SecondarySmallButtonWithText: Story = {
  args: {
    type: ButtonEnum.SMALL,
    text: "Small Button",
  },
};

// size with icon
export const SecondaryXLButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL Button",
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-primary-color-900 group-hover:fill-white-color"
      />
    ),
  },
};

export const SecondaryLargeButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.LARGE,
    text: "Large Button",
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-primary-color-900 group-hover:fill-white-color"
      />
    ),
  },
};

export const SecondaryMediumButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.MEDIUM,
    text: "Medium Button",
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-primary-color-900 group-hover:fill-white-color"
      />
    ),
  },
};

export const SecondarySmallButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.SMALL,
    text: "Small Button",
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-primary-color-900 group-hover:fill-white-color"
      />
    ),
  },
};

// with icon without text
export const SecondaryXLButtonWithIconOnly: Story = {
  args: {
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-primary-color-900 group-hover:fill-white-color"
      />
    ),
  },
};
