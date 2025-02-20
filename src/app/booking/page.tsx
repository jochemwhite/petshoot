import BookingForm from "@/components/forms/booking-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boek Jouw Huisdier Fotosessie in Zeewolde | Reserveer Nu | Petshoot",
  description:
    "Plan eenvoudig een fotoshoot voor jouw huisdier in Zeewolde, Flevoland. Beschikbaarheid bekijken & direct boeken.  Onvergetelijke huisdierfoto’s!",
  keywords: [
    "boek huisdier fotosessie Zeewolde",
    "fotoshoot huisdier reserveren",
    "afspraak maken dierfotograaf",
    "huisdierfotografie boeken Flevoland",
    "beschikbaarheid fotoshoot huisdieren",
    "prijslijst huisdierfotografie", // If you have pricing info on this page or linked
    "fotosessie plannen Zeewolde",
    "contact voor boeking dierfotografie",
  ],
  openGraph: {
    title: "Boek Jouw Huisdier Fotosessie in Zeewolde | Reserveer Nu | Petshoot",
    description:
      "Plan eenvoudig een fotoshoot voor jouw huisdier in Zeewolde, Flevoland. Beschikbaarheid bekijken & direct boeken.  Onvergetelijke huisdierfoto’s!",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boek Jouw Huisdier Fotosessie in Zeewolde | Reserveer Nu | Petshoot",
    description:
      "Plan eenvoudig een fotoshoot voor jouw huisdier in Zeewolde, Flevoland. Beschikbaarheid bekijken & direct boeken.  Onvergetelijke huisdierfoto’s!",
  },
  robots: {
    index: false, // Could be true, depending on if you want booking pages indexed. If it's a direct booking form, indexing can be good.
    follow: true,
  },
};

// --- Main Component ---
export default function BookingPage() {
  return <BookingForm />;
}
