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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Over mij</h1>
            <p className="text-xl text-white/90 italic">
              De kunst van het vastleggen zit in de details: elk kwispelend staartje, elke nieuwsgierige blik{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <Camera className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-6">Mijn Missie</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bij Petshoot draait het niet om perfecte poses, maar om de échte momenten die jouw band met je huisdier uniek maken. Of we nu bij jou
            thuis, bij mij in de studio of buiten fotograferen: mijn doel is om die spontaniteit en emotie te vangen, precies zoals ze gebeuren.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Image
              src="/Jennita.jpg"
              alt="Jennita Nieuwenhuis"
              className="object-cover object-center mx-auto rounded-xl shadow-2xl "
              width={500}
              height={500}
            />

            <div>
              <h2 className="text-3xl font-bold text-center mb-16">Over mij</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mijn naam is Jennita Nieuwenhuis, oprichter van Petshoot. Als huisdierliefhebber en fotograaf combineer ik mijn twee grootste passies:
                dieren en het vastleggen van hun karakter. Of het nu gaat om foto’s bij mij in de studio, bij jou thuis of op een door jou gekozen
                locatie in de natuur.
              </p>
              {/* <p className="text-lg text-muted-foreground leading-relaxed py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero accusantium hic corrupti quibusdam tempora voluptatem facere nisi
                fugiat. Consectetur ea earum officiis pariatur eaque alias quasi, et eveniet iste.
              </p> */}
              <p className="text-lg text-muted-foreground leading-relaxed mt-2">
                Waarom ik dit doe? Omdat huisdieren niet "gewoon dieren" zijn. Het zijn familieleden. Ze verdienen herinneringen die net zo levendig
                zijn als zijzelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Camera, label: "Foto's gemaakt", value: "500" },
              { icon: Heart, label: "", value: "300" },
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
      </section> */}

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
}
