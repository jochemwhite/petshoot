import React from "react";
import type { IconType } from "react-icons/lib";

export type ImageType = {
  src: string;
  alt: string;
};

export type SocialsType = {
  name: string;
  url: string;
};


export type ContactType = {
  link: string;
  value: string;
  icon: IconType

}