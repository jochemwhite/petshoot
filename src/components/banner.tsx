import { ImageType } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  img: ImageType;
  page: string
  breadcrumb: string
}

export default function Banner({ img, page, breadcrumb }: BannerProps) {
  return (
    <div className="w-full mt-9 bg-success h-80 relative flex flex-col justify-center items-center ">
      <Image
        src={img.src}
        layout="fill"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt={img.alt}
      />
      <div className="flex flex-col z-10 justify-center items-center">
        <p>
          <Link href="/">Homepage</Link> / {breadcrumb}
        </p>
        <h2 className="z-10 text-5xl text-secondary">{page}</h2>
      </div>
    </div>
  );
}
