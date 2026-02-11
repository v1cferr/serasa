"use client";

import { Home, ShieldCheck, Handshake, Sparkles, ArrowDown } from "lucide-react";
import { useState } from "react";

const layers = [
  {
    id: "acordo",
    level: 3,
    icon: Handshake,
    label: "Acordo Justo",
    subtitle: "Negociação de dívidas",
    description:
      "O valor restante do orçamento, após cobrir necessidades e segurança, é direcionado para renegociar dívidas de forma sustentável.",
    detail: "Parcelas que cabem no bolso, sem comprometer o essencial.",
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
    lightBgClass: "bg-primary/10",
    lightTextClass: "text-primary",
    borderClass: "border-primary/30",
  },
  {
    id: "seguranca",
    level: 2,
    icon: ShieldCheck,
    label: "Segurança",
    subtitle: "Reserva de emergência",
    description:
      "Antes de negociar qualquer dívida, é preciso ter uma pequena reserva para imprevistos como saúde e reparos urgentes.",
    detail: "Mínimo recomendado: 1 mês de gastos essenciais.",
    bgClass: "bg-success",
    textClass: "text-success-foreground",
    lightBgClass: "bg-success/10",
    lightTextClass: "text-success",
    borderClass: "border-success/30",
  },
  {
    id: "basico",
    level: 1,
    icon: Home,
    label: "Básico Garantido",
    subtitle: "Moradia e alimentação",
    description:
      "A base da pirâmide representa o que não pode ser comprometido: aluguel, mercado, contas de água e luz, e transporte.",
    detail: "Sua sobrevivência vem antes de qualquer dívida.",
    bgClass: "bg-secondary",
    textClass: "text-secondary-foreground",
    lightBgClass: "bg-secondary/10",
    lightTextClass: "text-secondary",
    borderClass: "border-secondary/30",
  },
];

export function MaslowMethod() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const active = layers.find((l) => l.id === activeLayer) ?? null;

  return (
    <section className="bg-background px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {"O Método Maslow Financeiro"}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            {"Priorize o essencial antes de negociar. Clique em cada camada para entender a lógica."}
          </p>
        </div>

        {/* Pyramid + Detail panel */}
        <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          {/* Pyramid */}
          <div className="flex w-full max-w-md flex-col items-center" role="list" aria-label="Pirâmide Maslow Financeiro">
            {layers.map((layer, i) => {
              const isActive = activeLayer === layer.id;
              // Widths narrow toward top: 100%, 72%, 44%
              const widthClass = i === 0 ? "w-[44%]" : i === 1 ? "w-[72%]" : "w-full";

              return (
                <div key={layer.id} className={`flex flex-col items-center ${i > 0 ? "-mt-1" : ""}`} style={{ width: "100%" }} role="listitem">
                  {/* Connector arrow */}
                  {i > 0 && (
                    <ArrowDown className="mb-1 h-4 w-4 text-muted-foreground/40" aria-hidden="true" />
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveLayer(isActive ? null : layer.id)}
                    className={`${widthClass} group relative mx-auto flex items-center justify-center gap-3 rounded-2xl px-5 py-5 transition-all md:py-6 ${
                      isActive
                        ? `${layer.bgClass} ${layer.textClass} shadow-lg scale-[1.03]`
                        : `border ${layer.borderClass} ${layer.lightBgClass} hover:shadow-md`
                    }`}
                    aria-expanded={isActive}
                    aria-controls={`detail-${layer.id}`}
                  >
                    <layer.icon className={`h-6 w-6 shrink-0 ${isActive ? layer.textClass : layer.lightTextClass}`} />
                    <div className="text-left">
                      <span className={`text-sm font-bold leading-tight md:text-base ${isActive ? layer.textClass : "text-foreground"}`}>
                        {layer.label}
                      </span>
                      <span className={`block text-xs leading-tight md:text-sm ${isActive ? `${layer.textClass} opacity-80` : "text-muted-foreground"}`}>
                        {layer.subtitle}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}

            {/* Priority label */}
            <p className="mt-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60" aria-hidden="true">
              {"Base = prioridade máxima"}
            </p>
          </div>

          {/* Detail panel */}
          <div className="w-full max-w-sm lg:sticky lg:top-24">
            {active ? (
              <div
                id={`detail-${active.id}`}
                className={`rounded-2xl border ${active.borderClass} ${active.lightBgClass} p-6 shadow-sm transition-all`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${active.bgClass}`}>
                    <active.icon className={`h-6 w-6 ${active.textClass}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{active.label}</h3>
                    <p className={`text-sm font-medium ${active.lightTextClass}`}>{active.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {active.description}
                </p>
                <div className={`mt-4 rounded-xl ${active.bgClass}/10 px-4 py-3`}>
                  <p className={`text-xs font-semibold ${active.lightTextClass}`}>
                    {active.detail}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <Sparkles className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {"Clique em uma camada da pirâmide para ver os detalhes"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
