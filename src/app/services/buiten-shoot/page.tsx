import { Banner } from "@/components/banner";
import { FeatureItem } from "@/components/feature-item";
import { GalleryImage } from "@/components/gallery-image";
import { InfoCard } from "@/components/info-card";
import CallToAction from "@/components/sections/cta";
import { ServiceIncludeItem } from "@/components/service-include-item";
import { Calendar, Camera, Clock, Download, ImagePlus, TreeDeciduous, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Buiten Shoot - Petshoot',
  description: 'Prachtige fotoshoot op een locatie naar keuze in de natuur. Leg de avontuurlijke momenten van je huisdier vast.', // Beschrijving die de nadruk legt op de buitenlocatie
  keywords: ['buiten fotoshoot', 'natuurlijke fotoshoot', 'huisdierenfotografie buiten', 'locatie fotoshoot', 'petshoot buiten', 'huisdierenfotografie', 'petshoot'], // Relevante zoekwoorden
  openGraph: {
    title: 'Buiten Shoot - Petshoot',
    description: 'Prachtige fotoshoot op een locatie naar keuze in de natuur. Leg de avontuurlijke momenten van je huisdier vast.',
    url: 'https://www.petshoot.nl/buiten-shoot', // Vervang met de correcte URL
    type: 'website',
    images: [
      {
        url: '/img/dogs/dog19.jpg', // Afbeelding van een buiten gefotografeerd huisdier
        alt: 'Hond gefotografeerd tijdens een buiten fotoshoot door Petshoot', // Alt tekst met beschrijving en bedrijfsnaam
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buiten Shoot - Petshoot',
    description: 'Prachtige fotoshoot op een locatie naar keuze in de natuur. Leg de avontuurlijke momenten van je huisdier vast.',
  },
};

export default function ServicePage() {
  const features: string[] = [
    "Sfeervolle foto's",
    "Prachtig, warm, natuurlijk licht",
    "6 digitale foto’s ",
    "Professionele bewerking",
    "Alle huisdieren",
    "Fotoshoot van 1 uur ",
  ];

  const included = [
    {
      icon: Camera,
      title: "Fotoshoot",
      description: "1 uur lange professionele fotoshoot",
    },
    {
      icon: ImagePlus,
      title: "Bewerkte foto’s",
      description: "6 professioneel bewerkte digitale foto’s ",
    },
    {
      icon: Download,
      title: "Digitale galerij",
      description: "Online galerij met downloadbare afbeeldingen",
    },
    {
      icon: Users,
      title: "Meerdere huisdieren ",
      description: "Tot 2 huisdieren per fotoshoot",
    },
  ];

  const gallery = [
    {
      href: "/img/cats/cat5.jpg",
      alt: "cat image",
    },
    {
      href: "/img/dogs/dog2.jpg",
      alt: "dog image",
    },
    {
      href: "/img/dogs/dog4.jpg",
      alt: "horse image",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-16">
      <Banner
        title="Buiten Shoot"
        description="Prachtige fotoshoot op een locatie naar keuze in de natuur"
        img={{
          href: "/img/banners/buiten-shoot-banner.png",
          alt: "Buiten Shoot banner",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Quick Info */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={TreeDeciduous} title="Pakketprijs" value="€125" />
            <InfoCard icon={Clock} title="Sessieduur" value="1 uur" />
            <InfoCard icon={Calendar} title="Beschikbaarheid" value="Boek nu" />
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/img/dogs/dog19.jpg"
                alt="Dog in the snow"
                width={500}
                height={500}
                className="hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg relative"
              />
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Buitenshoot</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Ideaal voor actieve honden, paarden of nieuwsgierige dieren die van de natuur houden. Geen achtergrond van studioverlichting, maar het
                ruisen van bomen, plonzend water of zacht zand onder de poten. Ik fotografeer je huisdier terwijl het in de buitenlucht rent, snuffelt
                of geniet.{" "}
              </p>
              <h5 className="font-bold text-xl mt-6">Waarom buiten?</h5>
              <p>
                Buiten zijn dieren vaak meer ontspannen, speelser en… stiekem op hun mooist. Of het nu om een hond gaat die vol overgave een bal
                achtervolgt, een paard in galop of een kat die nieuwsgierig een pad verkent: ik vang die échte persoonlijkheid.
              </p>

              <p className="mt-6">
                Kies zelf de locatie: het vertrouwde park om de hoek, een verstild bos of jullie favoriete strand. Wil je zelf ook op de foto? Geen
                probleem! Samen genieten is samen herinneringen maken.
              </p>
              <p className="mt-6 italic">
                Twijfel je over het weer of de ideale plek? Ik denk graag met je mee. Vul het{" "}
                <Link href="/contact">
                  <span className="hover:text-[#444]">contactformulie</span>
                </Link>{" "}
                in of mail naar{" "}
                <Link href="mailto:info@petshoot.nl">
                  <span className="hover:text-[#444]">info@petshoot.nl</span>
                </Link>{" "}
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is inbegrepen </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {included.map((item, index) => (
              <ServiceIncludeItem key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Servicefuncties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureItem key={`${feature}-${index}`} feature={feature} />
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Galerij</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
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
