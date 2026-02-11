import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative bg-primary text-primary-foreground overflow-hidden">


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="animate-fade-up mb-6">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold tracking-wide">
              VOCÊ NÃO ESTÁ SOZINHO
            </span>
          </div>

          {/* Grid Layout for Headline and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Giant Headline */}
            <div className="lg:col-span-8">
              <h1 className="animate-fade-up-delay-1 text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight font-['Bebas_Neue'] text-primary-foreground mb-8 text-left">
                DÍVIDAS
                <br />
                <span className="text-accent">NÃO TE</span>
                <br />
                DEFINEM
              </h1>
            </div>

            {/* Subtitle positioned next to headline on large screens */}
            <div className="lg:col-span-4 animate-fade-up-delay-2 relative z-10 lg:pb-8">
              <p className="text-lg md:text-xl font-light leading-relaxed text-primary-foreground/80 mb-8 max-w-md">
                Milhões de brasileiros enfrentam dificuldades financeiras.
                Estamos aqui para ajudar você a <strong className="text-accent font-medium">retomar o controle</strong>,
                sem julgamentos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" className="group w-full sm:w-auto">
                  Começar agora
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs tracking-widest uppercase">Role para descobrir</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-6 hidden 2xl:block pointer-events-none select-none">
        <div className="vertical-text text-primary-foreground/5 text-xl tracking-[0.5em] font-light">
          LIBERDADE FINANCEIRA
        </div>
      </div>

      {/* Large decorative number */}
      <div className="absolute bottom-0 right-0 text-primary-foreground/5 font-['Bebas_Neue'] text-[40vw] leading-none pointer-events-none">
        01
      </div>
    </section>
  );
};

export default HeroSection;
