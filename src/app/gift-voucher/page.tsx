import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { GiftIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Gift Voucher | Lumière — Luxury Wellness & Spa",
};

const steps = [
  {
    icon: "/images/gift-step-1.png",
    title: "1. Choose a treatment",
    body: "Create the perfect gift in just a few clicks.",
  },
  {
    icon: "/images/gift-step-2.png",
    title: "2. Pay securely",
    body: "Complete your purchase safely and easily online.",
  },
  {
    icon: "/images/gift-step-3.png",
    title: "3. Receive your voucher",
    body: "Get a beautifully designed voucher to give to your friends or loved ones.",
  },
];

function CreateVoucherButton() {
  return (
    <Link
      href="/book-your-appointment/"
      className="inline-flex items-center gap-[5px] rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
    >
      <GiftIcon className="h-5 w-5" />
      Create A Gift Voucher
    </Link>
  );
}

export default function GiftVoucherPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section
          className="flex items-center bg-cover bg-center px-6 py-24 md:px-16 md:py-32"
          style={{ backgroundImage: "url(/images/gift-hero-bg.jpg)" }}
        >
          <div className="flex max-w-lg flex-col gap-5">
            <h1 className="font-heading text-[36px] font-medium uppercase leading-tight text-white md:text-[45px]">
              Give the Gift
              <br />
              of Relaxation
            </h1>
            <div className="h-[1.6px] w-[132px] bg-white/80" />
            <p className="font-sans text-lg text-white">
              Treat your friends or loved ones to a luxurious spa experience at Lumière. Choose a
              treatment, pay securely online and we&rsquo;ll create a beautiful gift voucher for you
              to give or send directly to them.
            </p>
            <div>
              <CreateVoucherButton />
            </div>
          </div>
        </section>

        <section
          className="px-6 py-16 md:py-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #5D3500 0%, #FFB9E5 50.1068%, #E79100 100%)",
          }}
        >
          <div className="mx-auto flex max-w-[1345px] flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-[32px] font-medium uppercase text-white md:text-[45px]">
              How It Works
            </h2>
            <p className="font-sans text-lg font-medium uppercase text-white">
              Create the perfect gift in just a few clicks.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="flex flex-col items-center gap-3">
                  <div className="relative h-[69px] w-[69px] overflow-hidden rounded-full border-[1.6px] border-[#FFF7E8]">
                    <Image src={step.icon} alt="" fill className="object-fill" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">{step.title}</h3>
                  <p className="max-w-xs font-sans text-lg text-white/90">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <CreateVoucherButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
