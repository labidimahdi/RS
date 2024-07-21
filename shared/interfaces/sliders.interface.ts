import React from "react";
import { DataSectionProps } from ".";

export interface CarouselSlidersProps {
  title?: string;
  text?: string;
  data: OneCarouselSlidersProps[];
}
export interface OneCarouselSlidersProps {
  image: string;
  name: string;
  width: number;
  height: number;
}

export interface CardSlidersProps {
  icon?:string;
  title?: string;
  text?: string;
  data: OneCardSlidersProps[];
}

export interface OneCardSlidersProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

export interface ServiceSectionProps extends DataSectionProps {
  bgImage?: string;
}
export interface AboutServiceSectionProps extends DataSectionProps {
}
export interface SupportSectionProps {
  bgImage?: string;
}