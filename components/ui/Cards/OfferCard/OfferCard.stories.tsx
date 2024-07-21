import type { Meta, StoryObj } from "@storybook/react";

// Component
import { OfferCard } from "./OfferCard";

const meta = {
  title: "Design system/Cards/OfferCard",
  component: OfferCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Offer Card component :"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof OfferCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardOfferCard: Story = {

  args: {
    OfferLink:{pathname: "",
    params: 1,
    },
    title: "Family life assistant on sandwich course (M/F)",
    address: "Immeuble Zarrad, Les Berges du Lac 2, Tunis 1053, Tunisie",
    details: [
      "Apprenticeship contract- full-time 35h.",
      "Salary: according to candidate's profile.",
    ],
    reference: "ABCDEF",
    publishedOn: "24/06/2024",
  },
};
export const StandardOfferCardWithManyDetails: Story = {
  args: {
    OfferLink:{pathname: "",
    params: 2,
    },
    title: "Family life assistant on sandwich course (M/F)",
    address: "Immeuble Zarrad, Les Berges du Lac 2, Tunis 1053, Tunisie",
    details: [
      "Apprenticeship contract- full-time 35h.",
      "Salary: according to candidate's profile.",
      "Salary: according to candidate's profile.",
      "Salary: according to candidate's profile.",
      "Salary: according to candidate's profile.",
    ],
    reference: "ABCDEF",
    publishedOn: "24/06/2024",
  },
};
