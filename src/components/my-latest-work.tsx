"use client";
import { useEffect, useState } from "react";
// import Swiper core and required modules
import Image from "next/image";
import { Autoplay, Controller, Scrollbar } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function MyLatestWork({ images }: Props) {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 640) {
      setSlidesPerView(1);
    } else if (width < 768) {
      setSlidesPerView(2);
    } else if (width < 1024) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [width]);

  const goNext = () => {
    if (controlledSwiper) controlledSwiper.slideNext();
  };

  const goPrev = () => {
    if (controlledSwiper) controlledSwiper.slidePrev();
  };

  return (
    <div className="container grid grid-cols-1 h-full items-center justify-center lg:grid-cols-3  w-full ">
      <div className="mb-8">
        <h2 className="text-primary-text text-4xl">My Latest Works</h2>
        <p className="text-subtext">We are making photographs to understand what our lives mean to us</p>

        <div className="text-primary-text mt-4  *:border *:p-2">
          <button onClick={goPrev}>
            <FaArrowLeft />
          </button>
          <button className="ml-2" onClick={goNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <Swiper
          modules={[Controller, Scrollbar, Autoplay]}
          onSwiper={(swiper) => setControlledSwiper(swiper)}
          slidesPerView={slidesPerView}
          spaceBetween={25}
          controller={{ control: controlledSwiper }}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <SimpleSlide src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

interface SimpleSlideProps {
  src: string;
  alt: string;
}

function SimpleSlide({ alt, src }: SimpleSlideProps) {
  return (
    <div className="w-full h-80 bg-black relative">
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
