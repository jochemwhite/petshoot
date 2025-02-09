import Link from "next/link";
import { Camera, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-6 w-6" />
              <span className="font-bold">Petshoot</span>
            </Link>
            <p className="text-muted-foreground">Capturing precious moments with your furry family members through professional pet photography.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                ["Algemene Voorwaarden ", "/algemene-voorwaarden"],
                ["Privacy Policy", "/privacy"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link href={url} className="text-muted-foreground hover:text-foreground transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {["Studio Sessions", "Outdoor Photography", "Pet Portraits", "Family Sessions", "Special Events"].map((service) => (
                <li key={service}>
                  <Link href="/booking" className="text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@petshoot.nl" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  info@petshoot.nl
                </a>
              </li>
              <li>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>
                    Goudhaver 75
                    <br />
                    3892BJ, Zeewolde
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Petshoots. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://jochemwhite.nl" target="_blank" className="hover:text-foreground transition-colors">
                Made by Jochemwhite.nl
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
