import type { LucideIcon } from "lucide-react";

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  about: string;
  about_img: img
  gallery: img[]
  includes: ServiceInclude[];
  banner?: img;
}

export interface img {
  href: string;
  alt: string;
}

export interface ServiceInclude {
  icon: LucideIcon;
  title: string;
  description: string;
}