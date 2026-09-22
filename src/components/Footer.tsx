import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative isolate mt-auto w-full text-black">
      <Image
        src="/images/page-title-bg.jpeg"
        alt=""
        fill
        className="-z-10 object-cover"
        aria-hidden
      />

      <div className="mx-auto grid max-w-[1345px] grid-cols-1 gap-12 px-6 py-16 text-center md:grid-cols-3 md:py-20 md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="relative h-[130px] w-[130px] rounded-full bg-white p-2 shadow-sm">
            <Image src="/images/cpd-logo.png" alt="Centre of CPD Excellence" fill className="object-contain p-1" />
          </div>
          <div className="relative h-[60px] w-[180px]">
            <Image
              src="/images/westminster-logo-color.svg"
              alt="Westminster Insurance"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-heading text-xl font-medium uppercase text-black">
            Social Links:
          </h3>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-[10%] bg-white text-[#69727D]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-[10%] bg-white text-[#69727D]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 md:items-start">
          <h3 className="font-heading text-2xl font-medium uppercase text-black">
            Massage Availability
          </h3>
          <p className="font-sans text-2xl font-bold text-black">Open:</p>
          <p className="font-sans text-base font-bold text-black">Monday To Sunday</p>
          <p className="font-sans text-base font-bold text-black">8am - 9pm</p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <h3 className="font-heading text-2xl font-semibold uppercase text-black">
            Book Your Appointment
          </h3>
          <p className="font-sans text-lg font-light text-black">
            Indulge in luxury. You deserve it.
          </p>
          <Link
            href="/book-your-appointment/"
            className="rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-medium text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </footer>
  );
}
