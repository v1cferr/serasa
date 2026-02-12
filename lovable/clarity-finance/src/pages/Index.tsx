import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FinancialWizard from "@/components/FinancialWizard";
import FinancialResults from "@/components/FinancialResults";
import Chatbot from "@/components/Chatbot";
import EducationSections from "@/components/EducationSections";

interface FinancialData {
  divida: number;
  rendaFixa: number[];
  rendaVariavel: number[];
  gastosFixos: number[];
  gastosVariaveis: number[];
}

const Index = () => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col items-center" style={{ paddingTop: 100 }}>
        {/* Hero */}
        <HeroCarousel />

        {/* Financial Analysis */}
        <section id="analise" className="w-full py-16 flex flex-col items-center">
          <div className="max-w-[1366px] w-full px-[3%]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Análise Financeira</h2>
              <p className="text-muted-foreground">Cadastre seus dados e descubra seu panorama financeiro</p>
            </div>

            {!financialData ? (
              <FinancialWizard onComplete={setFinancialData} />
            ) : (
              <div className="flex flex-col gap-8">
                <FinancialResults data={financialData} />
                <div className="text-center">
                  <button
                    onClick={() => setFinancialData(null)}
                    className="btn-serasa px-6 py-3 border border-border text-muted-foreground font-medium"
                  >
                    Refazer Análise
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Chatbot */}
        <section id="chatbot" className="w-full py-16 bg-secondary/30">
          <div className="max-w-[1366px] mx-auto px-[3%]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Assistente Financeiro</h2>
              <p className="text-muted-foreground">Converse com nosso chatbot para dicas personalizadas</p>
            </div>
            <Chatbot financialData={financialData} />
          </div>
        </section>

        {/* Education Sections 4, 5, 6 */}
        <EducationSections />

        {/* Footer */}
        <footer className="w-full bg-foreground text-background py-8">
          <div className="max-w-[1366px] mx-auto px-[3%] text-center">
            <p className="text-sm opacity-70">© 2026 Serasa Experian — Landing Page Educativa sobre Endividamento</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
