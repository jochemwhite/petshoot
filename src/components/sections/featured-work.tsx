import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Galerij</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["/img/dogs/dog4.jpg", "/img/cats/cat13.jpg", "/img/birds/bird1.jpg"].map((url, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl">
              <Image
                src={url}
                alt={`Featured pet ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                width={320}
                height={320}
              />
              <Link
                href="/portfolio"
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <Button variant="secondary">Galerij</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              Zie volledige portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
