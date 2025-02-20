"use client"

import { cn } from "@/lib/utils"
import { Camera, Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { packages } from "@/lib/const"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { title: "Home", url: "/" },
    {
      title: "Services",
      dropdown: true,
      items: packages.map((pkg) => ({
        title: pkg.name,
        url: `/services/${pkg.href}`,
      })),
    },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Booking", url: "/booking" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex items-center justify-between w-full md:w-auto md:justify-start md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={50} height={50} alt="logo"  />
            <span className="font-bold">Petshoot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {links.map((link) => {
              if (link.dropdown && link.items) {
                return (
                  <div key={link.title} className="relative group">
                    <button className="flex items-center transition-colors hover:text-foreground/80">
                      {link.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      <div className="py-1">
                        {link.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.url}
                            className="block px-4 py-2 text-sm text-foreground/60 hover:bg-secondary hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.url || link.title}
                  href={link.url || '/'}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === link.url ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Camera className="h-6 w-6" />
                  <span>Pet Shoot</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => {
                  if (link.dropdown && link.items) {
                    return (
                      <div key={link.title}>
                        <span className={cn(
                            "text-lg px-2 py-1 rounded-md transition-colors hover:bg-secondary",
                            "text-foreground/60" // Mobile "Services" is not "active" in same way as desktop
                          )}>
                          {link.title}
                        </span>
                        <div className="ml-4 flex flex-col gap-2 mt-2">
                          {link.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.url}
                              onClick={() => setIsOpen(false)}
                              className="text-lg px-4 py-1 rounded-md transition-colors hover:bg-secondary text-foreground/60"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.url || link.title}
                      href={link.url || "#"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={cn(
                        "text-lg px-2 py-1 rounded-md transition-colors hover:bg-secondary",
                        pathname === link.url ? "text-foreground font-medium" : "text-foreground/60"
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}