import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Level 04 Swedish Massage Training Course | Lumière — Luxury Wellness & Spa",
};

export default function Level04SwedishMassagePage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative w-full">
          <Image
            src="/images/training-course-flyer.jpg"
            alt="Level 04 Swedish Massage Training Course"
            width={1024}
            height={1536}
            sizes="100vw"
            className="h-auto w-full"
            priority
          />
        </section>

        <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
          <h3 className="font-heading text-2xl font-semibold text-black md:text-3xl">
            Ready to Begin?
          </h3>
          <p className="max-w-xl font-sans text-lg text-black">
            Develop your skills. Build your confidence. Expand your opportunities. Enquire
            today about upcoming course dates and availability.
          </p>
          <Link
            href="mailto:info@lumierespa.co.uk"
            className="mt-2 inline-block rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
          >
            Email Us If You Are Interested
          </Link>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
