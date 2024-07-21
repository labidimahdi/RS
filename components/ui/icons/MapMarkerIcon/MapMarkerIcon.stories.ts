import type { Meta, StoryObj } from "@storybook/react";

// Component
import { MapMarkerIcon } from "./MapMarkerIcon";

const meta = {
  title: "Design system/Icons/MapMarkerIcon",
  component: MapMarkerIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Bottom Map Marker icon"].join("  \n"),
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "Must be a tailwind fill color like fill-primary-color-500",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof MapMarkerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapMarkerIconIconExample: Story = {
  args: {
    width: 16,
    height: 16,
    className: "",
    fillColor: "fill-primary-color-500",
  },
};
