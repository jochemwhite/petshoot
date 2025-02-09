import Portfolio from "@/components/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Huisdierfotografie Zeewolde | Laat je Inspireren | Petshoot",
  description:
    "Bekijk ons portfolio van prachtige huisdierfoto’s in Zeewolde en omgeving.  Inspiratie voor jouw eigen fotoshoot! Professionele dierfotograaf Flevoland.",
  keywords: [
    "portfolio huisdierfotografie Zeewolde",
    "voorbeelden huisdierfoto’s",
    "inspiratie dierfotografie",
    "beste huisdierfotograaf Zeewolde",
    "dierenportretten portfolio",
    "huisdier fotoshoot voorbeelden",
    "fotografie stijlen huisdieren",
    "kwaliteit huisdierfotografie",
    "dier fotografie Flevoland",
  ],
  openGraph: {
    title: "Portfolio Huisdierfotografie Zeewolde | Laat je Inspireren | Petshoot",
    description:
      "Bekijk ons portfolio van prachtige huisdierfoto’s in Zeewolde en omgeving.  Inspiratie voor jouw eigen fotoshoot! Professionele dierfotograaf Flevoland.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Huisdierfotografie Zeewolde | Laat je Inspireren | Petshoot",
    description:
      "Bekijk ons portfolio van prachtige huisdierfoto’s in Zeewolde en omgeving.  Inspiratie voor jouw eigen fotoshoot! Professionele dierfotograaf Flevoland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of pet portraits, capturing the unique personality and charm of each furry friend we&apos;ve had the pleasure to
            photograph.
          </p>
        </div>

        <Portfolio />
      </div>
    </div>
  );
}
