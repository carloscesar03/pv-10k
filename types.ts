import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BonusItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  content: string;
  result: string;
}