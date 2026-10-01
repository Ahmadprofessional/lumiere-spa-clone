import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "About Us | Lumière — Luxury Wellness & Spa",
};

const team = [
  {
    name: "Karina Farah El-Harake",
    title: "MSc/ PGDip Aesthetic Medicine",
    image: "/images/team-karina.jpg",
    profile:
      "Experienced and enthusiastic Medical Aesthetician and Certified Trainer with specialist expertise in medical aesthetics and regenerative medicine. Professional, communicative, intuitive, and proactive with strong interpersonal skills.",
  },
  {
    name: "Rachel",
    title: "Massage Therapist & Trainer",
    image: "/images/team-rachel.jpg",
    profile:
      "With 7 years of experience as a massage therapist and more recently a trainer, I’m passionate about helping people, sharing knowledge, and supporting others in learning new skills. I love personal growth, health, and wellbeing. In my spare time, you’ll usually find me at the gym, focusing on fitness and staying active. I’m all about helping others, building confidence, learn, and reach their full potential.",
  },
  {
    name: "Ellie Judd",
    title: "Massage Therapist",
    image: "/images/team-ellie.jpg",
    profile:
      "Hi, I’m Ellie! I’m a second-year Physiotherapy student at Oxford Brookes University. Alongside my studies, I enjoy playing football and spending time socialising with friends. I’m delighted to be joining the team as a Massage Therapist and am really looking forward to gaining valuable experience, developing my skills and meeting everyone. I’m excited to get started and look forward to seeing you all soon!",
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative aspect-video w-full">
          <Image
            src="/images/about-hero-v2.jpg"
            alt="Lumière massage therapy"
            fill
            priority
            className="object-cover"
          />
        </section>

        {/* Who We Are */}
        <section
          className="px-6 py-20 text-center md:py-28"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #5D3500 0%, #FFB9E5 50.1068%, #E79100 100%)",
          }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
              Who We Are
            </h2>
            <p className="font-heading text-xl font-light leading-relaxed text-white md:text-2xl">
              Inspired by the timeless sophistication of the French Riviera, Lumière serves as a
              sanctuary where wellness and refined luxury unite in perfect harmony. Here, you can
              relax and revitalise in a serene environment crafted to awaken your senses. Enjoy our
              outstanding services that focus on your well-being and tranquility Uncover a refuge
              where every detail is thoughtfully designed for your utmost comfort.
            </p>
            <Link
              href="/treatments/"
              className="mt-2 inline-block rounded-[2px] bg-black px-6 py-3 font-sans text-sm font-semibold text-white"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Our Story video */}
        <section className="w-full" style={{ backgroundColor: "rgba(242,207,143,0.67)" }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/videos/about-story.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="h-full max-h-[600px] w-full object-cover"
          />
        </section>

        {/* Meet the Team */}
        <section
          className="px-6 py-16 md:py-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #5D3500 0%, #FFB9E5 50.1068%, #E79100 100%)",
          }}
        >
          <h2 className="text-center font-heading text-[32px] font-medium uppercase text-white md:text-[45px]">
            Meet The Team
          </h2>

          <div className="mx-auto mt-10 grid max-w-[1345px] grid-cols-1 justify-items-center gap-10 md:mt-14 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex w-full max-w-sm flex-col items-center gap-4 border-[1.6px] border-[#FFF7E8] px-6 py-8 text-center"
              >
                <div className="relative flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#F3E7D1]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  ) : (
                    <span className="font-heading text-5xl font-semibold text-[#C89A5B]">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl font-semibold uppercase text-white">
                  {member.name}
                </h3>
                <p className="font-sans text-base text-[#FFF7E8]">{member.title}</p>
                <p className="font-sans text-sm font-semibold uppercase tracking-wide text-white">
                  Profile
                </p>
                <p className="font-sans text-base text-white/90">{member.profile}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-[900px] overflow-hidden md:mt-14">
            <Image
              src="/images/team-group.jpg"
              alt="Lumière team with their Swedish massage training certificates"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
