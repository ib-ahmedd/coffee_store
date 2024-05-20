import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavLinkProps {
  path: string;
  title: string;
  styles: string;
}

export interface MenuCardProps {
  picNo: string;
  price: number;
  title: string;
  desc?: string;
}

export interface ReviewCardProps {
  pic: string;
  user: string;
}

export interface ContactInfoCardProps {
  heading: string;
  info: string;
  linkText: string;
  widthStyles: string;
  icon: IconDefinition;
}
