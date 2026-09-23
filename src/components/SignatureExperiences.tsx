import { ServiceCard, type Service } from "@/components/ServiceCard";

const services: Service[] = [
  {
    title: "Back, Neck & Shoulder Escape",
    image: { src: "/images/treatment-back-neck-shoulder-v2.png", alt: "Back, neck & shoulder massage" },
    durationRange: "30 min",
    fromPrice: "From £45",
  },
  {
    title: "Swedish Relaxation Massage",
    image: { src: "/images/treatment-swedish.avif", alt: "Swedish relaxation massage" },
    durationRange: "45 min - 1 hr 30 min",
    fromPrice: "From £75",
  },
  {
    title: "Aromatherapy Massage",
    image: { src: "/images/treatment-aromatherapy.avif", alt: "Aromatherapy massage" },
    durationRange: "45 min - 1 hr 30 min",
    fromPrice: "From £80",
  },
  {
    title: "Deep Tissue Massage",
    image: { src: "/images/treatment-deep-tissue.avif", alt: "Deep tissue massage" },
    durationRange: "45 min - 1 hr 30 min",
    fromPrice: "From £75",
  },
];

export function SignatureExperiences() {
  return (
    <section
      className="px-6 py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #5D3500 0%, #FFB9E5 50.1068%, #E79100 100%)",
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-[32px] font-medium uppercase text-black md:text-[45px]">
          Signature Experiences
        </h2>
        <p className="mt-3 font-sans text-base font-medium uppercase text-black md:text-lg">
          Curated Rituals For Mind, Body &amp; Soul
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1345px] grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
