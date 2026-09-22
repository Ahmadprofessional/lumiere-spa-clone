import Image from "next/image";
import Link from "next/link";

export interface Service {
  title: string;
  image: { src: string; alt: string };
  durationRange: string;
  fromPrice: string;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col items-center gap-2 border-[0.8px] border-[#B98F6D] pb-6 text-center">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image src={service.image.src} alt={service.image.alt} fill className="object-cover" />
      </div>
      <h3 className="mt-3 font-heading text-2xl font-semibold uppercase text-black">
        {service.title}
      </h3>
      <p className="font-sans text-sm text-black/60">{service.durationRange}</p>
      <p className="font-sans text-sm text-black/60">{service.fromPrice}</p>
      <Link
        href="/book-your-appointment/"
        className="mt-2 inline-block rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-base font-semibold text-white"
      >
        Book Now
      </Link>
    </div>
  );
}
