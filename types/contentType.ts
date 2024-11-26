import { ReactNode, SVGProps } from "react";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
import { StaticImageData } from "next/image";

type degreeType= "Basic" | "Intermediate" | "Advanced" | "Expert"

export interface IContent{
    thumbnail?:StaticImageData | null,
    title:string,
    desc:string,
    degree:degreeType
    url:string
}
