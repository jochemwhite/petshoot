"use client";

import CallToAction from "@/components/sections/cta";
import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Calendar, Star, Clock, Medal, ArrowRight, FeatherIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
