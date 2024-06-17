"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function SimpleSwiper({ images }: Props) {
  return (
    <Swiper className="mySwiper" modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <SimpleSlide src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

interface SimpleSlideProps {
  src: string;
  alt: string;
}
function SimpleSlide({ alt, src }: SimpleSlideProps) {
  return (
    <div className="w-32 h-32 bg-black">
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
