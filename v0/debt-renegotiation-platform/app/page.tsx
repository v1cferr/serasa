import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
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
      <div className="min-h-screen">
        <SiteHeader />
        <main>
          <HeroSection />
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
