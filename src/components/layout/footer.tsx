import { SocialsType } from "@/types";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials: SocialsType[] = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      url: "https://www.facebook.com/",
    },
    {
      name: "Pinterest",
      url: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      url: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      url: "https://www.facebook.com/",
    },
  ];

  return (
    <footer className="fixed bottom-0 w-full">
      <div className="flex justify-center items-center h-20 bg-sub-dark text-subtext text-white">
        <ul className="flex gap-2">
          {socials.map((social, idx) => (
            <li key={idx}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-around items-center h-60 bg-gray-800 text-subtext bg-dark lg:flex-row">
        <div>
          <p>(C) 2022 - {currentYear} All Rights Reserved </p>
        </div>
        <div>
          <Link href="/" target="_blank" rel="noreferrer">
            Petshoot
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p>
            Site By Gaëlle Jonkers &  Jochem van der Wit
          </p>
        </div>
      </div>
    </footer>
  );
}
