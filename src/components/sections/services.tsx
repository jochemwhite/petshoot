import { packages } from "@/lib/const";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-lg text-center">
              <service.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-3xl font-bold text-primary mb-4">€{service.price}</p>
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
