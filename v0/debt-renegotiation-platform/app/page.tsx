"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroCarousel } from "@/components/hero-carousel";
import { FinancialWizard } from "@/components/financial-wizard";
import { ChatCTA } from "@/components/chat-cta";
import { MaslowMethod } from "@/components/maslow-method";
import { BudgetSimulator } from "@/components/budget-simulator";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FloatingActionButton } from "@/components/floating-action-button";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ChatProvider } from "@/components/chat-context";
import { SiteFooter } from "@/components/site-footer";
import { FinancialResults } from "@/components/financial-results";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [financialData, setFinancialData] = useState<any>(null);

  return (
    <ChatProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SiteHeader />
        <main>
          <HeroCarousel />

          <div className="bg-background min-h-[600px] py-8">
            {!financialData ? (
              <FinancialWizard onComplete={setFinancialData} />
            ) : (
              <div className="flex flex-col gap-8 pb-12">
                <FinancialResults data={financialData} />
                <div className="text-center">
                  <Button
                    onClick={() => setFinancialData(null)}
                    variant="outline"
                    className="border-experian-dark-blue text-experian-dark-blue hover:bg-experian-dark-blue/5"
                  >
                    Refazer Análise
                  </Button>
                </div>
              </div>
            )}
          </div>

          <ChatCTA />
          <section id="metodo">
            <MaslowMethod />
          </section>
          <section id="simulador">
            <BudgetSimulator />
          </section>
          <section id="dashboard">
            <DashboardPreview />
          </section>
        </main>
        <SiteFooter />
        <FloatingActionButton />
        <ChatSidebar />
      </div>
    </ChatProvider>
  );
}
