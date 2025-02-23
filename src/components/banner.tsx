import { img, Package } from "@/types";
import Image from "next/image";

interface Props {
  img: img;
  title: string;
  description: string;
}

export const Banner = ({ description, img, title }: Props) => (
  <section className="relative mb-16  h-[65vh]">
    <Image src={img.href} alt={img.alt} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative h-full flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/90">{description}</p>
      </div>
    </div>
  </section>
);
