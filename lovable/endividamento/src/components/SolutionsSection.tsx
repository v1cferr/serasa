import { Button } from "@/components/ui/button";
import {
  FileCheck,
  RefreshCw,
  MessageCircle,
  Pyramid,
  Calculator,
  ArrowRight,
  Lightbulb,
  HeartHandshake
} from "lucide-react";

const solutions = [
  {
    icon: FileCheck,
    title: "Serasa Limpa Nome",
    description: "Negocie suas dívidas com descontos de até 90%. Parcelamento acessível para sair do vermelho.",
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: "Renegociação Direta",
    description: "Entre em contato com seus credores. Muitos preferem receber algo a não receber nada.",
  },
  {
    icon: MessageCircle,
    title: "Assistente Virtual",
    description: "Use chatbots de bancos e instituições para tirar dúvidas 24 horas por dia.",
  },
  {
    icon: Pyramid,
    title: "Priorize o Essencial",
    description: "Moradia, alimentação, saúde primeiro. O resto pode esperar.",
  },
  {
    icon: Calculator,
    title: "Organize as Finanças",
    description: "Anote todos os gastos. Defina metas realistas. Pequenos passos levam longe.",
  },
  {
    icon: Lightbulb,
    title: "Gere Renda Extra",
    description: "Seus talentos valem dinheiro. Freelance, vendas, serviços. Toda renda ajuda.",
  },
  {
    icon: HeartHandshake,
    title: "Busque Apoio",
    description: "CRAS, CAPS, assistência social. Você não precisa fazer isso sozinho.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Marquee Banner - Text Only Infinite Loop */}
      <div className="w-full overflow-hidden mb-20 pointer-events-none select-none">
        <div className="marquee-container">
          <div className="marquee-text">
            <span className="inline-flex items-center gap-8 text-accent/40 font-['Bebas_Neue'] text-4xl tracking-wider">
              <span>★ A MUDANÇA É POSSÍVEL</span>
              <span>★ EXISTE SAÍDA</span>
              <span>★ VOCÊ CONSEGUE</span>
              <span>★ UM PASSO DE CADA VEZ</span>
              <span>★ A MUDANÇA É POSSÍVEL</span>
              <span>★ EXISTE SAÍDA</span>
              <span>★ VOCÊ CONSEGUE</span>
              <span>★ UM PASSO DE CADA VEZ</span>
              {/* Duplicated for extra safety on wide screens */}
              <span>★ A MUDANÇA É POSSÍVEL</span>
              <span>★ EXISTE SAÍDA</span>
              <span>★ VOCÊ CONSEGUE</span>
              <span>★ UM PASSO DE CADA VEZ</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Caminhos para a solução
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-['Bebas_Neue'] text-foreground">
            <span className="text-accent">7 PASSOS</span>
            <br />
            PARA RECOMEÇAR
          </h2>
        </div>

        {/* Solutions - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`editorial-card p-8 group hover:-translate-y-1 transition-all duration-300 animate-fade-up ${solution.highlight
                ? "md:col-span-2 lg:col-span-1 bg-accent text-accent-foreground border-accent"
                : ""
                } ${index === 0 ? "lg:row-span-2" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {solution.highlight && (
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 bg-accent-foreground/20 px-3 py-1">
                  MAIS POPULAR
                </span>
              )}

              <div className={`w-14 h-14 flex items-center justify-center mb-6 ${solution.highlight
                ? "bg-accent-foreground text-accent"
                : "bg-foreground text-background"
                }`}>
                <solution.icon className="w-7 h-7" />
              </div>

              <h3 className={`text-2xl font-semibold mb-4 ${solution.highlight ? "" : "text-foreground"
                }`}>
                {solution.title}
              </h3>

              <p className={`leading-relaxed ${solution.highlight
                ? "text-accent-foreground/90"
                : "text-muted-foreground"
                }`}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="default" size="lg" className="group">
            Ver guia completo
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Large decorative number */}
      <div className="absolute -bottom-20 -right-20 text-foreground/[0.02] font-['Bebas_Neue'] text-[50vw] leading-none pointer-events-none">
        04
      </div>
    </section>
  );
};

export default SolutionsSection;
