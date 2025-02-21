import { CheckCircle2 } from "lucide-react";
import React from "react";

export default function Introduction() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Welkom bij Petshoot</h2>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            Bij Petshoot draait het om échte momenten: een kwispelende staart, een nieuwsgierige snuit of een ondeugende blik. Ik fotografeer je
            huisdier daarom in een omgeving waar het zich thuis voelt: bij jou aan huis of tijdens een avontuur in de natuur. Liever de studio in? Ook
            dat is geen probleem.
          </p>
          <div className="flex space-x-2 justify-center">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>Fotograferen bij jou thuis of op locatie </span>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-lg w-1/2">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>Overal in Nederland </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
