"use client";

import { AlertCircle, Users, TrendingDown, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const impacts = [
  {
    icon: AlertCircle,
    title: "Nome Negativado",
    description: "Restrição de crédito que dificulta alugar, comprar e até conseguir emprego.",
  },
  {
    icon: Users,
    title: "Conflitos Familiares",
    description: "Dívidas são a principal causa de brigas entre casais no Brasil.",
  },
  {
    icon: TrendingDown,
    title: "Bola de Neve",
    description: "Juros sobre juros transformam dívidas pequenas em montantes impagáveis.",
  },
  {
    icon: Heart,
    title: "Saúde Comprometida",
    description: "Insônia, ansiedade e depressão afetam diretamente quem está endividado.",
  },
];

export function ImpactSection() {
  return (
    <section className="relative py-32 px-6 bg-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Stats banner */}
        <div className="bg-[#00A9E0]/10 border border-[#00A9E0]/20 rounded-3xl p-12 max-md:p-8 mb-20 ">
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 text-center">
            <div>
              <p className="text-6xl max-md:text-5xl font-bold text-[#E4007E] mb-2">
                <AnimatedCounter end={400} prefix="R$ " suffix="bi" />
              </p>
              <p className="text-muted-foreground">em dívidas no Brasil</p>
            </div>
            <div>
              <p className="text-6xl max-md:text-5xl font-bold text-[#E4007E] mb-2">
                <AnimatedCounter end={30} suffix="%" />
              </p>
              <p className="text-muted-foreground">da renda média comprometida</p>
            </div>
            <div>
              <p className="text-6xl max-md:text-5xl font-bold text-[#E4007E] mb-2">
                <AnimatedCounter end={6} suffix=" anos" />
              </p>
              <p className="text-muted-foreground">tempo médio para sair da dívida</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-destructive font-medium text-sm tracking-widest uppercase mb-4 block">
            O impacto real
          </span>
          <h2 className="text-5xl max-md:text-4xl font-bold mb-6">
            As consequencias vao alem do bolso
          </h2>
          <p className="text-xl max-md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Endividamento afeta todas as areas da vida. Reconhecer isso
            e o primeiro passo para mudanca.
          </p>
        </div>

        {/* Impact list */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={impact.title}
              className="flex gap-6 p-6 rounded-2xl bg-background border border-border hover:border-destructive/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                <impact.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
