interface AccordionData {
  title: string;
  content: React.ReactNode;
}

export interface VerticalAccordionProps {
  data: AccordionData[];
}

export interface HorizentalAccordionProps {
  data: AccordionData[];
}
