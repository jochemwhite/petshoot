import { Calendar, Camera, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Thuis Shoot",
      price: "from $299",
      description: "Professional studio photography with controlled lighting and backgrounds",
      icon: Camera,
      href: "thuis-shoot"
    },
    {
      title: "Buiten Shoot",
      price: "from $349",
      description: "Natural light photography in beautiful outdoor locations",
      icon: Calendar,
      href: "buiten-shoot"

    },

  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-lg text-center">
              <service.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link href={`/services/${service.href}`}>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
