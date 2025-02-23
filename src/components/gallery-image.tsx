import Image from "next/image";

export const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-square rounded-lg overflow-hidden shadow-lg relative">
    <Image src={src} alt={alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
  </div>
);