import { ImageType } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  img: ImageType;
}

export default function Banner({ img }: BannerProps) {
  return (
    <div className="w-full mt-9 bg-success h-80 relative flex flex-col justify-center items-center ">
      <Image
        src="/img/dogs/dog1.jpg"
        layout="fill"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt=""
      />
      <div className="flex flex-col z-10 justify-center items-center">
        <p>
          <Link href="/">Homepage</Link> / about
        </p>
        <h2 className="z-10 text-5xl text-secondary">About Me</h2>
      </div>
    </div>
  );
}
