import type { Meta, StoryObj } from "@storybook/react";

// Component
import PrimaryCta from "./PrimaryCta";
import { Title } from "../../Texts/Title/Title";

const meta = {
  title: "Design system/Ctas/PrimaryCta",
  component: PrimaryCta,
  parameters: {
    docs: {
      description: {
        component: ["Primary Call to Action"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof PrimaryCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardPrimaryCta: Story = {
  args: {
    className:
      "mx-auto my-10 px-14 w-[1200px] h-[170px] h-max-[156px] py-4 bg-center bg-no-repeat lg:flex flex-col-2 justify-center items-center bg-cta_mobile lg:bg-cta gap-x-20",
    children: (
      <Title className="lg:text-3xl xl:text-4xl">
        Let’s bring <br className="lg:hidden" /> your next Idea to Life!
      </Title>
    ),
    buttonText: "CONTACT US",
    bgImage: "bg-cta_mobile lg:bg-cta",
    buttonPath: "",
  },
};
