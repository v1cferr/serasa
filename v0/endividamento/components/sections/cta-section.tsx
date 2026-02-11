"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTASection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent p-16 max-md:p-10 max-sm:p-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">
                Seu momento de mudança
              </span>
            </div>

            <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
              O primeiro passo e
              <br />
              <span className="opacity-80">decidir mudar</span>
            </h2>

            <p className="text-xl max-md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Voce nao precisa ter todas as respostas hoje. Comece pequeno: 
              anote uma divida, pesquise uma opcao, respire fundo. 
              Cada passo conta.
            </p>

            <div className="flex flex-row max-sm:flex-col gap-4 justify-center items-center">
              <button className="group flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                Começar minha jornada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-medium text-lg text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors">
                Preciso de ajuda
              </button>
            </div>

            <p className="mt-10 text-primary-foreground/60 text-sm">
              Informativo e gratuito. Sem julgamentos, só apoio.
            </p>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mt-8">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-1">72M+</p>
            <p className="text-muted-foreground text-sm">brasileiros endividados</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-1">89%</p>
            <p className="text-muted-foreground text-sm">conseguem renegociar</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-1">100%</p>
            <p className="text-muted-foreground text-sm">merecem recomeçar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
