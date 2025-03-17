import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Leg de liefste momenten van jouw pup vast.</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Boek jouw fotoshoot vandaag en blik vol liefde terug naar jouw favoriete momenten.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/boeken">
              <Calendar className="mr-2 h-5 w-5" />
              Boek nu
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Neem contact op</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
