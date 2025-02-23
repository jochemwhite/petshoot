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
  title: "Thuis Shoot - Petshoot", // Duidelijke titel met bedrijfsnaam
  description: "Waar je huisdier zich het meest thuis voelt. Comfortabele fotoshoot in de vertrouwde thuisomgeving.", // Beschrijving die de focus van de shoot benadrukt
  keywords: [
    "thuis fotoshoot",
    "huisdierenfotografie thuis",
    "huisdier fotoshoot",
    "comfortabele fotoshoot",
    "petshoot thuis",
    "huisdierenfotografie",
    "petshoot",
  ], // Relevante zoekwoorden
  openGraph: {
    title: "Thuis Shoot - Petshoot",
    description: "Waar je huisdier zich het meest thuis voelt. Comfortabele fotoshoot in de vertrouwde thuisomgeving.",
    url: "https://www.petshoot.nl/thuis-shoot", // Vervang met de correcte URL
    type: "website",
    images: [
      {
        url: "/img/cats/cat13.jpg", // Afbeelding van een thuis gefotografeerd huisdier
        alt: "Kat gefotografeerd tijdens een thuis fotoshoot door Petshoot", // Alt tekst met beschrijving en bedrijfsnaam
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuis Shoot - Petshoot",
    description: "Waar je huisdier zich het meest thuis voelt. Comfortabele fotoshoot in de vertrouwde thuisomgeving.",
  },
};

export default function ServicePage() {
  const features: string[] = [
    "Studiofotografie met belichting ",
    "Comfortabele thuisomgeving ",
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
    { href: "/img/cats/cat11.jpg", alt: "cat image" },

    {
      href: "/img/dogs/dog11.jpg",
      alt: "dog image",
    },

    { href: "/img/cats/cat14.jpg", alt: "cat image" },
  ];

  return (
    <div className="min-h-screen pt-16 pb-16">
      <Banner
        title="Thuis Shoot"
        description="Waar je huisdier zich het meest thuis voelt"
        img={{
          href: "/img/cats/cat13.jpg",
          alt: "Thuis Shoot banner",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Quick Info */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={Camera} title="Pakketprijs" value="€100" />
            <InfoCard icon={Clock} title="Sessieduur" value="1 uur" />
            <InfoCard icon={Calendar} title="Beschikbaarheid" value="Boek nu" />
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/img/cats/cat13.jpg"
                alt="Cat on the couch"
                width={500}
                height={500}
                className="hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg relative"
              />
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Thuis Shoot</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Perfect voor dieren die houden van hun eigen vertrouwde plek. Een uur vol kwispelende momenten, spinnende herinneringen of speelse
                capriolen: deze fotoshoot thuis draait om de unieke band tussen jou en je huisdier(en). Samen creëren we foto’s die niet alleen mooi
                zijn, maar ook een verhaal vertellen. Precies zoals jullie het beleven.
              </p>
              <h5 className="font-bold text-xl mt-6">Zo maak ik het verschil: </h5>
              <p>
                We beginnen met een persoonlijk overleg over locatie, accessoires en jouw wensen. Tijdens de shoot volgen we het ritme van je dier, of
                het nu om twee energieke honden gaat of katten die liever observeren. Geen gehaast, geen druk. Slechts aandacht voor wat telt: échte
                emoties in jullie eigen omgeving.{" "}
              </p>
              <p className="mt-6 italic">
                Ook voor emotionele momenten, zoals een afscheid of jubileum, ben je bij mij aan het juiste adres. Vul het{" "}
                <Link href="/contact">
                  <span className="hover:text-[#444]">contactformulie</span>
                </Link>{" "}
                in of mail naar{" "}
                <Link href="mailto:info@petshoot.nl">
                  <span className="hover:text-[#444]">info@petshoot.nl</span>
                </Link>{" "}
                voor de mogelijkheden.
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
