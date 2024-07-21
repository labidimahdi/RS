
// shared
import { IconProps } from "shared";

const FlechIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={`${fillColor} ${className}`}
    >
      <g id="Caret Down">
        <path
          id="Vector"
          d="M10.6693 5.27344H2.33104C2.08094 5.27344 1.9413 5.63906 2.09618 5.88867L6.26532 12.5824C6.38465 12.774 6.61444 12.774 6.73504 12.5824L10.9042 5.88867C11.0591 5.63906 10.9194 5.27344 10.6693 5.27344Z"
        />
      </g>
    </svg>
  );
};
export { FlechIcon };
