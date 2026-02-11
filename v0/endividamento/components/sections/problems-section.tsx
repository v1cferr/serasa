"use client";

import { CreditCard, ShoppingBag, Brain, Megaphone } from "lucide-react";
import { FloatingCard } from "@/components/ui/floating-card";

const causes = [
  {
    icon: CreditCard,
    title: "Crédito Fácil",
    description: "Ofertas agressivas de cartões e empréstimos que seduzem sem mostrar os juros reais.",
    stat: "63%",
    statLabel: "usam cartão de crédito",
  },
  {
    icon: ShoppingBag,
    title: "Consumo Impulsivo",
    description: "Compras por impulso alimentadas pela pressão social e facilidade de parcelamento.",
    stat: "47%",
    statLabel: "compram por impulso",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Ansiedade e depressão que levam ao consumo como válvula de escape emocional.",
    stat: "78%",
    statLabel: "relatam estresse",
  },
  {
    icon: Megaphone,
    title: "Marketing Predatório",
    description: "Propaganda que normaliza dívidas e esconde os verdadeiros custos do crédito.",
    stat: "85%",
    statLabel: "não leem contratos",
  },
];

export function ProblemsSection() {
  return (
    <section id="entenda" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 mb-20">
          <div>
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Por que isso acontece
            </span>
            <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold leading-tight">
              As raízes do
              <span className="text-primary block">endividamento</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-xl max-md:text-lg text-muted-foreground leading-relaxed">
              O endividamento não é falha de caráter. É resultado de um sistema 
              financeiro complexo, falta de educação financeira e pressões sociais 
              que afetam milhões de brasileiros.
            </p>
          </div>
        </div>

        {/* Cards grid - asymmetric layout */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
          {causes.map((cause, index) => (
            <FloatingCard key={cause.title}>
              <div 
                className={`
                  group relative bg-card border border-border rounded-3xl p-8 h-full
                  hover:border-primary/50 transition-colors duration-500
                  ${index === 1 || index === 3 ? "translate-y-12 max-md:translate-y-0" : ""}
                `}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <cause.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{cause.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cause.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-border">
                  <span className="text-4xl font-bold text-primary">{cause.stat}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{cause.statLabel}</span>
                </div>

                {/* Decorative element */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
