"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera, Clock, CheckCircle2, Calendar, Package, ImagePlus, Download, Users, LucideIcon } from "lucide-react";
import CallToAction from "@/components/sections/cta";

// Types
interface Service {
  title: string;
  description: string;
  price: string;
  duration: string;
  coverImage: string;
  features: string[];
  includes: ServiceInclude[];
  gallery: string[];
  longDescription: string;
  descriptionImage: string;
}

interface ServiceInclude {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Moved services data to a separate constant
const SERVICES: Record<string, Service> = {
  "thuis-shoot": {
    title: "Thuis shoots",
    description: "Professional pet photography in your own home",
    longDescription: `Make your pet's special occasions truly memorable with our dedicated event photography service. Whether it's a birthday celebration, adoption anniversary, or any other milestone, we're here to document every tail wag and happy moment.

Our special events coverage goes beyond just taking pictures – we help create an atmosphere that's both photo-worthy and enjoyable for all pets involved. We understand the unique challenges of photographing multiple pets and can handle group dynamics with ease.

We work closely with you to plan the perfect setup, including themed decorations and props that match your vision. Our experience in event photography means we know exactly how to capture both the big moments and the small, candid interactions that make these celebrations special.

From intimate gatherings to large pet parties, we ensure every special moment is preserved in beautiful detail. We can also provide same-day previews of selected shots so you can share the joy immediately with friends and family.`,
    descriptionImage: "/img/cats/cat13.jpg",
    price: "from $299",
    duration: "1-2 hours",
    coverImage: "/img/cats/cat11.jpg",
    features: [
      "Professional lighting setup",
      "Multiple backdrop options",
      "Props and accessories available",
      "Climate-controlled environment",
      "Comfortable waiting area",
      "Same-day preview of selected shots",
    ],
    includes: [
      {
        icon: Camera,
        title: "Photo Session",
        description: "1-hour professional photography session",
      },
      {
        icon: ImagePlus,
        title: "Edited Photos",
        description: "10 professionally edited digital photos",
      },
      {
        icon: Download,
        title: "Digital Gallery",
        description: "Online gallery with downloadable images",
      },
      {
        icon: Users,
        title: "Multiple Pets",
        description: "Up to 2 pets per session",
      },
    ],
    gallery: ["/img/cats/cat13.jpg", "/img/cats/cat11.jpg", "/img/cats/cat14.jpg"],
  },
  "buiten-shoot": {
    title: "Buiten Shoots",
    description: "Professional pet photography in our the out door",
    longDescription: `Make your pet's special occasions truly memorable with our dedicated event photography service. Whether it's a birthday celebration, adoption anniversary, or any other milestone, we're here to document every tail wag and happy moment.

    Our special events coverage goes beyond just taking pictures – we help create an atmosphere that's both photo-worthy and enjoyable for all pets involved. We understand the unique challenges of photographing multiple pets and can handle group dynamics with ease.
    
    We work closely with you to plan the perfect setup, including themed decorations and props that match your vision. Our experience in event photography means we know exactly how to capture both the big moments and the small, candid interactions that make these celebrations special.
    
    From intimate gatherings to large pet parties, we ensure every special moment is preserved in beautiful detail. We can also provide same-day previews of selected shots so you can share the joy immediately with friends and family.`,
    descriptionImage: "/img/dogs/dog8.jpg",
    price: "from $299",
    duration: "1-2 hours",
    coverImage: "/img/dogs/dog4.jpg",
    features: [
      "Professional lighting setup",
      "Multiple backdrop options",
      "Props and accessories available",
      "Climate-controlled environment",
      "Comfortable waiting area",
      "Same-day preview of selected shots",
    ],
    includes: [
      {
        icon: Camera,
        title: "Photo Session",
        description: "1-hour professional photography session",
      },
      {
        icon: ImagePlus,
        title: "Edited Photos",
        description: "10 professionally edited digital photos",
      },
      {
        icon: Download,
        title: "Digital Gallery",
        description: "Online gallery with downloadable images",
      },
      {
        icon: Users,
        title: "Multiple Pets",
        description: "Up to 2 pets per session",
      },
    ],
    gallery: ["/img/cats/cat5.jpg", "/img/dogs/dog2.jpg", "/img/horses/horse1.jpeg"],
  },
};

// Sub-components
const HeroSection = ({ service }: { service: Service }) => (
  <section className="relative mb-16 h-[50vh]">
    <Image src={service.coverImage} alt={service.title} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative h-full flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{service.title}</h1>
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
  const service = SERVICES[slug];

  if (!service) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
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
    <div className="min-h-screen pt-24 pb-16">
      <HeroSection service={service} />

      <div className="container mx-auto px-6">
        {/* Quick Info */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={Package} title="Package Price" value={service.price} />
            <InfoCard icon={Clock} title="Session Duration" value={service.duration} />
            <InfoCard icon={Calendar} title="Availability" value="Book Now" />
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={service.descriptionImage}
                alt={service.title}
                width={500}
                height={500}
                className="hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg relative"
              />
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">About This Service</h2>
            <div className="prose prose-lg max-w-none">
              {service.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.includes.map((item, index) => (
              <ServiceIncludeItem key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <FeatureItem key={`${feature}-${index}`} feature={feature} />
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((image, index) => (
              <GalleryImage key={image} src={image} alt={`${service.title} example ${index + 1}`} />
            ))}
          </div>
        </section>

        {/* CTA */}
      </div>
      <CallToAction />
    </div>
  );
}
