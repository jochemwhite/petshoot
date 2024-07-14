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
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function SimpleSwiper({ images }: Props) {
  const [slideCount, setSlideCount] = useState(1);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 640) {
      setSlideCount(1);
    } else if (width < 768) {
      setSlideCount(2);
    } else {
      setSlideCount(4);
    }
  }, [width]);

  return (
    <Swiper
      className="mySwiper"
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={slideCount}
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
