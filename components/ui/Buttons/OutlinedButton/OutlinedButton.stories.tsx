import type { Meta, StoryObj } from "@storybook/react";

// Component
import { OutlinedButton } from "components/ui/Buttons/OutlinedButton/OutlinedButton";

// Children
import { ArrowUpIcon } from "components/ui/icons";

// Shared
import { ButtonEnum, RoundedEnum } from "shared";

const meta = {
  title: "Design system/Buttons/OutlinedButton",
  component: OutlinedButton,

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
} satisfies Meta<typeof OutlinedButton>;

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

// rounded
export const SecondaryXLButtonRoundedFull: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-${RoundedEnum.FULL}`,
  },
};

export const SecondaryXLButtonRoundedSmall: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-sm`,
  },
};

export const SecondaryXLButtonRoundedMedium: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-md`,
  },
};

export const SecondaryXLButtonRoundedLarge: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-lg`,
  },
};
export const SecondaryXLButtonRoundedXLarge: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-xl`,
  },
};
export const SecondaryXLButtonRoundedXXLarge: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-2xl`,
  },
};
export const SecondaryXLButtonRoundedXXXLarge: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "XL rounded Button",
    rounded: `rounded-3xl`,
  },
};

export const SecondaryXLButtonRoundedCustom: Story = {
  args: {
    type: ButtonEnum.XLARGE,
    text: "Custom rounded Button",
    rounded: "[8px]",
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
        fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
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
        fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
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
        fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
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
        fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
      />
    ),
  },
};

export const BlackSecondarySmallButtonWithIcon: Story = {
  args: {
    type: ButtonEnum.SMALL,
    text: "Small Button",
    isBlack: true,
    icon: (
      <ArrowUpIcon
        width={20}
        height={20}
        fillColor="fill-black-color-900  group-focus:fill-primary-color-900"
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
        fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
      />
    ),
  },
};

// with icon without text
export const SecondaryDisabledXLButtonWithIconOnly: Story = {
  args: {
    disabled: true,
    icon: (
      <ArrowUpIcon width={20} height={20} fillColor="fill-gray-color-200" />
    ),
  },
};
