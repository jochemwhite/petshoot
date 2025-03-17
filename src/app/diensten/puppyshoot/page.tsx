import { Banner } from "@/components/banner";
import { FeatureItem } from "@/components/feature-item";
import { GalleryImage } from "@/components/gallery-image";
import { InfoCard } from "@/components/info-card";
import CallToAction from "@/components/sections/cta";
import { ServiceIncludeItem } from "@/components/service-include-item";
import { Calendar, Camera, Clock, Download, ImagePlus, Dog, Users, DogIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Puppyshoot - Petshoot", // Nu met de juiste naam van de studio
  description: "Specialiseert zich in het vastleggen van de schattige momenten van puppy's.",
  keywords: ["puppy", "fotoshoot", "hondenfotografie", "puppyfotografie", "huisdierenfotografie", "petshoot"], // Meer relevante zoekwoorden
  openGraph: {
    title: "Puppyshoot - Petshoot",
    description: "Specialiseert zich in het vastleggen van de schattige momenten van puppy's.",
    url: "https://www.petshoot.nl/puppyshoot", // Vervang dit met de daadwerkelijke URL van de puppyshoot pagina
    type: "website",
    images: [
      {
        url: "/img/dogs/dog15.jpg", // Vervang dit met de URL van een representatieve afbeelding van Petshoot
        alt: "Schattige puppy gefotografeerd door Petshoot", // Alt tekst met de naam van de studio
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puppyshoot - Petshoot",
    description: "Specialiseert zich in het vastleggen van de schattige momenten van puppy's.",
  },
};

export default function PuppyShootPage() {
  const features: string[] = [
    "Specialisatie: puppy's",
    "Nest- of individuele shoot",
    "6 digitale foto's",
    "Online galerij",
    "Geduldige aanpak",
    "Schattige momenten",
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
      href: "/img/dogs/dog15.jpg",
      alt: "puppy image 1",
    },
    {
      href: "/img/dogs/dog16.jpg",
      alt: "puppy image 2",
    },
    {
      href: "/img/dogs/dog12.jpg",
      alt: "puppy image 3",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-16">
      <Banner
        title="Puppyshoot"
        description="Leg de liefste momenten van jouw pup vast"
        img={{
          href: "/img/dogs/dog15.jpg",
          alt: "Puppyshoot banner",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Quick Info */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={DogIcon} title="Pakketprijs" value="€155" />
            <InfoCard icon={Clock} title="Sessieduur" value="1 uur" />
            <InfoCard icon={Calendar} title="Beschikbaarheid" value="Boek nu" />
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/img/dogs/dog16.jpg"
                alt="blije puppy"
                width={500}
                height={500}
                className="hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg relative"
              />
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Puppyshoot</h2>
            <div className="prose prose-lg max-w-none space-y-3">
              <p>Leg de ondeugende blik, kleine pootjes en speelse capriolen vast voordat ze uitgroeien.</p>
              <p>
                Een puppy is puur enthousiasme: kwispelend, ondeugend en onvoorspelbaar. Ik fotografeer je pup tijdens het sluimeren, ravotten of
                ontdekken van de wereld. Thuis in hun veilige mandje of buiten tijdens de eerste avonturen in het gras.{" "}
              </p>
              <h5 className="font-bold text-xl">Waarom nu vastleggen?</h5>
              <div>
                <p>Over een jaar is die schattige kop al veranderd, maar deze foto’s blijven. Ik richt me op:</p>
                <ul className="list-disc list-inside pl-5">
                  <li>Die typische puppyblik: nieuwsgierig, slaperig of vol overgave.</li>
                  <li>Speelse interactie met jou of een speeltje.</li>
                  <li>De eerste keer zwemmen, spelen in de sneeuw of ravotten in de modder. Kortom momenten die je niet wilt vergeten. </li>
                </ul>
              </div>

              <p>Heb je een kleine druktemaker? Maak je geen zorgen dat je pup niet stilzit. Ik werk op hun tempo, met veel geduld.</p>
              <p className="italic">
                Kleine puppy’s worden groot. Wil je je opgegroeide viervoeter vast laten leggen? Boek een thuis- of buitenshoot! Vul het
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
