"use client";

import {
  Home,
  ShieldCheck,
  Handshake,
  Target,
  ArrowDown,
  MousePointerClick,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "acordo",
    level: 3,
    icon: Handshake,
    label: "3. Negociação",
    subtitle: "Acordos sustentáveis",
    description:
      "Com o básico e a reserva garantidos, use o excedente para quitar dívidas sem gerar novas.",
    bgClass: "bg-experian-magenta",
    textClass: "text-white",
    borderClass: "border-experian-magenta/30",
  },
  {
    id: "seguranca",
    level: 2,
    icon: ShieldCheck,
    label: "2. Segurança",
    subtitle: "Reserva de emergência",
    description:
      "Tenha um fundo para imprevistos (ex: saúde, reparos) antes de comprometer sua renda com parcelas.",
    bgClass: "bg-experian-purple",
    textClass: "text-white",
    borderClass: "border-experian-purple/30",
  },
  {
    id: "basico",
    level: 1,
    icon: Home,
    label: "1. Básico",
    subtitle: "Sobrevivência",
    description:
      "Sua prioridade zero: Aluguel, luz, água e comida na mesa. Garanta isso antes de tudo.",
    bgClass: "bg-experian-dark-blue",
    textClass: "text-white",
    borderClass: "border-experian-dark-blue/30",
  },
];

export function MaslowMethod() {
  const [activeLayer, setActiveLayer] = useState<string | null>("basico"); // Default to base open on mobile often helps or keep closed

  return (
    <section className="bg-background px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-experian-magenta/10 mb-4">
            <Target className="h-6 w-6 text-experian-magenta" />
          </div>
          <h2 className="text-3xl font-bold text-experian-dark-blue dark:text-white mb-3">
            Prioridades do Método VITAL
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Não inicie o Saneamento Financeiro sem garantir sua Sobrevivência. Siga a ordem:
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Pyramid Construction */}
          <div className="w-full max-w-md flex flex-col items-center gap-2">
            {layers.map((layer, index) => {
              const isActive = activeLayer === layer.id;
              const widthClass =
                index === 0 ? "w-[60%]" : index === 1 ? "w-[80%]" : "w-full";

              return (
                <div
                  key={layer.id}
                  className="w-full flex flex-col items-center group"
                >
                  {/* Connector */}
                  {index > 0 && (
                    <ArrowDown className="h-4 w-4 text-gray-300 mb-1" />
                  )}

                  <button
                    onClick={() => setActiveLayer(isActive ? null : layer.id)}
                    className={cn(
                      widthClass,
                      "relative flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 shadow-sm border",
                      isActive
                        ? cn(
                          layer.bgClass,
                          layer.textClass,
                          "shadow-xl scale-105 z-10 border-transparent",
                        )
                        : "bg-card border-gray-200 hover:border-experian-dark-blue/30 hover:shadow-md",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <layer.icon
                        className={cn(
                          "h-5 w-5",
                          isActive ? "text-white" : "text-experian-dark-blue",
                        )}
                      />
                      <div className="text-left">
                        <span
                          className={cn(
                            "block font-bold",
                            isActive
                              ? "text-white"
                              : "text-gray-800 dark:text-gray-200",
                          )}
                        >
                          {layer.label}
                        </span>
                        <span
                          className={cn(
                            "text-xs opacity-90",
                            isActive ? "text-white/80" : "text-gray-500",
                          )}
                        >
                          {layer.subtitle}
                        </span>
                      </div>
                    </div>
                    {isActive ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </button>

                  {/* Mobile/Inline Detail View - Expandable */}
                  <div
                    className={cn(
                      "w-full transition-all duration-300 ease-in-out overflow-hidden bg-gray-50 dark:bg-experian-navy/20 rounded-b-xl -mt-2 pt-4 px-6 border-x border-b border-gray-100 dark:border-white/5",
                      isActive
                        ? "max-h-40 opacity-100 pb-4 mb-2"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-4">
            Base = O mais importante
          </p>
        </div>
      </div>
    </section>
  );
}
