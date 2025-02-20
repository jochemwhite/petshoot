import { NumberTicker } from "@/components/number-ticker";
import CallToAction from "@/components/sections/cta";
import { Award, Camera, Heart, Star } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over Petshoot | Gepassioneerde Huisdierfotografie in Zeewolde | Petshoot",
  description:
    "Leer meer over Petshoot en onze passie voor huisdierenfotografie in Zeewolde, Flevoland.  Persoonlijke & professionele dierportretten.",
  keywords: [
    "over ons huisdierfotografie",
    "Petshoot", 
        "dierfotograaf Zeewolde achtergrond",
    "missie huisdierfotografie bedrijf",
    "passie voor dieren fotografie",
    "persoonlijke dierportretten",
    "professionele aanpak dierfotografie",
    "verhaal achter huisdierfotograaf",
  ],
  openGraph: {
    title: "Over Petshoot | Gepassioneerde Huisdierfotografie in Zeewolde | Petshoot",
    description:
      "Leer meer over Petshoot en onze passie voor huisdierenfotografie in Zeewolde, Flevoland.  Persoonlijke & professionele dierportretten.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Petshoot | Gepassioneerde Huisdierfotografie in Zeewolde | Petshoot",
    description:
      "Leer meer over Petshoot en onze passie voor huisdierenfotografie in Zeewolde, Flevoland.  Persoonlijke & professionele dierportretten.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen pt-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <Image src="/img/cats/cat9.jpg" alt="Pet photographer at work" className="w-full h-full object-cover" fill />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-white/90">Capturing precious moments between pets and their families since 2015</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <Camera className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-6">My Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Pawfect Shots, we believe every pet has a unique personality that deserves to be captured and celebrated. Our mission is to create
            timeless, emotional photographs that showcase the special bond between pets and their families, providing lasting memories for generations
            to come.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Image src="/Jennita.jpg" alt="Jennita Nieuwenhuis" className="object-cover object-center mx-auto rounded-xl shadow-2xl " width={500} height={500} />

            <div>
              <h2 className="text-3xl font-bold text-center mb-16">About me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique molestias, quam itaque ratione, eos nulla rerum ex animi fuga quia
                modi accusantium beatae! Nostrum perferendis, dolorum porro vero sit vel?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero accusantium hic corrupti quibusdam tempora voluptatem facere nisi
                fugiat. Consectetur ea earum officiis pariatur eaque alias quasi, et eveniet iste.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dicta soluta, voluptate natus doloremque nisi animi eaque minus
                deserunt odio reprehenderit saepe, ut iusto, praesentium eveniet aliquam maiores tempore. Totam!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Camera, label: "Photos Taken", value: "500" },
              { icon: Heart, label: "Happy Clients", value: "300" },
              { icon: Award, label: "Awards Won", value: "15" },
              { icon: Star, label: "5-Star Reviews", value: "500" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <NumberTicker value={+stat.value} className="text-3xl font-bold mb-2" />
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
