import React from "react";

// Components
import { SubTitle } from "../../Texts/SubTitle/SubTitle";
import { Text } from "../../Texts/Text/Text";
import { DotIcon } from "components/ui/icons";

// Shared
import { PlanDescriptionProps } from "shared";

const PlanDescription: React.FC<PlanDescriptionProps> = ({
  index,
  title,
  details,
}) => {
  return (
    <div className="group flex gap-5 md:items-center md:justify-center">
      <div className=" relative top-5 mr-[25px] hidden items-center justify-center lg:block">
        <DotIcon
          width={25}
          height={25}
          fillColor="group-hover:fill-primary-color-500 fill-purple-gray-500"
        />
      </div>
      <div className="flex h-10 w-5 items-center justify-center rounded-full bg-fourth-color-900 p-2 font-[400] text-white-color group-hover:bg-primary-color-500 md:relative">
        {index + 1}
      </div>
      <div className="flex flex-col ">
        <SubTitle>{title}</SubTitle>
        <Text className="text-justify font-[400]">{details}</Text>
      </div>
    </div>
  );
};

export { PlanDescription };
