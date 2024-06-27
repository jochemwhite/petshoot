import { ContactType, ImageType } from "@/types";
import { FaDollarSign, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const images: ImageType[] = [
  {
    src: "/img/dogs/dog1.jpg",
    alt: "dog1",
  },
  {
    src: "/img/dogs/dog2.jpg",
    alt: "dog2",
  },
  {
    src: "/img/dogs/dog3.jpg",
    alt: "dog3",
  },
  {
    src: "/img/dogs/dog4.jpg",
    alt: "dog4",
  },
  {
    src: "/img/dogs/dog5.jpg",
    alt: "dog5",
  },
  {
    src: "/img/dogs/dog6.jpg",
    alt: "dog6",
  },
  {
    src: "/img/dogs/dog6.jpg",
    alt: "dog6",
  },
  {
    src: "/img/dogs/dog6.jpg",
    alt: "dog6",
  },
  {
    src: "/img/dogs/dog6.jpg",
    alt: "dog6",
  },
];

export const ContactDetails: ContactType[] = [
  {
    link: "mailto:contact@petshoot.nl",
    value: "info@petshoot.nl",
    icon: FaEnvelope,
  },
  {
    link: "tel:0612345678",
    value: "06-12345678",
    icon: FaPhoneAlt,
  },
  {
    link: "https://www.kvk.nl/",
    value: "KVK Nummer: 00000000",
    icon: FaDollarSign,
  },
  {
    link: "https://www.kvk.nl/",
    value: "BTW Nummer: 00000000",
    icon: FaDollarSign,
  },
];
