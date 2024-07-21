import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Title } from "../../Texts/Title/Title";
import CtaBrochure from "./CtaBrochure";

const meta = {
  title: "Design system/Ctas/CtaBrochure",
  component: CtaBrochure,
  parameters: {
    docs: {
      description: {
        component: ["Primary Call to Action"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof CtaBrochure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardPrimaryCta: Story = {
  args: {
    className:
      "mx-auto my-10 px-14 w-[1200px] h-[170px] h-max-[156px] py-4 bg-center bg-no-repeat lg:flex flex-col-2 justify-center items-center bg-cta_mobile lg:bg-cta gap-x-20",
    children: (
      <Title className="lg:text-3xl xl:text-4xl">
        Brochure highlighting our<br className="lg:hidden flex"/> key products and services
      </Title>
    ),
    buttonText: "DOWNLOAD",
    bgImage: "bg-cta_mobile lg:bg-cta",
    buttonPath: "",
  },
};
