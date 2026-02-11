import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ConsequencesSection from "@/components/ConsequencesSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ConsequencesSection />
      <SolutionsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
