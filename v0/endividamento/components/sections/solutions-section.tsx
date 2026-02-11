"use client";

import { useState } from "react";
import {
  FileCheck,
  Handshake,
  Bot,
  Triangle,
  PiggyBank,
  ArrowRight,
  Check,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const solutions = [
  {
    id: "serasa",
    icon: FileCheck,
    title: "Serasa Limpa Nome",
    subtitle: "Negociação digital",
    description:
      "Negocie suas dívidas com descontos de até 90%. Sem sair de casa, sem constrangimento.",
    features: [
      "Consulta gratuita de CPF",
      "Descontos exclusivos",
      "Parcelas que cabem no bolso",
      "Acordo fechado em minutos",
    ],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    id: "renegociar",
    icon: Handshake,
    title: "Renegociação Customizada",
    subtitle: "Conversa com você e entende o seu contexto",
    description:
      "Fale diretamente com bancos e empresas. Muitos têm programas especiais para quem quer pagar.",
    features: [
      "Redução de juros",
      "Parcelamento estendido",
      "Desconto à vista",
      "Sem intermediários",
    ],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "assistente",
    icon: Bot,
    title: "Assistente Virtual",
    subtitle: "Tecnologia a seu favor",
    description:
      "Apps e ferramentas que ajudam você a controlar gastos e encontrar oportunidades de economia.",
    features: [
      "Alertas de vencimento",
      "Controle de gastos",
      "Dicas personalizadas",
      "100% gratuito",
    ],
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    id: "prioridade",
    icon: Triangle,
    title: "Pirâmide de Maslow",
    subtitle: "Priorize o essencial",
    description:
      "Organize suas prioridades: primeiro o básico (moradia, alimentação), depois o resto.",
    features: [
      "Hierarquia de necessidades",
      "Foco no que importa",
      "Redução de estresse",
      "Decisões mais claras",
    ],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    id: "organizar",
    icon: PiggyBank,
    title: "Organização Financeira",
    subtitle: "Controle total",
    description:
      "Saiba exatamente o que entra e o que sai. Conhecimento é o primeiro passo para mudança.",
    features: [
      "Planilhas simples",
      "Metas realistas",
      "Reserva de emergência",
      "Hábitos saudáveis",
    ],
    color: "from-rose-500/20 to-rose-500/5",
  },
];

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Caminhos para a solucao
          </span>
          <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold mb-6">
            Ferramentas que
            <span className="text-primary"> funcionam</span>
          </h2>
          <p className="text-xl max-md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada situacao pede uma abordagem diferente. Explore as opcoes e
            encontre a que faz sentido para voce.
          </p>
        </div>

        {/* Interactive tabs + content */}
        <div className="grid grid-cols-[1fr,1.5fr] max-lg:grid-cols-1 gap-8">
          {/* Left side - Tab list */}
          <div className="flex flex-col gap-3 max-lg:flex-row max-lg:overflow-x-auto max-lg:pb-4 max-md:flex-col">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300
                  ${activeIndex === index
                    ? "bg-card border-2 border-primary shadow-lg shadow-primary/10"
                    : "bg-card/50 border border-border hover:bg-card hover:border-border"
                  }
                `}
              >
                <div
                  className={`
                  w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                  ${activeIndex === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
                `}
                >
                  <solution.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`font-bold ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.subtitle}
                  </p>
                </div>
                {activeIndex === index && (
                  <ArrowRight className="w-5 h-5 text-primary ml-auto" />
                )}
              </button>
            ))}
          </div>

          {/* Right side - Content */}
          <div
            className={`
            relative rounded-3xl p-12 max-md:p-8 bg-gradient-to-br ${activeSolution.color}
            border border-border overflow-hidden
          `}
          >
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <activeSolution.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-4xl max-md:text-3xl font-bold mb-4">
                {activeSolution.title}
              </h3>
              <p className="text-xl max-md:text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeSolution.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-8">
                {activeSolution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <MagneticButton>Explorar esta opção</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
