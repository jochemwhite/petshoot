import Banner from "@/components/banner";
import ContactForm from "@/components/forms/contact-form";
import SocialLlist from "@/components/social-list";
import { ContactDetails } from "@/lib/const";
import { FaDollarSign, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="h-full  mt-20 ">
      {/* Banner */}
      <Banner
        page="Contact Me"
        breadcrumb="contact"
        img={{
          src: "/img/dogs/dog4.jpg",
          alt: "",
        }}
      />

      {/* contact form */}
      <section className="container grid grid-cols-1 lg:grid-cols-2 my-8">
        <div className="flex flex-col items-center justify-center">
          <div>
            <div>
              <h2 className="text-2xl font-bold text-left">Contactgegevens</h2>
            </div>
            {ContactDetails.map((contact, index) => (
              <div key={index} className="flex items-center mt-4">
                <contact.icon className="text-2xl text-subtext" />
                <a href={contact.link} className="ml-2 text-subtext">
                  {contact.value}
                </a>
              </div>
            ))}
            <SocialLlist />
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
