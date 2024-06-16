import { Hero } from "@/components/Hero";
import CategoryCard from "@/components/category-card";
import Image from "next/image";

export default function Home() {
  const images = ["/img/dogs/dog1.jpg", "/img/cats/cat9.jpg"];

  return (
    <main className="">
      <section className="min-h-screen">
        <Hero images={images} />
      </section>

      <section className="w-[1600px] flex justify-between items-center mx-auto my-[150px]">
        <div className="flex-1">
          <h2 className="text-3xl mb-5">Portfolio Showcase</h2>

          <p className="text-sm text-secondary">Some of the best photos from our studi</p>
        </div>

        <div className="flex-1">
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

      <section className="grid grid-cols-3 gap-7  w-[1600px] mx-auto items-center justify-center  ">
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
        <CategoryCard img="/img/dogs/dog1.jpg" alt="dog1" catagory="Dogs" href="/catagorys/dogs" />
      </section>
    </main>
  );
}
