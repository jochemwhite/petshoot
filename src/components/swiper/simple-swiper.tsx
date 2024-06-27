"use client";
// import Swiper core and required modules
import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
    <Swiper
      className="mySwiper"
      modules={[Pagination, Scrollbar, A11y, Autoplay, ]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
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
    <div className="w-full h-80 bg-black">
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
