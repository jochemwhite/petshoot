import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Capture the Magic?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Book your session today and let&apos;s create beautiful memories with your furry friend</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
