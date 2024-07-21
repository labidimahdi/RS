export interface AboutUsSectionProps {}
export interface RsSectionProps {}
export interface ServicesDetailsProps {
  servicesId: string;
}
export interface NearshoreSectionpageProps {}
export interface HomePageData {
  services: OneServiceProps[];
}

export interface OneTrustData {
  name: string;
  image: string;
  width: number;
  height: number;
}

export interface ClientsData {
  title: string;
  text: string;
  data: OneTrustData[];
}

export interface OneServiceProps {
  icon: JSX.Element;
  title: string;
  text: string;
}
export interface DataSectionProps {
  data: HomePageData;
}

export interface ClientSectionProps {
  data: OneTrustData[];
}

export interface ScreenSize {
  width: number;
  height: number;
}

export interface ChildrenInterface {
  children: React.ReactNode;
  clasName?: string;
}

export interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
