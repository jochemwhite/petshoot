import Link from "next/link";
import { Button } from "../ui/button";
import { Camera, DogIcon, TreeDeciduous } from "lucide-react";

export default function Services() {
  const packages = [
    {
      name: "Thuis Shoot",
      description: "Waar je huisdier zich het meest thuis voelt.",
      price: 100,
      href: "thuis-shoot",
      icon: Camera,
    },
    {
      name: "Buiten Shoot",
      description: "Prachtige fotoshoot op een locatie naar keuze in de natuur.",
      price: 125,
      href: "buiten-shoot",
      icon: TreeDeciduous,
    },
    {
      name: "Puppy Shoot",
      description: "Specialiseert zich in het vastleggen van de schattige momenten van puppy's.",
      price: 155,
      href: "puppy-shoot",
      icon: DogIcon,
    },
  ];

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
              <p className="text-muted-foreground mb-6 h-8">{service.description}</p>
              <Link href={`/services/${service.href}`}>
                <Button variant="outline" className="w-full">
                  Lees meer
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
