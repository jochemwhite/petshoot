import { Hero } from "@/components/Hero";
import AboutCard from "@/components/about-card";
import CategoryCard from "@/components/category-card";
import InstaFeed from "@/components/insta-feed";
import type { ImageType } from "@/types";
import Image from "next/image";

export default function Home() {
  const images: ImageType[] = [
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

  return (
    <main className="">
      <section className="min-h-screen">
        <Hero images={images.map((img) => img.src)} />
      </section>

      <section className="w-[1600px] flex justify-between items-center mx-auto my-[150px]">
        <div className="flex-1">
          <h2 className="text-3xl mb-5">Portfolio Showcase</h2>

          <p className="text-sm text-subtext">Some of the best photos from our studi</p>
        </div>

        <div className="flex-1 text-secondary-text">
          <p className="mb-5">
            Aliquam ullamcorper ex nunc, eu ultricies neque sagittis at. Praesent porta, tortor non commodo fermentum, nunc urna egestas leo, ac
            tristique turpis nunc sed ante. In ultrices pharetra leo quis porta. In sit amet scelerisque urna, tincidunt commodo sem.
          </p>

          <p>
            Suspendisse potenti. Vivamus eu ornare ex. Sed sollicitudin pellentesque felis. Donec nisi mi, fringilla id libero vel, semper lobortis
            tortor.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-7  w-[1600px] mx-auto items-center justify-center my-[150px] ">
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
      </section>

      <section className="my-[150px]">
        <div className="w-full h-[250px] bg-white relative">
          <Image
            src="/img/dogs/dog1.jpg"
            alt="dog1"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-primary-text">We shoot beautiful pictures</h2>
            <p className="text-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-7  w-[1600px] mx-auto items-center justify-center my-[150px] ">
        <AboutCard
          images={images}
          title="Commercial & Editorial Assignment Photography"
          paragraph="I have performed professional corporate and editorial photography for many local & international clients. Corporate and editorial clients have trusted my photography and logistical skills to capture the best creative images of a situation or person – on-time and on-budget."
        />
        <AboutCard
          images={images}
          title="Commercial & Editorial Assignment Photography"
          paragraph="I have performed professional corporate and editorial photography for many local & international clients. Corporate and editorial clients have trusted my photography and logistical skills to capture the best creative images of a situation or person – on-time and on-budget."
        />
      </section>

      <section className="my-[150px] w-[1120px] mx-auto ">
          <InstaFeed imgs={images} />
      </section>
    </main>
  );
}
