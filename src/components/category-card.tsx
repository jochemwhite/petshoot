import React from "react";
import Image from "next/image";

interface Props {
  img: string;
  alt: string;
  catagory: string;
  href: string;
}

export default function CategoryCard({ img, alt, catagory, href }: Props) {
  return (
    <div className="w-full relative ">
      <div className="relative w-full h-[500px]">
        <Image src={img} alt={alt} fill />
      </div>

      <div className="absolute bottom-5 -ml-4 ">
        <button className="bg-success text-white px-4 py-2 w-60 shadow-2xl ">
          {catagory}
        </button>

      </div>
    </div>
  );
}
