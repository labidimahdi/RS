import { twMerge } from "tailwind-merge";

// Components
import { Title } from "../../Texts/Title/Title";
import { Text } from "../../Texts/Text/Text";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import { MapMarkerIcon, CheckIcon, ArrowUpIcon } from "components/ui/icons";

// Shared
import { ButtonEnum, OfferProps } from "shared";
import { Link } from "navigation";

const OfferCard: React.FC<OfferProps> = ({
  OfferLink,
  title,
  address,
  reference,
  publishedOn,
  details,
}) => {
  return (
    <div
      className={twMerge(
        ` group mt-4 flex h-fit flex-col items-start justify-start rounded-[30px] bg-white px-4 pb-4 pt-6 shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)] hover:bg-purple-gray-500 lg:min-h-full lg:w-[348px]  lg:min-w-[300px] lg:pl-6`,
      )}
    >
      <div className="flex flex-col items-start justify-start">
        {/* address */}
        <div className="flex h-full w-full items-start justify-start">
          <MapMarkerIcon width={17} height={18} />
          <Text className="max-w-[222px] pl-2" size="small">
            {address}
          </Text>
        </div>
        {/* title */}
        <div className="group relative mt-4">
          <Title className="max-w-[300px] text-left text-[13px] lg:text-[13px]">
            {title}
          </Title>
          <div className="h-1 w-[105px] bg-primary-color-500/50">
            <span className=" absolute bottom-0 left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[105px]"></span>
          </div>
        </div>
        {/* details */}
        <div className="group my-4 flex h-full w-full max-w-[300px] flex-col items-start justify-start rounded-[10px] bg-black-color-200/50 py-2 group-hover:bg-white-color">
          {details.map((d, index) => (
            <div
              key={index}
              className="flex h-full w-full max-w-[284px] items-center justify-start pl-2"
            >
              <CheckIcon
                width={8}
                height={8}
                fillColor="fill-primary-color-500"
              />
              <Text
                className="max-w-[238px] pl-2 text-[13px] lg:text-[13px]"
                size="small"
              >
                {d}
              </Text>
            </div>
          ))}
        </div>
        {/* apply button */}
        <Link href={{
        pathname: '/career/[slug]',
        params:{slug: OfferLink.params},
      }}>
        <PrimaryButton
          type={ButtonEnum.SMALL}
          icon={
            <ArrowUpIcon
              width={15}
              height={15}
              fillColor="fill-white-color"
              className="group-hover:fill rotate-90 lg:h-[11px] lg:w-[11px]"
            />
          }
          text="APPLY FOR THE JOB"
          rounded="rounded-full"
          className="maw-w-[170px] mb-4 mt-1 text-[11px]"
          iconIsRight={true}
        />
        </ Link>
      </div>
      <div className="flex h-full w-full items-center justify-between  px-2 pt-4">
        <Text className="" size="xsmall">
          Reference: {reference}.
        </Text>
        <Text className="" size="xsmall">
          Published on : {publishedOn}
        </Text>
      </div>
    </div>
  );
};

export { OfferCard };
