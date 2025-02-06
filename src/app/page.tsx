"use client";

import CallToAction from "@/components/sections/cta";
import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

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
