import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Camera, Heart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh]">
      <div className="absolute inset-0">
        <Image src="/img/dogs/dog1.jpg" alt="Hero pet" className="w-full h-full object-cover" fill priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 pt-24 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          Capturing Your Pet&apos;s
          <br />
          <span className="text-primary-foreground">Perfect Moments</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl">
          Professional pet photography that celebrates the unique personality and charm of your furry family members
        </p>
        <div className="flex gap-6 flex-col md:flex-row">
          <Link href="/portfolio">
            <Button size="lg" variant="default" className="text-xl px-8 py-6 h-auto">
              <Camera className="mr-3 h-6 w-6" />
              View Portfolio
            </Button>
          </Link>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="text-xl px-8 py-6 h-auto">
              <Heart className="mr-3 h-6 w-6" />
              Book a Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
