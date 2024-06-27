import Banner from "@/components/banner";
import MyLatestWork from "@/components/my-latest-work";
import SocialButton from "@/components/social-button";
import SocialLlist from "@/components/social-list";
import TextColumn from "@/components/ui/text-column";
import { images } from "@/lib/const";
import Image from "next/image";

const columns: { title: string; text: string }[] = [
  {
    title: "BRAINSTORM TO FIND NEW IDEAS",
    text: "Cras accumsan felis ac ultricies pulvinar. Curabitur pellentesque, neque nec tincidunt pellentesque, eros sapien imperdiet eros, in tempor lectus libero a ligula.",
  },
  {
    title: "SHOOT IN DIFFERENT CONDITIONS",
    text: "Cras accumsan felis ac ultricies pulvinar. Curabitur pellentesque, neque nec tincidunt pellentesque, eros sapien imperdiet eros, in tempor lectus libero a ligula.",
  },
  {
    title: "BRINGING RESULTS TO CUSTOMERS",
    text: "Cras accumsan felis ac ultricies pulvinar. Curabitur pellentesque, neque nec tincidunt pellentesque, eros sapien imperdiet eros, in tempor lectus libero a ligula.",
  },
];

export default function AboutPage() {
  return (
    <main className="h-full  mt-20 ">
      {/* Banner */}
      <Banner
        page="About Me"
        breadcrumb="about"
        img={{
          src: "/img/dogs/dog1.jpg",
          alt: "",
        }}
      />

      {/* Wie Ben ik */}
      <section className="grid grid-cols-1 gap-4 justify-center items-center  mt-8 lg:grid-cols-2 container ">
        <div className="flex flex-col justify-center items-center lg:order-2 lg:items-start">
          <h2 className="text-4xl text-secondary">Wie ben ik?</h2>
          <p className="text-lg text-secondary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quidem, quod, ipsam quos quibusdam quas nemo voluptates
            doloremque consequuntur doloribus. Quos, quas. Quisquam voluptatem, quidem, quod, ipsam quos quibusdam quas nemo voluptates doloremque
            consequuntur doloribus. Quos, quas.
          </p>

          <SocialLlist />
        </div>

        <div className="w-full h-96 relative mx-auto mt-8">
          <Image src="/img/dogs/dog2.jpg" layout="fill" objectFit="cover" objectPosition="center" alt="" />
        </div>
      </section>

      {/* My Latest Works */}
      <section className="bg-danger w-full h-full py-8 my-8 ">
        <MyLatestWork images={images} />
      </section>

      {/* Hoe werk ik */}

      <section className="mt-8 lg:grid-cols-3 container my-8 lg:w-[1200px] ">
        {/* <h2 className="text-center text-4xl text-subtext my-4">Hoe ik werk</h2> */}

        <div className="grid grid-cols-1 gap-4 justify-center items-center lg:grid-cols-3">
          {columns.map((column, index) => (
            <TextColumn key={index} title={`0${index + 1}.`} text={column.text} subTitle={column.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
