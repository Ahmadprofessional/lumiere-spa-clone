import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { PageTitleBanner } from "@/components/PageTitleBanner";

export const metadata: Metadata = {
  title: "Contact Us | Lumière — Luxury Wellness & Spa",
};

const formFields = [
  { name: "name", label: "Name *", type: "text", required: true },
  { name: "email", label: "Email *", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "address", label: "Address", type: "text" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function ContactUsPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageTitleBanner title="Contact Us" />

        {/* Contact form on gradient background */}
        <section
          className="px-6 py-16 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #5D3500 0%, #FFB9E5 50.1068%, #E79100 100%)",
          }}
        >
          <div className="mx-auto grid max-w-[1345px] grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#B1973F] md:text-4xl">
                Contact Us
              </h2>
              <div className="font-heading text-xl font-medium leading-relaxed text-[#B1973F] md:text-2xl">
                Leonardo Royal Hotel Oxford
                <br />
                JUVENATE Health Club
              </div>
              <div className="font-heading text-xl font-medium leading-relaxed text-[#B1973F] md:text-2xl">
                Godstow Rd, Wolvercote,
                <br />
                Oxford OX2 8AL
              </div>
            </div>

            <form className="flex flex-col gap-4">
              {formFields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  required={field.required}
                  className="w-full bg-[#FFCBAA]/40 px-3 py-3 font-sans text-black placeholder:text-black/70 focus:outline-none"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full bg-[#FFCBAA]/40 px-3 py-3 font-sans text-black placeholder:text-black/70 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-fit rounded-[2px] bg-[#373B4D] px-8 py-3 font-sans text-base text-[#F0F0F0]"
              >
                Send
              </button>
            </form>
          </div>
        </section>

        {/* Map */}
        <section className="min-h-[400px] w-full">
          <iframe
            title="Lumière location map"
            src="https://maps.google.com/maps?q=Leonardo%20Royal%20Hotel%20Oxford%20%20JUVENATE%20Health%20Club%20%20Godstow%20Rd%2C%20Wolvercote%2C%20Oxford%20OX2%208AL&t=m&z=10&output=embed&iwloc=near"
            className="h-[400px] w-full border-0"
            loading="lazy"
          />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
