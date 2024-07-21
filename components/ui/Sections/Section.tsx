import { twMerge } from "tailwind-merge";

// Components
import { Title } from "../Texts/Title/Title";

// Shared
import { SectionProps } from "shared";

const Section: React.FC<SectionProps> = ({
  children,
  title = null,
  className,
  bgImage,
}) => {
  return (
    <section
      className={twMerge(
        `h-fit w-full ${bgImage && `bg-clip-padding bg-no-repeat lg:bg-cover ${bgImage}`} ${className}`,
      )}
    >
      {title && (
        <Title className="ml-10 pb-10 text-left lg:ml-20 lg:pb-0">
          {title}
        </Title>
      )}
      {children}
    </section>
  );
};

export { Section };
