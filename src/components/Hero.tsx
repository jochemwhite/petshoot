"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./Aceternity/images-slider";

interface Props {
  images: string[];
}

export function Hero({ images }: Props) {
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-primary-text text-xl md:text-6xl text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Petshoot.nl <br /> 
        </motion.p>
        <button className="px-4 py-2 text-secondary-text backdrop-blur-sm border bg-info-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>
            Hire Now
          </span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
