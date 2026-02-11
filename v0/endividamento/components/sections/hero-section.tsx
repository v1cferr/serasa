"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { OrganicBlob } from "@/components/ui/organic-blob";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function HeroSection() {
  const scrollToContent = () => {
    document.getElementById("entenda")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute top-20 -left-32 opacity-60">
        <OrganicBlob size={600} />
      </div>
      <div className="absolute bottom-10 -right-40 opacity-40">
        <OrganicBlob size={500} />
      </div>
      
      {/* Floating stats - visible on desktop, hidden on mobile */}
      <div className="absolute top-32 right-24 bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-5 max-w-[200px] max-lg:hidden">
        <p className="text-muted-foreground text-sm mb-1">Brasileiros endividados</p>
        <p className="text-3xl font-bold text-primary">
          <AnimatedCounter end={72} suffix="M" />
        </p>
      </div>
      
      <div className="absolute bottom-32 left-24 bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-5 max-w-[220px] max-lg:hidden">
        <p className="text-muted-foreground text-sm mb-1">Podem renegociar</p>
        <p className="text-3xl font-bold text-primary">
          <AnimatedCounter end={89} suffix="%" />
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Seu recomeço financeiro</span>
        </div>
        
        <h1 className="text-8xl max-lg:text-6xl max-md:text-5xl font-bold tracking-tight mb-6 leading-[0.95]">
          <span className="block text-foreground">O peso da dívida</span>
          <span className="block text-primary mt-2">não precisa ser seu.</span>
        </h1>
        
        <p className="text-2xl max-md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Entenda as causas, conheça as soluções e dê o primeiro passo 
          para reconquistar sua{" "}
          <span className="text-foreground font-medium">liberdade financeira</span>.
        </p>

        <div className="flex flex-row max-sm:flex-col gap-4 justify-center items-center">
          <MagneticButton onClick={scrollToContent}>
            Começar agora
          </MagneticButton>
          <MagneticButton variant="outline" onClick={scrollToContent}>
            Entender o problema
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm">Deslize para explorar</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
