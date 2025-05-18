
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiseasesSection from "@/components/DiseasesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <DiseasesSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
