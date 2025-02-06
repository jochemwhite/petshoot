"use client";
import { cn } from "@/lib/utils";
import { Camera, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Portfolio", "/portfolio"],
    ["Booking", "/booking"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto md:justify-start md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6" />
            <span className="font-bold">Petshoot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {links.map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className={cn("transition-colors hover:text-foreground/80", pathname === url ? "text-foreground" : "text-foreground/60")}
              >
                {title}
              </Link>
            ))}
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
                {links.map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg px-2 py-1 rounded-md transition-colors hover:bg-secondary",
                      pathname === url ? "text-foreground font-medium" : "text-foreground/60"
                    )}
                  >
                    {title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
