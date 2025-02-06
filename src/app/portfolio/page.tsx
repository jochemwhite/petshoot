"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, Filter } from "lucide-react";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Playful Golden Retriever",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    description: "A joyful golden retriever playing in the park",
  },
  {
    id: 2,
    title: "Majestic Persian Cat",
    category: "Cats",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    description: "An elegant Persian cat posing in studio lighting",
  },
  {
    id: 3,
    title: "Energetic Border Collie",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47",
    description: "A border collie mid-jump during an agility session",
  },
  {
    id: 4,
    title: "Curious Tabby",
    category: "Cats",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    description: "A tabby cat exploring its surroundings",
  },
  {
    id: 5,
    title: "Gentle Giant",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48",
    description: "A Great Dane showing its gentle nature",
  },
  {
    id: 6,
    title: "Siamese Beauty",
    category: "Cats",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
    description: "A Siamese cat in a natural window light setting",
  },
  {
    id: 7,
    title: "Puppy Love",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    description: "Two puppies sharing a heartwarming moment",
  },
  {
    id: 8,
    title: "Regal Maine Coon",
    category: "Cats",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec",
    description: "A majestic Maine Coon cat in studio portraiture",
  },
  {
    id: 9,
    title: "Action Shot",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1536809188428-e8ecf663d0be",
    description: "High-speed photography of a dog catching a frisbee",
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of pet portraits, capturing the unique personality 
            and charm of each furry friend we&apos;ve had the pleasure to photograph.
          </p>
        </div>

        {/* Category Filter */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <Camera className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-sm text-center text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogTitle>
              {selectedImage?.title}
            </DialogTitle>
            {selectedImage && (
              <div className="space-y-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full rounded-lg"
                />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{selectedImage.title}</h2>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Category:</span>
                    <span className="text-sm text-muted-foreground">{selectedImage.category}</span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}