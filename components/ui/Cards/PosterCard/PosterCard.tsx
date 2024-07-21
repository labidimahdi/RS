import React from "react";


// components
import { OutlinedButton } from "../../Buttons/OutlinedButton/OutlinedButton";
import { ArrowUpIcon } from "components/ui/icons";
import { Text } from "../../Texts/Text/Text";
import { CalendarIcon, ProfileIcon, DocIcon } from "components/ui/icons";
import { SubTitle } from "components/ui/Texts/SubTitle/SubTitle";
import { CoverContainer } from "components/ui/CoverContainer/CoverContainer";
// shared
import { PostCardProps } from "shared";
// navigation
import { Link } from "navigation";

const PosterCard: React.FC<PostCardProps> = ({ data, hovered = false }) => {
  const ArrowForButton = (
    <ArrowUpIcon
      width={8}
      height={6}
      fillColor="fill-black-color-900 group-hover:fill-white-color group-focus:fill-primary-color-900"
      className="rotate-90  lg:h-[11px] lg:w-[11px]"
    />
  );

  return (
    <div className="hover:shadow-pink w-[300px] max-w-screen-sm flex-col rounded-bl-[20px] rounded-br-[20px] pb-5 shadow-md lg:flex lg:w-full">
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
      {data.content.length > 200 ? (
        <Text className="pl-5 pr-5 pt-3 text-justify text-[10px] font-normal lg:text-[15px]">
          {`${data.content.slice(0, 200)} `}
          <span className=" text-[15px] leading-none">
            <b>...</b>
          </span>
        </Text>
      ) : (
        <Text className="pl-5 pr-5 pt-3 text-justify text-[8px] font-normal lg:text-[15px]">
          {data.content}
        </Text>
      )}
      <div className="flex items-baseline justify-between pl-5 pr-5 pt-5 align-baseline lg:flex lg:flex-row lg:items-end">
        <Link href={{
        pathname: '/blog/[slug]',
        params:{slug: data.id},
      }}>
          <OutlinedButton
            rounded="rounded-full"
            iconIsRight={true}
            className=" h-[20px] w-[100px]  text-[8px]  uppercase  lg:h-[34px] lg:w-[150px] lg:p-1 lg:text-[10px]"
            text="discover how"
            icon={ArrowForButton}
          />
        </Link>
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

export default PosterCard;
