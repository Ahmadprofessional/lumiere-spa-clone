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

const whoItsFor = [
  "Beauticians & Beauty Therapists",
  "Aesthetic Practitioners",
  "Physiotherapists",
  "Chiropractors",
  "Osteopaths",
  "Sports Therapists",
  "Wellness & Holistic Therapists",
  "Healthcare Professionals",
  "Fitness & Personal Training Professionals",
  "Individuals looking to begin a career in massage and wellness",
];

const whatYouWillLearn = [
  "Principles and benefits of Swedish massage",
  "Relevant anatomy and physiology",
  "Health, safety and hygiene",
  "Client consultation and treatment planning",
  "Contraindications and precautions",
  "Client positioning and comfort",
  "Professional massage oils and products",
  "Effleurage",
  "Petrissage",
  "Friction techniques",
  "Tapotement",
  "Vibration techniques",
  "Full-body Swedish massage sequence",
  "Adapting pressure and techniques to individual clients",
  "Client care and communication",
  "Treatment aftercare",
  "Professional standards and safe practice",
];

const assessment = [
  "Practical observation",
  "Demonstration of massage techniques",
  "Client consultation",
  "Health & safety knowledge",
  "Treatment planning",
  "Theory knowledge",
  "Aftercare and contraindications",
];

const courses = [
  { id: "level-04-a", duration: "01/02", image: "/images/training-course.jpg" },
  { id: "level-04-b", duration: "02 Days", image: "/images/training-course-2.png" },
];

function CourseDetailCard({ duration }: { duration: string }) {
  return (
    <div className="h-full border-[1.6px] border-[#C89A5B] px-6 py-10 md:px-10 md:py-14">
      <p className="font-sans text-sm font-semibold uppercase tracking-wide text-[#C89A5B]">
        82 CPD Points | Practical Hands-On Training | Certificate on Completion
      </p>
      <h2 className="mt-3 font-heading text-[28px] font-semibold text-black md:text-[36px]">
        Level 04 – Swedish Massage Training Course
      </h2>
      <p className="mt-2 font-sans text-base font-semibold uppercase text-[#44413C]">
        Price £699 &nbsp;|&nbsp; Duration {duration}
      </p>
      <p className="mt-4 font-sans text-lg text-black">
        Develop professional Swedish massage skills through a combination of theory, tutor
        demonstration and supervised hands-on practical training.
      </p>
      <p className="mt-4 font-sans text-lg text-black">
        Our Level 04 Swedish Massage Training Course is designed for complete beginners as well as
        existing beauty, aesthetics, wellness and healthcare professionals who would like to
        develop their practical massage skills or expand the treatments they offer.
      </p>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">
        Who Is This Course For?
      </h3>
      <p className="mt-2 font-sans text-lg text-black">
        This course is suitable for complete beginners and professionals wishing to add Swedish
        massage to their existing skill set, including:
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1 font-sans text-lg text-black sm:grid-cols-2">
        {whoItsFor.map((item) => (
          <li key={item} className="list-disc pl-1 marker:text-[#C89A5B]">
            {item}
          </li>
        ))}
      </ul>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">Entry Requirements</h3>
      <p className="mt-2 font-sans text-lg text-black">
        No previous massage qualification or experience is required. The course is suitable for
        beginners as well as experienced professionals. Learners should have a good understanding
        of written and spoken English and be able to participate safely in practical massage
        training.
      </p>
      <p className="mt-3 font-sans text-lg text-black">
        Previous experience or qualifications in beauty, aesthetics, healthcare, fitness or
        wellness are beneficial but not essential.
      </p>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">What You Will Learn</h3>
      <p className="mt-2 font-sans text-lg text-black">
        The course combines essential theoretical knowledge with extensive practical training,
        including:
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1 font-sans text-lg text-black sm:grid-cols-2">
        {whatYouWillLearn.map((item) => (
          <li key={item} className="list-disc pl-1 marker:text-[#C89A5B]">
            {item}
          </li>
        ))}
      </ul>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">Practical Training</h3>
      <p className="mt-2 font-sans text-lg text-black">
        A strong emphasis is placed on hands-on practical training. Students will observe tutor
        demonstrations before practising Swedish massage techniques under supervision. You will
        develop confidence in consultation, client positioning, treatment planning and performing
        a professional full-body Swedish massage sequence.
      </p>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">Assessment</h3>
      <p className="mt-2 font-sans text-lg text-black">
        Assessment takes place throughout the course and may include:
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1 font-sans text-lg text-black sm:grid-cols-2">
        {assessment.map((item) => (
          <li key={item} className="list-disc pl-1 marker:text-[#C89A5B]">
            {item}
          </li>
        ))}
      </ul>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">Certification</h3>
      <p className="mt-2 font-sans text-lg text-black">
        Upon successful completion of the course and required assessments, students will receive a
        Level 04 Swedish Massage Training Certificate and 82 CPD Points.
      </p>

      <hr className="my-8 border-t border-black/10" />

      <h3 className="font-heading text-2xl font-semibold text-[#C89A5B]">Why Train With Us?</h3>
      <p className="mt-2 font-sans text-lg text-black">
        Professional hands-on tuition with an emphasis on developing practical skills, confidence
        and safe treatment delivery. Whether you are entering the wellness industry for the first
        time or already work within beauty, aesthetics, physiotherapy, chiropractic, osteopathy,
        sports therapy or healthcare, the course provides an opportunity to broaden your practical
        treatment offering.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 border-t border-black/10 pt-10 text-center">
        <h3 className="font-heading text-2xl font-semibold text-black md:text-3xl">
          Ready to Begin?
        </h3>
        <p className="font-sans text-lg text-black">
          Develop your skills. Build your confidence. Expand your opportunities. Enquire today
          about upcoming course dates and availability.
        </p>
        <p className="font-sans text-sm uppercase tracking-wide text-[#C89A5B]">
          82 CPD Points • Hands-On Practical Training • Certificate on Completion
        </p>
        <Link
          href="mailto:info@lumierespa.co.uk"
          className="mt-2 inline-block rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
        >
          Email Us If You Are Interested
        </Link>
      </div>
    </div>
  );
}

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

          <div className="mx-auto mt-10 grid max-w-[1160px] grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col items-center gap-6">
                <div className="flex w-full flex-col items-center gap-3 border-[1.6px] border-[#C89A5B] pb-6 text-center">
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
                </div>

                <Link
                  href="mailto:info@lumierespa.co.uk"
                  className="inline-block rounded-[3px] bg-[#C89A5B] px-6 py-3 font-sans text-xl font-semibold text-white"
                >
                  Email Us If You Are Interested
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Course detail */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1345px] grid-cols-1 gap-8 lg:grid-cols-2">
            <CourseDetailCard duration="01/02" />
            <CourseDetailCard duration="02 Days" />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
