import type { Meta, StoryObj } from "@storybook/react";

// Component
import { PrimaryButton } from "./PrimaryButton";

// Children
import { ArrowUpIcon } from "components/ui/icons";

// Shared
import { ButtonEnum } from "shared";

const meta = {
  title: "Design system/Buttons/PrimaryButton",
  component: PrimaryButton,
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
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// with text
export const PrimaryXLButtonWithText: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL Button",
  },
};

export const PrimaryLargeButtonWithText: Story = {
  args: {
    type: ButtonEnum.LARGE,
    text: "Large Button",
  },
};

export const PrimaryMediumButtonWithText: Story = {
  args: {
    type: ButtonEnum.MEDIUM,
    text: "Medium Button",
  },
};

export const PrimarySmallButtonWithText: Story = {
  args: {
    type: ButtonEnum.SMALL,
    text: "Small Button",
  },
};

// size with icon
export const PrimaryXLButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL Button",
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimaryLargeButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.LARGE,
    text: "Large Button",
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimaryMediumButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.MEDIUM,
    text: "Medium Button",
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimarySmallButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.SMALL,
    text: "Small Button",
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

// with icon without text
export const PrimaryXLButtonWithIconAndWithoutText: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimaryLargeButtonWithIconAndWithoutText: Story = {
  args: {
    type: ButtonEnum.LARGE,
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimaryMediumButtonWithIconAndWithoutText: Story = {
  args: {
    type: ButtonEnum.MEDIUM,
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};

export const PrimarySmallButtonWithIconAndWithoutText: Story = {
  args: {
    type: ButtonEnum.SMALL,
    icon: <ArrowUpIcon width={20} height={20} fillColor="fill-white-color" />,
  },
};
