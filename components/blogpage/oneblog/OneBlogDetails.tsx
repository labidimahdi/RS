
import React from "react";
import DOMPurify from 'dompurify';
// components
import { CalendarIcon, ProfileIcon, DocIcon } from "components/ui/icons";
import { SubTitle } from "components/ui/Texts/SubTitle/SubTitle";
import { CoverContainer } from "components/ui/CoverContainer/CoverContainer";
import { Text } from "components/ui/Texts/Text/Text";
// shared
import { PostCardProps } from "shared";

const OneBlogDetails: React.FC<PostCardProps> = ({ data, hovered = false }) => {
  const sanitizedContent = DOMPurify.sanitize(data.content);
  return (
    <div className="hover:shadow-pink w-[300px] flex-col rounded-b-[20px] pb-5 mx-auto lg:mx-20 shadow-md lg:flex lg:w-full">
      <CoverContainer
        tab={data.covers}
        coversType={data.covers_type}
        hovered={hovered}
        id={data.id}
      />
      <div className="flex justify-between px-5">
        <div className="flex items-center justify-center gap-x-1 pb-5 pt-3">
          <CalendarIcon
            width={13}
            height={12}
            className="lg:h-[17px] lg:w-[19px]"
            fillColor="#E20080"
          />
          <Text className="text-[7px] lg:text-[13px]">{data.createdAt}</Text>
        </div>
        <div className="flex items-center justify-center gap-x-1 pb-5 pr-16 pt-3 lg:pr-72">
          <ProfileIcon
            width={10}
            height={9}
            className="mb-1 lg:h-[15px] lg:w-[17px]"
            fillColor="#E20080"
          />
          <Text className="text-[7px] lg:text-[13px]">
            {data.author_fullname}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-x-3 pb-5 pt-3">
          <DocIcon
            width={11}
            height={10}
            className="mb-1 lg:h-[17px] lg:w-[19px]"
            fillColor="#E20080"
          />
        </div>
      </div>
      <SubTitle className="pl-5 pr-5 text-[11px] leading-[16px] lg:text-[15px]">
        {data.title}
      </SubTitle>
        <div className="pl-5 pr-5 pt-3 text-justify text-[8px] font-normal lg:text-[15px]"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}        
        />
  

      <div className="flex items-baseline justify-end pl-5 pr-5 pt-5 align-baseline lg:flex lg:flex-row lg:items-end">
        <div className="flex max-w-screen-sm flex-col items-end gap-2 lg:flex-row lg:gap-2">
          {data.tags?.slice(0, 3).map((tag) => (
            <div
              className={`flex h-[14px] w-fit items-center justify-center rounded-[24px] border-2 border-solid border-black p-2 text-center lg:h-[23px] lg:w-fit  `}
              key={tag.id}
            >
              <Text className="text-[7px] font-bold lg:text-[10px]">
                {tag.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneBlogDetails;
