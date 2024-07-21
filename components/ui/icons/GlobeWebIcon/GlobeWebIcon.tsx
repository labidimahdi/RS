// components
import { ImageContainer } from "components/ui/ImageContainer/ImageContainer";
// shared
import { IconProps } from "shared";

const GlobeWebIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <ImageContainer
    imgSrc="/assets/Icons/GlobalWebIcon.svg" 
    alt="WebIcon"
    width={width}
    height={height}
    className={`mb-4 lg:w-[46px] lg:h-[44px] ${fillColor} ${className}`}/>


  );
};
export { GlobeWebIcon };
