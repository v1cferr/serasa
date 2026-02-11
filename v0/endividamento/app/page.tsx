import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ImpactSection />
        <section id="solucoes">
          <SolutionsSection />
        </section>
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
