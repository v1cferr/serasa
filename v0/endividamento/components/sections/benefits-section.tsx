"use client";

import { Sparkles, Target, Wallet, Heart, Moon, Users } from "lucide-react";
import { OrganicBlob } from "@/components/ui/organic-blob";

const benefits = [
  {
    icon: Moon,
    title: "Noites tranquilas",
    description: "Dormir sem a ansiedade das contas. Acordar com energia para viver.",
  },
  {
    icon: Target,
    title: "Planos de volta",
    description: "Sonhar novamente. Viagem, casa, faculdade - tudo volta a ser possível.",
  },
  {
    icon: Wallet,
    title: "Decisões livres",
    description: "Escolher o que comprar sem medo. Gastar com consciência, não com culpa.",
  },
  {
    icon: Users,
    title: "Relações melhores",
    description: "Menos brigas por dinheiro. Mais tempo de qualidade com quem ama.",
  },
  {
    icon: Heart,
    title: "Saúde mental",
    description: "A mente leve quando o peso da dívida sai dos ombros.",
  },
  {
    icon: Sparkles,
    title: "Recomeço real",
    description: "Uma segunda chance para construir a vida que você merece.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 opacity-30">
        <OrganicBlob size={400} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-20">
        <OrganicBlob size={300} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - asymmetric */}
        <div className="grid grid-cols-[1.2fr,1fr] max-lg:grid-cols-1 gap-12 mb-20">
          <div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              O que voce ganha
            </span>
            <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold leading-tight">
              Muito alem do
              <span className="text-primary block">dinheiro</span>
            </h2>
          </div>
          <div className="flex items-end justify-end max-lg:justify-start">
            <p className="text-xl max-md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Resolver dividas nao e so sobre numeros. E sobre reconquistar sua paz, 
              seus sonhos e sua liberdade de escolha.
            </p>
          </div>
        </div>

        {/* Benefits grid - bento style */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`
                group relative p-8 rounded-3xl border border-border
                bg-gradient-to-br from-card to-card/50
                hover:border-primary/30 transition-all duration-500
                ${index === 0 ? "col-span-2 max-md:col-span-1" : ""}
                ${index === 3 ? "col-span-2 max-md:col-span-1" : ""}
              `}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
