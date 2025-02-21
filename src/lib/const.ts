import { Package } from "@/types";
import { Camera, Dog, Download, ImagePlus, TreeDeciduous, Users } from "lucide-react";

export const packages: Package[] = [
  {
    id: "thuis-shoot",
    name: "Thuis Shoot",
    price: 100,
    description: "Waar je huisdier zich het meest thuis voelt",
    icon: Camera,
    href: "thuis-shoot",
    features: [
      "Studiofotografie met belichting ",
      "Comfortabele thuisomgeving ",
      "6 digitale foto’s ",
      "Professionele bewerking",
      "Alle huisdieren",
      "Fotoshoot van 1 uur ",
    ],
    about: `Perfect voor dieren die houden van hun eigen vertrouwde plek. Een uur vol kwispelende 
            momenten, spinnende herinneringen of speelse capriolen: deze fotoshoot thuis draait om de 
            unieke band tussen jou en je huisdier(en). Samen creëren we foto’s die niet alleen mooi zijn, 
            maar ook een verhaal vertellen. Precies zoals jullie het beleven. 

            Zo maak ik het verschil: 
            We beginnen met een persoonlijk overleg over locatie, accessoires en jouw wensen. Tijdens de 
            shoot volgen we het ritme van je dier, of het nu om twee energieke honden gaat of katten die 
            liever observeren. Geen gehaast, geen druk. Slechts aandacht voor wat telt: échte emoties in 
            jullie eigen omgeving. 

            Ook voor emotionele momenten, zoals een afscheid of jubileum, ben je bij mij aan het juiste 
            adres. Vul het contactformulier in of mail naar info@2daysnature.nl voor de mogelijkheden.


`,
    about_img: {
      href: "/img/cats/cat13.jpg",
      alt: "cat image",
    },
    gallery: [
      { href: "/img/cats/cat11.jpg", alt: "cat image" },

      {
        href: "/img/dogs/dog11.jpg",
        alt: "dog image",
      },

      { href: "/img/cats/cat14.jpg", alt: "cat image" },
    ],
    includes: [
      {
        icon: Camera,
        title: "Fotoshoot",
        description: "1 uur lange professionele fotoshoot",
      },
      {
        icon: ImagePlus,
        title: "Bewerkte foto’s",
        description: "6 professioneel bewerkte digitale foto’s ",
      },
      {
        icon: Download,
        title: "Digitale galerij",
        description: "Online gallery with downloadable images",
      },
      {
        icon: Users,
        title: "Meerdere huisdieren ",
        description: "Tot 2 huisdieren per fotoshoot",
      },
    ],
  },
  {
    id: "buiten-shoot",
    name: "Buiten Shoot",
    price: 125,
    description: "Prachtige fotoshoot op een locatie naar keuze in de natuur",
    icon: TreeDeciduous,
    href: "buiten-shoot",
    features: [
      "Natuurlijke buitenlocaties",
      "Locatie naar keuze",
      "1 uur fotosessie",
      "6 digitale foto's ",
      "Professionele bewerking",
      "Weersafhankelijk",
    ],
    about: `Make your pet's special occasions truly memorable with our dedicated event photography service. Whether it's a birthday celebration, adoption anniversary, or any other milestone, we're here to document every tail wag and happy moment.

Our special events coverage goes beyond just taking pictures – we help create an atmosphere that's both photo-worthy and enjoyable for all pets involved. We understand the unique challenges of photographing multiple pets and can handle group dynamics with ease.

We work closely with you to plan the perfect setup, including themed decorations and props that match your vision. Our experience in event photography means we know exactly how to capture both the big moments and the small, candid interactions that make these celebrations special.

From intimate gatherings to large pet parties, we ensure every special moment is preserved in beautiful detail. We can also provide same-day previews of selected shots so you can share the joy immediately with friends and family.`,
    about_img: {
      href: "/img/dogs/dog19.jpg",
      alt: "Jack",
    },
    banner: {
      href: "/img/banners/buiten-shoot-banner.png",
      alt: "dog image",
    },
    gallery: [
      {
        href: "/img/cats/cat5.jpg",
        alt: "cat image",
      },
      {
        href: "/img/dogs/dog2.jpg",
        alt: "dog image",
      },
      {
        href: "/img/dogs/dog4.jpg",
        alt: "horse image",
      },
    ],
    includes: [
      {
        icon: Camera,
        title: "Photo Session",
        description: "1-hour professional photography session",
      },
      {
        icon: ImagePlus,
        title: "Edited Photos",
        description: "10 professionally edited digital photos",
      },
      {
        icon: Download,
        title: "Digital Gallery",
        description: "Online gallery with downloadable images",
      },
      {
        icon: Users,
        title: "Multiple Pets",
        description: "Up to 2 pets per session",
      },
    ],
  },

  {
    id: "puppy-shoot",
    name: "Puppy shoot",
    price: 155,
    description: "Specialiseert zich in het vastleggen van de schattige momenten van puppy's.",
    icon: Dog,
    href: "puppy-shoot",
    features: [
      "Specialisatie: puppy's",
      "Nest- of individuele shoot",
      "6 digitale foto's",
      "Online galerij",
      "Geduldige aanpak",
      "Schattige momenten",
    ],
    about: `Make your pet's special occasions truly memorable with our dedicated event photography service. Whether it's a birthday celebration, adoption anniversary, or any other milestone, we're here to document every tail wag and happy moment.

Our special events coverage goes beyond just taking pictures – we help create an atmosphere that's both photo-worthy and enjoyable for all pets involved. We understand the unique challenges of photographing multiple pets and can handle group dynamics with ease.

We work closely with you to plan the perfect setup, including themed decorations and props that match your vision. Our experience in event photography means we know exactly how to capture both the big moments and the small, candid interactions that make these celebrations special.

From intimate gatherings to large pet parties, we ensure every special moment is preserved in beautiful detail. We can also provide same-day previews of selected shots so you can share the joy immediately with friends and family.`,
    about_img: {
      href: "/img/dogs/dog15.jpg",
      alt: "Jack",
    },
    gallery: [
      {
        href: "/img/dogs/dog15.jpg",
        alt: "cat image",
      },
      {
        href: "/img/dogs/dog16.jpg",
        alt: "dog image",
      },
      {
        href: "/img/dogs/dog15.jpg",
        alt: "horse image",
      },
    ],
    includes: [
      {
        icon: Camera,
        title: "Photo Session",
        description: "1-hour professional photography session",
      },
      {
        icon: ImagePlus,
        title: "Edited Photos",
        description: "10 professionally edited digital photos",
      },
      {
        icon: Download,
        title: "Digital Gallery",
        description: "Online gallery with downloadable images",
      },
      {
        icon: Users,
        title: "Multiple Pets",
        description: "Up to 2 pets per session",
      },
    ],
  },
];
