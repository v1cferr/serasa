"use client";

import { useState, useMemo } from "react";
import { AlertTriangle, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
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
        { name: "Comprometido", value: essentials, color: "#FA1320" },
        {
          name: "Livre",
          value: Math.max(income - essentials, 0),
          color: "#F4F5F7",
        },
      ];
    }

    return [
      { name: "50% Necessidades", value: necessidades, color: "#1D4F91" },
      { name: "30% Estilo", value: estiloDeVida, color: "#77127B" },
      { name: "20% Dívidas", value: dividas, color: "#0FAC67" },
    ];
  }, [income, essentials, isOverBudget]);

  const availableForDebt = useMemo(() => {
    if (isOverBudget) return 0;
    const necessidades = Math.min(essentials, income * 0.5);
    return Math.max(income - necessidades - income * 0.3, 0);
  }, [income, essentials, isOverBudget]);

  return (
    <section className="bg-card px-4 py-16 md:px-8 lg:px-16 border-t border-border/50">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-experian-dark-blue dark:text-white">
              Simule sua Capacidade
            </h2>
            <p className="text-muted-foreground mt-1">
              Quanto você consegue pagar por mês?
            </p>
          </div>

          {/* Outcome Badge */}
          <div
            className={`px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm ${!isOverBudget ? "bg-experian-alert-green/10 text-experian-alert-green" : "bg-experian-alert-red/10 text-experian-alert-red"}`}
          >
            {isOverBudget ? (
              <>
                <AlertTriangle className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider">
                    Atenção
                  </span>
                  <span className="font-bold">Orçamento Crítico</span>
                </div>
              </>
            ) : (
              <>
                <TrendingUp className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider text-experian-alert-green/80">
                    Disponível para acordos
                  </span>
                  <span className="text-xl font-extrabold">
                    {formatBRL(availableForDebt)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Controls */}
          <div className="flex flex-col gap-8 bg-background p-6 rounded-2xl border shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Sua Renda
                </label>
                <span className="text-lg font-bold text-experian-dark-blue">
                  {formatBRL(income)}
                </span>
              </div>
              <Slider
                value={[income]}
                min={1000}
                max={20000}
                step={100}
                onValueChange={(vals) => setIncome(vals[0])}
                className="py-2"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Gastos Essenciais
                </label>
                <span
                  className={`text-lg font-bold ${isOverBudget ? "text-experian-alert-red" : "text-experian-light-blue"}`}
                >
                  {formatBRL(essentials)}
                </span>
              </div>
              <Slider
                value={[Math.min(essentials, income)]}
                min={500}
                max={income}
                step={50}
                onValueChange={(vals) => setEssentials(vals[0])}
                className="py-2"
              />
              <p className="text-xs text-muted-foreground">
                Dica: Tente manter seus gastos essenciais (aluguel, comida)
                abaixo de 50% da renda.
              </p>
            </div>
          </div>

          {/* Visualization */}
          <div className="flex flex-col items-center justify-center relative min-h-[250px]">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
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

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {chartData.map((entry, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
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
