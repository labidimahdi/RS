

// shared
import { IconProps } from "shared";

const SoftwareDevelopmentIcon: React.FC<IconProps> = ({
  width,
  height,
  className,
  fillColor,
  strokeColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      className={`${fillColor} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.86667 26.0737V7.33335C5.86667 6.36089 6.25298 5.42826 6.94061 4.74063C7.62824 4.053 8.56087 3.66669 9.53333 3.66669H34.4667C35.4391 3.66669 36.3718 4.053 37.0594 4.74063C37.747 5.42826 38.1333 6.36089 38.1333 7.33335V26.0737M5.86667 26.0737H38.1333M5.86667 26.0737L3.15333 35.6694C2.99923 36.2146 2.97356 36.7881 3.07835 37.3448C3.18314 37.9016 3.41552 38.4266 3.75728 38.8784C4.09903 39.3303 4.54085 39.6969 5.04807 39.9493C5.55529 40.2017 6.11411 40.3332 6.68067 40.3334H37.3193C37.8859 40.3332 38.4447 40.2017 38.9519 39.9493C39.4592 39.6969 39.901 39.3303 40.2427 38.8784C40.5845 38.4266 40.8169 37.9016 40.9217 37.3448C41.0264 36.7881 41.0008 36.2146 40.8467 35.6694L38.1333 26.0737"
        stroke={`${strokeColor ? `${strokeColor}` : "#1D1D1B"}`}
        strokeWidth="1.5"
      />
      <path
        d="M20.1667 34.8333H23.8333M25.6667 11L29.3333 14.6667L25.6667 18.3333M18.3333 11L14.6667 14.6667L18.3333 18.3333"
        stroke={`${strokeColor ? `${strokeColor}` : "#1D1D1B"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export { SoftwareDevelopmentIcon };
