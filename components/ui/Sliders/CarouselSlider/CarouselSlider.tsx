"use client";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Shared
import { ScreenSize, CarouselSlidersProps } from "shared";

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      // Ensure window is defined before accessing its properties
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenSize;
};

const CarouselSlider: React.FC<CarouselSlidersProps> = ({ data }) => {
  const screenSize = useScreenSize();
  const slidesPerView: number = screenSize.width > 700 ? 5 : 4;
  return (
    <>
      <div className=" flex h-full w-full items-center justify-center bg-cover bg-center">
        <div className="flex max-w-full  flex-col items-center text-center">
          <Swiper
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="pt-10"
          >
            {data.map((Trust, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-[78px] w-[78px] justify-center rounded-[20px] bg-gray-color-200 bg-opacity-50 lg:h-[173px] lg:w-[165px]">
                  <Image
                    src={Trust.image}
                    alt={Trust.name}
                    width={Trust.width}
                    height={Trust.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export { CarouselSlider };
