import { SocialsType } from "@/types";
import React from "react";

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
    <footer>
      <div className="flex justify-center items-center h-20 bg-sub-dark text-subtext text-white">
        <ul className="flex gap-4">
          {socials.map((social, idx) => (
            <li key={idx}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-around items-center h-60 bg-gray-800 text-subtext bg-dark">
        <div>
          <p>(C) 2022 - {currentYear} All Rights Reserved </p>
        </div>
        <div>
          <p>
            <a href="https://frenify.com" target="_blank" rel="noreferrer">
              Petshoot
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p>Site By Gaëlle Jonkers & <br /> Jochem van der Wit</p>
        </div>
      </div>
    </footer>
  );
}
