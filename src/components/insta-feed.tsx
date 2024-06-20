import type { ImageType } from "@/types";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstaFeed({ imgs }: { imgs: ImageType[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 relative">
      {imgs.slice(0, 4).map((img, idx) => (
        <Pigture key={idx} src={img.src} alt={img.alt} />
      ))}

      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center cursor-pointer">
        <div className="bg-content-bg p-8 rounded-xl flex justify-center flex-col items-center w-1/1">
          <FaInstagram size={50} />

          <h2 className="text-3xl text-secondary-text my-4 hover:text-success">@petshoot</h2>

          <p>Follow us on Instagram</p>
        </div>
      </div>
    </div>
  );
}

function Pigture({ src, alt }: ImageType) {
  return (
    <div className="h-[150px] bg-white relative w-full">
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}
