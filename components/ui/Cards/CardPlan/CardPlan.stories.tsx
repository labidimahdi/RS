import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CardPlan } from "components/ui/Cards/CardPlan/CardPlan";

const meta = {
  title: "Design system/Cards/CardPlan",
  component: CardPlan,
  parameters: {
    docs: {
      description: {
        component: [
          "Plan component, delineating six strategic steps, each embodying the pinnacle of RS Technologies' services.",
        ].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof CardPlan>;

export default meta;

type Story = StoryObj<typeof meta>;

// with six strategic steps
export const CardPlanDetails: Story = {
  args: {
    summary: [
      {
        title: "Nearshore Advantage",
        details:
          "Leveraging our strategic nearshore location, RS TECHNOLOGIES offers the perfect blend of accessibility, cultural affinity, and time zone compatibility. This geographical benefit ensures seamless communication and collaboration, making us an extension of your team rather than just a service provider",
      },
      {
        title: "Tailored Solutions",
        details:
          "We don’t believe in one-size-fits-all. Our approach is to understand your unique business needs and challenges to deliver customized, scalable solutions that drive real value and growth.",
      },
      {
        title: "Commitment to Innovation",
        details:
          "At RS TECHNOLOGIES, staying ahead of technological trends isn’t just a goal—it’s a necessity. We continuously explore new tools and methodologies to ensure our clients benefit from the latest advancements.",
      },
      {
        title: "Ethical and Sustainable Practice",
        details:
          "We’re committed to conducting business ethically and sustainably, ensuring our operations have a positive impact on society and the environment. Choosing us means partnering with a company that cares about the future.",
      },
      {
        title: "Proven Track Record",
        details:
          "With a history of successful projects and satisfied clients, our track record speaks for itself. We’re proud of the lasting relationships we’ve built and the results we’ve achieved together.",
      },
      {
        title: "Responsive and Supportive Partnership",
        details:
          "We view our client relationships as partnerships, offering continuous support and open communication. Our team is always ready to address your concerns and adapt to changing needs, ensuring a responsive and supportive experience.",
      },
    ],
    imageSrc: "/assets/AboutPageAssets/OurValues.svg",
  },
};
