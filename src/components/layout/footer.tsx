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
            <p className="text-muted-foreground">
              Bij Petshoot draait het niet om perfecte poses, maar om de échte momenten die jouw band met je huisdier uniek maken.{" "}
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/petshoot_nl" className="text-muted-foreground hover:text-foreground" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100080496780034"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
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
              <li>
                <Link href={`/services/thuis-shoot`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Thuis Shoot
                </Link>
              </li>
              <li>
                <Link href={`/services/buiten-shoot`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Buiten Shoot
                </Link>
              </li>
              <li>
                <Link href={`/services/puppy-shoot`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Puppy Shoot
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
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
