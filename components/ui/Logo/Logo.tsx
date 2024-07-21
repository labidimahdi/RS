import Image from "next/image";
import Link from "next/link";

// Shared
import { logoData, LogoProps } from "shared";

const Logo: React.FC<LogoProps> = ({ width, height, light }) => {
  return (
    <Link href="/">
      {light ? (
        <Image
          src={`${logoData.light_url}`}
          alt="logo"
          width={width}
          height={height}
          className="lg:flex lg:h-14 lg:w-64"
        />
      ) : (
        <Image
          src={`${logoData.dark_url}`}
          alt="logo"
          width={width}
          height={height}
          className="lg:flex lg:h-14 lg:w-64"
        />
      )}
    </Link>
  );
};

export default Logo;
