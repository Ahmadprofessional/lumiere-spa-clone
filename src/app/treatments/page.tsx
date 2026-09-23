import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { PageTitleBanner } from "@/components/PageTitleBanner";
import { TreatmentCard } from "@/components/TreatmentCard";
import type { Treatment } from "@/types/treatment";

export const metadata: Metadata = {
  title: "Treatments | Lumière — Luxury Wellness & Spa",
};

const treatments: Treatment[] = [
  {
    title: "Back, Neck & Shoulder Escape",
    image: { src: "/images/treatment-back-neck-shoulder-v2.png", alt: "Back, neck & shoulder massage" },
    priceLines: ["30 Minutes | £45"],
    description:
      "Melt away the stresses of everyday life with this focused massage designed to ease built-up tension in the back, neck and shoulders. Gentle yet effective techniques release tight muscles, improve circulation and leave you feeling lighter, calmer and completely refreshed. Perfect for those short on time but in need of a luxurious reset.",
    bookHref: "/book-your-appointment/",
  },
  {
    title: "Swedish Relaxation Massage",
    image: { src: "/images/treatment-swedish.avif", alt: "Swedish relaxation massage" },
    priceLines: ["45 Minutes | £75", "60 Minutes | £90", "90 Minutes | £120"],
    description:
      "A timeless massage designed to soothe both body and mind. Using long, flowing movements and gentle kneading techniques, this deeply relaxing treatment eases muscular tension, improves circulation and restores a sense of calm and wellbeing, leaving you feeling completely renewed.",
    bookHref: "/book-your-appointment/",
  },
  {
    title: "Aromatherapy Massage",
    image: { src: "/images/treatment-aromatherapy.avif", alt: "Aromatherapy massage" },
    priceLines: ["45 Minutes | £75", "60 Minutes | £90", "90 Minutes | £120"],
    description:
      "Escape into deep relaxation with a luxurious massage using a bespoke blend of premium aromatherapy essential oils, carefully selected to enhance your wellbeing. Flowing massage techniques calm the nervous system, relieve stress and nourish the skin, creating a truly indulgent sensory experience.",
    bookHref: "/book-your-appointment/",
  },
  {
    title: "Deep Tissue Muscle Recovery",
    image: { src: "/images/treatment-deep-tissue.avif", alt: "Deep tissue muscle recovery massage" },
    priceLines: ["45 Minutes | £75", "60 Minutes | £90", "90 Minutes | £120"],
    description:
      "A restorative massage designed to target chronic tension, muscle tightness and areas of discomfort. Slow, firm pressure and advanced techniques work deep into the muscles to relieve aches, improve mobility and encourage recovery. Ideal for those experiencing persistent tension or looking to restore balance to the body.",
    bookHref: "/book-your-appointment/",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageTitleBanner title="Treatments" />

        <section className="flex flex-col md:flex-row">
          <div
            className="min-h-[300px] flex-1 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/treatments-hero-bg.jpg)" }}
          />
          <div className="flex flex-1 flex-col gap-5 bg-white px-6 py-10 md:px-16 md:py-20">
            <h2 className="font-heading text-[32px] font-medium uppercase leading-tight text-black md:text-[45px]">
              Expert Hands.
              <br />
              Deep Relaxation.
              <br />
              <span className="text-[#DFA33B]">Lasting Wellbeing</span>
            </h2>
            <p className="max-w-lg font-sans text-lg font-medium text-black">
              At Lumière, we believe true wellness begins with taking time to slow down, breathe and
              restore both body and mind.
            </p>
            <p className="max-w-lg font-sans text-lg font-medium text-black">
              Our experienced therapists provide personalised massage treatments designed to ease
              muscular tension, reduce stress and leave you feeling renewed. Whether you&rsquo;re
              seeking relaxation, recovery or simply time for yourself, every treatment is tailored to
              your individual needs.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#F9E7C6" }}>
          <div className="mx-auto max-w-[1345px]">
            <h2 className="text-center font-heading text-[32px] font-medium text-black md:text-[45px]">
              Our Treatments
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:mt-14">
              {treatments.map((treatment) => (
                <TreatmentCard key={treatment.title} treatment={treatment} showDivider />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
