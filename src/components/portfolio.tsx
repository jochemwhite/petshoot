"use client";
import { Camera, Filter } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const portfolioItems = [
  // Dogs
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog1.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog2.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog3.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog4.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog5.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog6.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog7.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit",
    category: "Honden",
    image: "/img/dogs/dog8.jpg",
    description: "Lorem ipsum dolor sit",
  },

  // Cats (unique IDs continue after dogs)
  {
    id: 9,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat1.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat2.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 11,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat3.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 12,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat4.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 13,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat5.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 14,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat6.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 15,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat7.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 16,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat8.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 17,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat9.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 18,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat10.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 19,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat11.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 20,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat12.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 21,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat13.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 22,
    title: "Lorem ipsum dolor sit",
    category: "Katten",
    image: "/img/cats/cat14.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 23,
    title: "Lorem ipsum dolor sit",
    category: "Vogels",
    image: "/img/birds/bird1.jpg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 24,
    title: "Lorem ipsum dolor sit",
    category: "Paarden",
    image: "/img/horses/horse1.jpeg",
    description: "Lorem ipsum dolor sit",
  },
  {
    id: 25,
    title: "Lorem ipsum dolor sit",
    category: "Paarden",
    image: "/img/horses/horse2.jpg",
    description: "Lorem ipsum dolor sit",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  const filteredItems = selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
        <Filter className="h-5 w-5 text-muted-foreground" />
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              fill
            />
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
    </>
  );
}
