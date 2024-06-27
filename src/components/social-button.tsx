import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Link from "next/link";

interface SocialButtonProps {
  provider: "facebook" | "twitter" | "pinterest" | "instagram" | "linkedin";
}

export default function SocialButton({ provider }: SocialButtonProps) {
  const button = (Icon: IconType) => {
    return (
      <div className="w-full h-full bg-[#eee] rounded-full flex justify-center items-center ">
        <Link href="#">
            <Icon size="fill" className="p-2 h-full w-full"/>
        </Link>
      </div>
    );
  };

  switch (provider) {
    case "facebook":
      return button(FaFacebook);
    case "twitter":
      return button(FaTwitter);
    case "pinterest":
      return button(FaPinterest);
    case "instagram":
      return button(FaInstagram);
    case "linkedin":
      return button(FaLinkedin);
    default:
      return null;
  }
}
