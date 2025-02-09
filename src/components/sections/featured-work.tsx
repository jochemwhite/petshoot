import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
            "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
          ].map((url, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl">
              <Image
                src={url}
                alt={`Featured pet ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                width={320}
                height={320}
              />
              <Link href="/portfolio" className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary">View Gallery</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
