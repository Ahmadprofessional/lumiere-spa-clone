import { Header } from "@/components/Header";
import { SignatureExperiences } from "@/components/SignatureExperiences";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <SignatureExperiences />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
