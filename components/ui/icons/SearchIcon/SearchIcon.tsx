import { twMerge } from "tailwind-merge";

// shared
import { IconProps } from "shared";

const SearchIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      className={twMerge(`${fillColor} ${className}`)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 18C12.525 17.9998 14.2489 17.4056 15.647 16.312L20.043 20.708L21.457 19.294L17.061 14.898C18.1551 13.4997 18.7497 11.7755 18.75 10C18.75 5.589 15.161 2 10.75 2C6.339 2 2.75 5.589 2.75 10C2.75 14.411 6.339 18 10.75 18ZM10.75 4C14.059 4 16.75 6.691 16.75 10C16.75 13.309 14.059 16 10.75 16C7.441 16 4.75 13.309 4.75 10C4.75 6.691 7.441 4 10.75 4Z"
        fill={fillColor}
      />
      <path
        d="M12.162 8.58596C12.541 8.96596 12.75 9.46796 12.75 9.99996H14.75C14.7507 9.47442 14.6473 8.95393 14.4458 8.46854C14.2443 7.98316 13.9487 7.54249 13.576 7.17196C12.062 5.65996 9.43695 5.65996 7.92395 7.17196L9.33595 8.58796C10.096 7.82996 11.406 7.83196 12.162 8.58596Z"
        fill={fillColor}
      />
    </svg>
  );
};
export { SearchIcon };
