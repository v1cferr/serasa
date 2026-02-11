import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Big Statement */}
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-['Bebas_Neue'] text-foreground mb-8">
              A MUDANÇA
              <br />
              COMEÇA
              <br />
              <span className="accent-underline text-accent">AGORA</span>
            </h2>
          </div>

          {/* Right - Content */}
          <div className="bg-secondary p-6 md:p-12">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Você já deu o primeiro passo: buscar informação.
              Agora é hora de agir.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Não importa o tamanho da dívida — todo problema tem solução
              quando enfrentado com planejamento e paciência. A mudança
              que você quer está a um clique de distância.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-2 mb-10">
              <p className="text-lg italic text-foreground/80">
                "Não é sobre quanto você ganha. É sobre como você organiza."
              </p>
            </blockquote>

            {/* CTA */}
            <Button variant="cta" size="xl" className="w-full sm:w-auto group">
              Começar minha reorganização
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Trust */}
            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Orientação gratuita &nbsp;&nbsp; ✓ Sem compromisso &nbsp;&nbsp; ✓ Dados protegidos
            </p>
          </div>
        </div>
      </div>

      {/* Large decorative number */}
      <div className="absolute -bottom-20 -left-20 text-foreground/[0.02] font-['Bebas_Neue'] text-[40vw] leading-none pointer-events-none">
        05
      </div>
    </section>
  );
};

export default CTASection;
