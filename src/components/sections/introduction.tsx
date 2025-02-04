import React from "react";

export default function Introduction() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Welcome to Petshoots</h2>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            With over a decade of experience in pet photography, we specialize in creating timeless portraits that capture the true essence of your
            beloved companions. Our state-of-the-art studio and patient approach ensure a comfortable experience for pets of all personalities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-card rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Professional Studio</h3>
              <p className="text-lg text-muted-foreground">Equipped with pet-friendly lighting and props for the perfect shot</p>
            </div>
            <div className="p-8 bg-card rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Patient Approach</h3>
              <p className="text-lg text-muted-foreground">We take time to ensure your pet feels comfortable and relaxed</p>
            </div>
            <div className="p-8 bg-card rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Beautiful Results</h3>
              <p className="text-lg text-muted-foreground">High-quality, professionally edited photos you'll cherish forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
