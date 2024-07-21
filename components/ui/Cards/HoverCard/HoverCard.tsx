import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
// Components
import { Title } from "../../Texts/Title/Title";
import { Text } from "../../Texts/Text/Text";
import { OutlinedButton } from "components/ui/Buttons/OutlinedButton/OutlinedButton";
import { ArrowUpIcon } from "components/ui/icons";

// Shared
import { HoverCardProps} from "shared";
// navigation
import { Link } from "navigation";


const HoverCard: React.FC<HoverCardProps> = ({
  extraLink,
  icon,
  title,
  text,
  children,
  beforeText = false,
  className,
}) => {
  const t = useTranslations("AboutUsSection");
  return (
    <div
      className={twMerge(
        `mt-4 flex h-full w-full flex-col items-start justify-center rounded-[30px] bg-purple-gray-500 lg:px-8 px-4 py-6 shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)]  lg:min-h-[300px] lg:w-[348px] lg:min-w-[300px] ${className}`,
      )}
    >
      {/** icon */}
      <>{icon}</>
      {/** title */}
      {title && (
        <div className="flex flex-col items-start justify-start">
          <div className="group relative mt-4">
            <Title className="text-left text-[13px] lg:text-[16px]">{title}</Title>
            <div className="h-1 w-[166px] bg-primary-color-500/50 ">
              <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-full"></span>
            </div>
          </div>
        </div>
      )}
      {/** children before text */}
      {children && beforeText && children}
      {/** title */}
      {text && (
        <Text size="meduim" className="my-4 text-justify text-[13px] lg:text-[16px]">
          {text}
        </Text>
      )}
      {/** children after text */}
      {children && !beforeText && children}
      <div>
      <Link href={{
        pathname: "/services/[slug]",
        params:{slug: `${extraLink.params}`},
      }}>
      <OutlinedButton
      icon={
        <ArrowUpIcon
          width={15}
          height={15}
          fillColor="fill-black-color-900 group-hover/button:fill-white-color group-focus/icon:fill-primary-color-900"
          className="rotate-90 lg:w-[20px] lg:h-[20px]"
        />
      }
      iconIsRight={true} 
      text={t("discover")} 
      rounded="rounded-full" 
      className="group/button group/icon px-5 bg-purple-gray-500 text-[13px] lg:text-[16px]"/> 
      </Link> 
      </div>
    </div>
  );
};

export { HoverCard };
