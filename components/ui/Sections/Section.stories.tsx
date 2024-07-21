import type { Meta, StoryObj } from "@storybook/react";

// Component
import { Section } from "./Section";
import { CardContainer } from "../Cards/CardContainer/CardContainer";
import { SubTitle } from "../Texts/SubTitle/SubTitle";
import { Text } from "../Texts/Text/Text";

const meta = {
  title: "Design system/Section/Section",
  component: Section,
  parameters: {
    docs: {
      description: {
        component: [
          "Section component : All arguments are optional except children.",
        ].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleSection: Story = {
  args: {
    children: (
      <CardContainer imageSrc="assets/HomePageAssets/about1.svg">
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
      </CardContainer>
    ),
  },
};

export const SectionWithTitle: Story = {
  args: {
    title: "Lorem ipsum",
    children: (
      <CardContainer imageSrc="assets/HomePageAssets/about1.svg">
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
      </CardContainer>
    ),
  },
};

export const SectionWithBackgroundImage: Story = {
  args: {
    bgImage: "bg-wave_purple",
    children: (
      <CardContainer imageSrc="assets/HomePageAssets/about1.svg">
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
      </CardContainer>
    ),
  },
};

export const SectionWithTitleAndBackgroundImage: Story = {
  args: {
    title: "Lorem ipsum",
    bgImage: "bg-wave_purple",
    children: (
      <CardContainer imageSrc="assets/HomePageAssets/about1.svg">
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
      </CardContainer>
    ),
  },
};

export const SectionWithiOverrideClassName: Story = {
  args: {
    className: "py-10 lg:px-[90px]",
    title: "Lorem ipsum",
    bgImage: "bg-wave_purple",
    children: (
      <CardContainer imageSrc="assets/HomePageAssets/about1.svg">
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
      </CardContainer>
    ),
  },
};
