import type { Meta, StoryObj } from "@storybook/react";

// Component
import { CardContainer } from "./CardContainer";
import { SubTitle } from "../../Texts/SubTitle/SubTitle";
import { Text } from "../../Texts/Text/Text";

const meta = {
  title: "Design system/Cards/CardContainer",
  component: CardContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Card Container component"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardCardContainer: Story = {
  args: {
    imageSrc: "assets/HomePageAssets/about1.svg",
    reverse: false,
    shadow: false,
    children: (
      <>
        <SubTitle className=" mb-[25px] uppercase">
          Pioneering Tomorrow’s Tech Today
        </SubTitle>

        <Text className=" mb-[14px]">
          <span className="font-semibold">Excellence in Innovation:</span>
          High-Performance Solutions for Complex Challenges
        </Text>
        <Text className="text-justify">
          At RS Technologies, our passion is to pioneer the future of
          technology. Each day, we’re forging the path with high-performance
          solutions designed to meet complex challenges head-on. We blend
          innovative thinking with industry-leading expertise to deliver
          products that not only meet but redefine industry standards,
          propelling businesses towards a smarter, more efficient future.
        </Text>
      </>
    ),
  },
};
