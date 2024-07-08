"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "../nav/hamburger-menu/hamburger-menu";

export interface Link {
  name: string;
  href: string;
}

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: Link[] = [
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

  return (
    <header
      className={cn("fixed top-0 z-50 h-20 w-full text-secondary-text text-xl ", {
        "backdrop-blur-md": scrollY === 0,
        "bg-white": scrollY > 0,
      })}
    >
      <div className="flex items-center justify-between h-full lg:w-[1600px] mx-auto relative">
        <div className="flex">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
        </div>
        {/* hamburger menu */}
        <HamburgerMenu links={links} />
        <nav className="hidden lg:block h-full relative">
          {/* desktop menu */}

          <ul className="hidden lg:flex h-full justify-center items-center ">
            {links.map((link) => (
              <li key={link.name} className="mx-5 text-black">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
