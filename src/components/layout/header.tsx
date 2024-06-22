"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "./hamburger-menu";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Me",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  scrollYProgress.on("change", (e) => {
    setScrollY(e);
  });

  const toggleHamMenu = () => setIsOpen(!isOpen);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <header
      className={cn("fixed z-50 h-full w-full text-secondary-text text-xl", {
        "backdrop-blur-md": scrollY > 0.1,
      })}
      >
      {/* hamburger menu */}
      <HamburgerMenu />



      <nav className="h-full relative">
        
        {/* desktop menu */}

        <ul className="hidden lg:flex h-full justify-center items-center ">
          {links.map((link) => (
            <li key={link.name} className="mx-5">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
