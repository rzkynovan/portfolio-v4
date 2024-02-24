import Image from "next/image";
import { ExtractProps } from "./helper";

export type workprops = {
  hero: ExtractProps<typeof Image>;
  site: string;
  siteurl: string;
  place: string;
  country: string;
  timestart: string;
  timeend: string;
  logo: ExtractProps<typeof Image>;
  tagline: string;
  techstack: string[];
  description: string;
  isReverse: boolean;
};
