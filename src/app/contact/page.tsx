import ContactForm from "@/components/forms/contact-form";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export const metadata = {
  title: "Contacteer Huisdierfotograaf in Zeewolde | Vragen? Neem Contact Op | Petshoot",
  description:
    "Neem eenvoudig contact op met Petshoot voor vragen over huisdierfotografie in Zeewolde, Flevoland.  Bereik ons via telefoon, email of contactformulier.",
  keywords: [
    "contact huisdierfotograaf Zeewolde",
    "contactgegevens dierfotograaf",
    "telefoonnummer dierfotograaf",
    "email adres dierfotograaf",
    "contactformulier huisdierfotografie",
    "adres dierfotograaf Zeewolde", // If you list an address
    "bereikbaarheid dierfotograaf",
    "vragen over huisdierfotografie",
  ],
  openGraph: {
    title: "Contacteer Huisdierfotograaf in Zeewolde | Vragen? Neem Contact Op | Petshoot",
    description:
      "Neem eenvoudig contact op met Petshoot voor vragen over huisdierfotografie in Zeewolde, Flevoland.  Bereik ons via telefoon, email of contactformulier.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacteer Huisdierfotograaf in Zeewolde | Vragen? Neem Contact Op | Petshoot",
    description:
      "Neem eenvoudig contact op met Petshoot voor vragen over huisdierfotografie in Zeewolde, Flevoland.  Bereik ons via telefoon, email of contactformulier.",
  },
  robots: {
    index: false, // Could be true, but contact pages are often less critical to index directly. User usually navigates here directly.
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or want to schedule a session? We&pos;d love to hear from you! Fill out the form below or use our
            contact information to reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Goudhaver 75
                      <br />
                      3892EH, Zeewolde
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@petshoot.nl</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Studio Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" alt="Studio location" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Send us a Message
            </h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
