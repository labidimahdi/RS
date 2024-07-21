import type { Meta, StoryObj } from "@storybook/react";

// Component
import { HorizentalAccordion } from "./HorizentalAccordion";
import { Text } from "../../Texts/Text/Text";
import { ImageContainer } from "components/ui/ImageContainer/ImageContainer";

const meta = {
  title: "Design system/Accordions/HorizentalAccordion",
  component: HorizentalAccordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Horizental Accordion component"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof HorizentalAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardHorizentalAccordion: Story = {
  args: {
    data: [
      {
        title: "lorem ipsum",
        content: (
          <div className="flex flex-col items-center justify-center">
            <Text className="lg:px-30 px-2 text-justify lg:text-[15px]">
              Data quality and consistency can be crucial to a company's daily
              routine. Recognizing this, our experienced teams streamline the
              flow of data with customers' offices and departments, transforming
              fragmented information.
            </Text>
            <ImageContainer
              imgSrc="../assets/AboutPageAssets/ourStory.svg"
              alt="abou Us"
              width={150}
              height={150}
              className="flex rounded-[10px] pt-6 lg:h-[217px] lg:w-[356px]"
            />
          </div>
        ),
      },
      {
        title: "lorem ipsum",
        content: (
          <div className="flex flex-col items-center justify-center">
            <Text className=" lg:px-30 px-2 text-justify lg:text-[15px]">
              Data quality and consistency can be crucial to a company's daily
              routine. Recognizing this, our experienced teams streamline the
              flow of data with customers' offices and departments, transforming
              fragmented information.
            </Text>
            <ImageContainer
              imgSrc="../assets/NearshorePageAssets/ournearshore.svg"
              alt="abou Us"
              width={356}
              height={217}
              className="flex rounded-[10px] pt-6 lg:h-[217px] lg:w-[356px]"
            />
          </div>
        ),
      },
      {
        title: "lorem ipsum",
        content: (
          <div className="flex flex-col items-center justify-center">
            <Text className=" lg:px-30 px-2 text-justify lg:text-[15px]">
              Data quality and consistency can be crucial to a company's daily
              routine. Recognizing this, our experienced teams streamline the
              flow of data with customers' offices and departments, transforming
              fragmented information.
            </Text>
            <ImageContainer
              imgSrc="../assets/NearshorePageAssets/ournearshore.svg"
              alt="abou Us"
              width={356}
              height={217}
              className="flex rounded-[10px] pt-6 lg:h-[217px] lg:w-[356px]"
            />
          </div>
        ),
      },
      {
        title: "lorem ipsum",
        content: (
          <div className="flex flex-col items-center justify-center">
            <Text className="lg:px-30 px-2 text-justify lg:text-[15px]">
              Data quality and consistency can be crucial to a company's daily
              routine. Recognizing this, our experienced teams streamline the
              flow of data with customers' offices and departments, transforming
              fragmented information.
            </Text>
            <ImageContainer
              imgSrc="../assets/NearshorePageAssets/ournearshore.svg"
              alt="abou Us"
              width={356}
              height={217}
              className="flex rounded-[10px] pt-6 lg:h-[217px] lg:w-[356px]"
            />
          </div>
        ),
      },
      {
        title: "lorem ipsum",
        content: (
          <div className="flex flex-col items-center justify-center">
            <Text className="lg:px-30 px-2 text-justify lg:text-[15px]">
              Data quality and consistency can be crucial to a company's daily
              routine. Recognizing this, our experienced teams streamline the
              flow of data with customers' offices and departments, transforming
              fragmented information.
            </Text>
            <ImageContainer
              imgSrc="../assets/NearshorePageAssets/ournearshore.svg"
              alt="abou Us"
              width={356}
              height={217}
              className="flex rounded-[10px] pt-6 lg:h-[217px] lg:w-[356px]"
            />
          </div>
        ),
      },
    ],
  },
};
