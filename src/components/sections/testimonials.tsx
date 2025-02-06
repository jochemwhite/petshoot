import { Star } from "lucide-react";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "The photos captured my dog's personality perfectly. I couldn't be happier with the results!",
      author: "Sarah M.",
      pet: "Owner of Max",
    },
    {
      text: "Such a patient photographer! My cat usually hates photos but they got amazing shots.",
      author: "James P.",
      pet: "Owner of Luna",
    },
    {
      text: "The whole experience was wonderful, from booking to receiving our beautiful photos.",
      author: "Emily R.",
      pet: "Owner of Bailey",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Pet Owners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="inline-block w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">{testimonial.text}</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">{testimonial.author}</p>
                <p>{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
