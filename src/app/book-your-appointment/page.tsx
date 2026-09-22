import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { PageTitleBanner } from "@/components/PageTitleBanner";

export const metadata: Metadata = {
  title: "Book Your Appointment | Lumière — Luxury Wellness & Spa",
};

export default function BookYourAppointmentPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PageTitleBanner title="Book Your Appointment Here." />

        <section className="flex justify-center px-6 py-10">
          <iframe
            src="https://clinicconsent.com/book/lumiere-spa"
            title="Book an appointment"
            width="100%"
            height="760"
            style={{ border: 0, maxWidth: "900px" }}
            loading="lazy"
          />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
