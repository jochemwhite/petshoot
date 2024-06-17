import React from "react";
import SimpleSwiper from "./swiper/simple-swiper";

interface Props {
  title: string;
  paragraph: string;

  images: {
    src: string;
    alt: string;
  }[];
}

export default function AboutCard({ title, paragraph, images}: Props) {
  return (
    <div className="flex justify-center flex-col ">
      <h3 className="text-3xl">Commercial & Editorial Assignment Photography</h3>

      <p className="my-10">
        I have performed professional corporate and editorial photography for many local & international clients. Corporate and editorial clients have
        trusted my photography and logistical skills to capture the best creative images of a situation or person – on-time and on-budget.
      </p>

      <div>
        <SimpleSwiper images={images} />
      </div>
    </div>
  );
}
