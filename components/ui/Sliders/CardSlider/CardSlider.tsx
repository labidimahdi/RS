"use client";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

// components
import { Title } from "../../Texts/Title/Title";
import { Text } from "../../Texts/Text/Text";
import { Card } from "../../Cards/Card/Card";
import { ArrowUpIcon } from "../../icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../../app/[locale]/globals.css";

// Shared
import { ScreenSize, CardSlidersProps } from "shared";

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

const CardSlider: React.FC<CardSlidersProps> = ({ title, text, data }) => {
  const screenSize = useScreenSize();
  const slidesPerView: number = screenSize.width > 700 ? 3 : 1;

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-x-10">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="gap- flex flex-col items-center ">
          {title && <Title className="py-4 text-[20px]">{title}</Title>}
          {text && <Text size="large">{text}</Text>}
        </div>
      </div>
      <div className="my-4 flex h-full w-full flex-col">
        <div className="flex h-full w-full items-center justify-center ">
          {/** Previous page */}
          {slidesPerView !== 1 && (
            <div className="flex">
              <button onClick={handlePrevious} disabled={activeIndex < 1}>
                <ArrowUpIcon
                  width={24}
                  height={24}
                  fillColor={`${activeIndex <= 0 ? "fill-black-color-400" : "fill-primary-color-500"} -rotate-90`}
                  className="ml-2"
                />
              </button>
            </div>
          )}
          <Swiper
            onSwiper={setSwiperRef}
            modules={[A11y, Pagination]}
            spaceBetween={slidesPerView === 1 ? 10 : 30}
            centeredSlides={slidesPerView === 1 ? true : false}
            slidesPerView={slidesPerView}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(data) => {
              setActiveIndex(data.activeIndex);
            }}
            className="flex h-full min-h-[300px] w-full items-center justify-center px-[60px] lg:min-h-[360px] lg:px-4"
          >
            {data.map((card, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  icon={<>{card.icon}</>}
                  title={card.title}
                  text={card.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/** Next page */}
          {slidesPerView !== 1 && (
            <div className="flex">
              <button onClick={handleNext}>
                <ArrowUpIcon
                  width={24}
                  height={24}
                  fillColor={`${activeIndex + 2 >= data.length - 1 ? "fill-black-color-400" : "fill-primary-color-500"} rotate-90`}
                  className="mr-2"
                />
              </button>
            </div>
          )}
        </div>
        <div
          className="swiper-custom-pagination flex h-full w-full items-center justify-center space-x-4 lg:pt-4"
          slot="pagination"
        ></div>
      </div>
    </div>
  );
};

export { CardSlider };
