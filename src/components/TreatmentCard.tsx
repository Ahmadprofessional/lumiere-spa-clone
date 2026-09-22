import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/types/treatment";

export function TreatmentCard({
  treatment,
  showDivider = false,
}: {
  treatment: Treatment;
  showDivider?: boolean;
}) {
  return (
    <div className="flex flex-col border-[0.8px] border-[#C89A5B]">
      <div className="relative aspect-square w-full">
        <Image
          src={treatment.image.src}
          alt={treatment.image.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-3 px-8 py-6 text-center">
        <h3 className="font-heading text-2xl font-semibold uppercase text-black">
          {treatment.title}
        </h3>
        {showDivider && <hr className="w-[100px] border-t border-[#C89A5B]" />}
        <p className="font-sans text-lg font-medium uppercase text-black leading-relaxed">
          {treatment.priceLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="font-sans text-lg font-normal text-black">{treatment.description}</p>
        <Link
          href={treatment.bookHref}
          className="mt-2 inline-block w-fit rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
