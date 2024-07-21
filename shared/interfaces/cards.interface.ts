export interface CardContainerProps {
  imageSrc: string;
  reverse?: boolean;
  shadow?: boolean;
  children: React.ReactNode;
  className?: string;
}
export interface CoverContainerProps {
  tab: string[];
  coversType: string;
  hovered: boolean;
  className?: string;
  id: string;

}
export interface CallToActionProps {
  buttonText: string;
  buttonPath: string;
  children: React.ReactNode;
  bgImage: string;
  className?: string;
}
export interface CardProps {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  beforeText?: boolean;
  key?: number;
  className?: string;
}
export interface HoverCardProps {
  extraLink:{
    pathname:string;
    params?: string;
  };
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  beforeText?: boolean;
  key?: number;
  className?: string;
}
export interface SummaryInterface {
  title: string;
  details: string;
}
export interface CardPlanProps {
  imageSrc: string;
  summary: SummaryInterface[];
}

export interface PlanDescriptionProps {
  index: number;
  title: string;
  details: string;
}

export interface OfferProps {
  OfferLink:{
    pathname:string;
    params: number;
  };
  title: string;
  address: string;
  reference: string;
  publishedOn: string;
  details: string[];
}

export interface OneTag {
  id: string;
  name: string;
}

export interface Card {
  id: string;
  title: string;
  text?: string;
  content: string;
  image: string[];
  link?: string;
  tags: OneTag[];
  createdAt: string;
  author_fullname: string;
  covers: string[];
  covers_type: string;
}


export interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

export interface PostCardProps {
  data: Card;
  hovered?: boolean;
}

export interface PosterCardSectionProps {
  posts: Card[];
}
export interface PosterDetailsSectionProps {
  post: any;
}
export interface OneCareerDetailsProps{
  offer:any;
}