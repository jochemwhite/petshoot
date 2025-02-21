"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera, Clock, CheckCircle2, Calendar, Package, ImagePlus, Download, Users, LucideIcon } from "lucide-react";
import CallToAction from "@/components/sections/cta";
import { packages } from "@/lib/const";
import { ServiceInclude, Package as TPackage } from "@/types";

// Sub-components
const HeroSection = ({ service }: { service: TPackage }) => (
  <section className="relative mb-16  h-[65vh]">
    <Image src={service.banner ? service.banner.href : service.about_img.href} alt={service.about_img.alt} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative h-full flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{service.name}</h1>
        <p className="text-xl text-white/90">{service.description}</p>
      </div>
    </div>
  </section>
);

const InfoCard = ({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-lg text-center">
    <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary">{value}</p>
  </div>
);

const ServiceIncludeItem = ({ item }: { item: ServiceInclude }) => {
  const Icon = item.icon;
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-muted-foreground">{item.description}</p>
    </div>
  );
};

const FeatureItem = ({ feature }: { feature: string }) => (
  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-lg">
    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
    <span>{feature}</span>
  </div>
);

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-square rounded-lg overflow-hidden shadow-lg relative">
    <Image src={src} alt={alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
  </div>
);

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getPackageById(slug);

  function getPackageById(href: string) {
    return packages.find((packageItem) => packageItem.href === href);
  }

  if (!service) {
    return (
      <div className="min-h-screen  pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-16">
      <HeroSection service={service} />

      <div className="container mx-auto px-6">
        {/* Quick Info */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={service.icon} title="Pakketprijs" value={`€${service.price}`} />
            <InfoCard icon={Clock} title="Sessieduur" value={"1 uur"} />
            <InfoCard icon={Calendar} title="Beschikbaarheid" value="Boek nu" />
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={service.about_img.href}
                alt={service.about_img.alt}
                width={500}
                height={500}
                className="hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg relative"
              />
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Over deze service</h2>
            <div className="prose prose-lg max-w-none">
              {service.about.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is inbegrepen </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.includes.map((item, index) => (
              <ServiceIncludeItem key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Servicefuncties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <FeatureItem key={`${feature}-${index}`} feature={feature} />
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Galerij</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((image, index) => (
              <GalleryImage key={index} src={image.href} alt={image.alt} />
            ))}
          </div>
        </section>

        {/* CTA */}
      </div>
      <CallToAction />
    </div>
  );
}
