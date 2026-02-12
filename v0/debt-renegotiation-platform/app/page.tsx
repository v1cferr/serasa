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

export default function Page() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SiteHeader />
        <main>
          <HeroCarousel />
          <div className="bg-background">
            <FinancialWizard />
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
