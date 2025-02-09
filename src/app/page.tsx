import CallToAction from "@/components/sections/cta";
import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionele Huisdierfotografie Zeewolde | Unieke Foto’s van Jouw Lieveling | Petshoot",
  description:
    "Vang de persoonlijkheid van je hond, kat, of ander huisdier in prachtige foto’s.  Huisdierfotograaf in Zeewolde, Flevoland. Bekijk portfolio & boek een fotosessie!",
  keywords: [
    "huisdierfotografie Zeewolde",
    "dierenfotograaf Zeewolde",
    "fotoshoot huisdier Zeewolde",
    "hondenfotografie Zeewolde",
    "kattenfotografie Zeewolde",
    "huisdier foto’s Flevoland",
    "professionele dier fotografie",
    "Zeewolde",
    "Flevoland",
    "huisdierportret",
    "dierportret",
    "portfolio huisdierfotografie",
    "boek fotosessie huisdier",
  ],
  openGraph: {
    title: "Professionele Huisdierfotografie Zeewolde | Unieke Foto’s van Jouw Lieveling | Petshoot",
    description:
      "Vang de persoonlijkheid van je hond, kat, of ander huisdier in prachtige foto’s.  Huisdierfotograaf in Zeewolde, Flevoland. Bekijk portfolio & boek een fotosessie!",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionele Huisdierfotografie Zeewolde | Unieke Foto’s van Jouw Lieveling | Petshoot",
    description:
      "Vang de persoonlijkheid van je hond, kat, of ander huisdier in prachtige foto’s.  Huisdierfotograaf in Zeewolde, Flevoland. Bekijk portfolio & boek een fotosessie!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
