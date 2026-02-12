"use client";

import { useState, useMemo } from "react";
import { AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
}

export function BudgetSimulator() {
  const [income, setIncome] = useState(3000);
  const [essentials, setEssentials] = useState(1500);

  const essentialRatio = income > 0 ? essentials / income : 0;
  const isOverBudget = essentialRatio > 0.8;

  const chartData = useMemo(() => {
    if (income <= 0) return [];
    const necessidades = Math.min(essentials, income * 0.5);
    const estiloDeVida = income * 0.3;
    const dividas = Math.max(income - necessidades - estiloDeVida, 0);

    if (isOverBudget) {
      return [
        { name: "Gastos Essenciais", value: essentials, color: "#FA1320" },
        {
          name: "Restante",
          value: Math.max(income - essentials, 0),
          color: "#F4F5F7",
        },
      ];
    }

    return [
      { name: "Necessidades (50%)", value: necessidades, color: "#1D4F91" },
      { name: "Estilo de Vida (30%)", value: estiloDeVida, color: "#77127B" },
      { name: "Disponível p/ Dívidas (20%)", value: dividas, color: "#0FAC67" },
    ];
  }, [income, essentials, isOverBudget]);

  const availableForDebt = useMemo(() => {
    if (isOverBudget) return 0;
    const necessidades = Math.min(essentials, income * 0.5);
    return Math.max(income - necessidades - income * 0.3, 0);
  }, [income, essentials, isOverBudget]);

  return (
    <section className="bg-card px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {"Simulador Interativo"}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {"Descubra quanto você pode destinar para renegociar."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Input Area */}
          <div className="flex flex-col gap-8 rounded-2xl bg-background p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="income-slider"
                className="flex items-center justify-between text-sm font-medium text-foreground"
              >
                <span>Renda Mensal</span>
                <span className="text-lg font-bold text-primary">
                  {formatBRL(income)}
                </span>
              </label>
              <input
                id="income-slider"
                type="range"
                min={500}
                max={20000}
                step={100}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>R$ 500</span>
                <span>R$ 20.000</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="essentials-slider"
                className="flex items-center justify-between text-sm font-medium text-foreground"
              >
                <span>Gastos Essenciais</span>
                <span
                  className={`text-lg font-bold ${isOverBudget ? "text-destructive" : "text-secondary"}`}
                >
                  {formatBRL(essentials)}
                </span>
              </label>
              <input
                id="essentials-slider"
                type="range"
                min={200}
                max={income}
                step={50}
                value={Math.min(essentials, income)}
                onChange={(e) => setEssentials(Number(e.target.value))}
                className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-muted ${isOverBudget ? "accent-[#FA1320]" : "accent-[#1D4F91]"}`}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>R$ 200</span>
                <span>{formatBRL(income)}</span>
              </div>
            </div>

            {isOverBudget && (
              <div className="flex items-start gap-3 rounded-2xl bg-destructive/10 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <div>
                  <p className="text-sm font-semibold text-destructive">
                    {"Foco em Renda Extra primeiro!"}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {
                      "Seus gastos essenciais ultrapassam 80% da renda. Priorize aumentar sua renda antes de negociar dívidas."
                    }
                  </p>
                </div>
              </div>
            )}

            {!isOverBudget && (
              <div className="flex items-center justify-between rounded-2xl bg-success/10 p-4">
                <span className="text-sm font-medium text-foreground">
                  {"Disponível para dívidas:"}
                </span>
                <span className="text-xl font-bold text-success">
                  {formatBRL(availableForDebt)}
                </span>
              </div>
            )}
          </div>

          {/* Chart Area */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-6 md:p-8">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              {"Regra 50-30-20"}
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => formatBRL(value)}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {chartData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
