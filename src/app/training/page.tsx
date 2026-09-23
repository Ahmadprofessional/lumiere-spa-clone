import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { PageTitleBanner } from "@/components/PageTitleBanner";

export const metadata: Metadata = {
  title: "Training | Lumière — Luxury Wellness & Spa",
};

const courses = [
  { id: "level-04-a", duration: "01/02", image: "/images/training-course-v2.jpg" },
];

export default function TrainingPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageTitleBanner title="Training" />

        <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#F9E7C6" }}>
          <h2 className="text-center font-heading text-[32px] font-medium text-[#171716] md:text-[45px]">
            Our Courses
          </h2>

          <div className="mx-auto mt-10 grid max-w-[560px] grid-cols-1 gap-8 md:mt-14">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex w-full flex-col items-center gap-3 border-[1.6px] border-[#C89A5B] pb-6 text-center"
              >
                <div className="relative aspect-[1600/870] w-full">
                  <Image
                    src={course.image}
                    alt="Swedish massage training course"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold uppercase text-[#1C1C1B]">
                  Swedish Massage Level 4 Training Course
                </h3>
                <hr className="w-full border-t border-black/20" />
                <p className="font-sans text-lg font-medium uppercase text-[#44413C]">
                  Course Price | £699
                </p>
                <p className="font-sans text-base uppercase text-[#44413C]">
                  Duration: {course.duration}
                </p>
                <p className="font-sans text-lg italic text-[#44413C]">
                  Fully CPD Accredited Course
                  <br />
                  Become Fully Certified in Swedish Massage
                  <br />
                  Practical Hands-On Training
                </p>

                <Link
                  href="/training/level-04-swedish-massage/"
                  className="mt-2 inline-block rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
