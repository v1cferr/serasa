"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { TrendingUp, TrendingDown, DollarSign, Wallet, CreditCard } from "lucide-react";

interface FinancialData {
  divida: number;
  rendaFixa: number[];
  rendaVariavel: number[];
  gastosFixos: number[];
  gastosVariaveis: number[];
}

export function FinancialResults({ data }: { data: FinancialData }) {
  const totalRendaFixa = data.rendaFixa.reduce((a, b) => a + b, 0);
  const totalRendaVariavel = data.rendaVariavel.reduce((a, b) => a + b, 0);
  const totalGastosFixos = data.gastosFixos.reduce((a, b) => a + b, 0);
  const totalGastosVariaveis = data.gastosVariaveis.reduce((a, b) => a + b, 0);
  const totalRenda = totalRendaFixa + totalRendaVariavel;
  const totalGastos = totalGastosFixos + totalGastosVariaveis;
  const sobra = totalRenda - totalGastos;

  const percFixos = totalRenda > 0 ? (totalGastosFixos / totalRenda) * 100 : 0;
  const percVariaveis = totalRenda > 0 ? (totalGastosVariaveis / totalRenda) * 100 : 0;
  const percSobra = totalRenda > 0 ? (Math.max(sobra, 0) / totalRenda) * 100 : 0;

  // Pie Chart Data
  const pieData = [
    { name: "fixos", value: totalGastosFixos, fill: "var(--color-fixos)" },
    { name: "variaveis", value: totalGastosVariaveis, fill: "var(--color-variaveis)" },
    { name: "sobra", value: Math.max(sobra, 0), fill: "var(--color-sobra)" },
  ];

  const pieChartConfig = {
    value: {
      label: "Valor",
    },
    fixos: {
      label: "Gastos Fixos",
      color: "hsl(var(--chart-1))",
    },
    variaveis: {
      label: "Gastos Variáveis",
      color: "hsl(var(--chart-2))",
    },
    sobra: {
      label: "Margem (Sobra)",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  // Bar Chart Data (Comparison)
  const barData = [
    {
      category: "Ideal",
      fixos: 50,
      variaveis: 30,
      sobra: 20,
    },
    {
      category: "Você",
      fixos: parseFloat(percFixos.toFixed(1)),
      variaveis: parseFloat(percVariaveis.toFixed(1)),
      sobra: parseFloat(percSobra.toFixed(1)),
    },
  ];

  const barChartConfig = {
    fixos: {
      label: "Gastos Fixos (%)",
      color: "hsl(var(--chart-1))",
    },
    variaveis: {
      label: "Gastos Variáveis (%)",
      color: "hsl(var(--chart-2))",
    },
    sobra: {
      label: "Investimentos/Sobra (%)",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const fmt = (v: number) =>
    `R$ ${v
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Seu Panorama Financeiro
        </h2>
        <p className="text-muted-foreground">
          Analise visualmente onde seu dinheiro está indo
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Renda Total",
            value: fmt(totalRenda),
            icon: Wallet,
            color: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-50 dark:bg-emerald-950/20",
          },
          {
            label: "Gastos Totais",
            value: fmt(totalGastos),
            icon: TrendingDown,
            color: "text-rose-600 dark:text-rose-400",
            bg: "bg-rose-50 dark:bg-rose-950/20",
          },
          {
            label: sobra >= 0 ? "Sobra Mensal" : "Déficit Mensal",
            value: fmt(Math.abs(sobra)),
            icon: sobra >= 0 ? TrendingUp : TrendingDown,
            color: sobra >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400",
            bg: sobra >= 0 ? "bg-emerald-50 dark:bg-emerald-950/20" : "bg-rose-50 dark:bg-rose-950/20",
          },
          {
            label: "Dívida Ativa",
            value: fmt(data.divida),
            icon: CreditCard,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-50 dark:bg-amber-950/20",
          },
        ].map((item, i) => (
          <Card key={i} className="shadow-sm border-2 overflow-hidden hover:border-primary/50 transition-colors">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
              <div className={cn("p-3 rounded-full mb-1", item.bg)}>
                <item.icon className={cn("w-6 h-6", item.color)} />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {item.label}
              </p>
              <p className={cn("text-xl md:text-2xl font-bold", item.color)}>
                {item.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <Card className="flex flex-col shadow-md">
          <CardHeader className="items-center pb-0">
            <CardTitle>Distribuição de Gastos</CardTitle>
            <CardDescription>Onde seu dinheiro está indo este mês</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0 min-h-[300px]">
            <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-2xl sm:text-3xl font-bold"
                            >
                              {totalGastos.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground text-xs sm:text-sm"
                            >
                              Gastos
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
                <ChartLegend
                  content={<ChartLegendContent nameKey="name" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-xs"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm pt-4">
            <div className="flex items-center gap-2 font-medium leading-none text-center">
              {sobra >= 0 ? (
                <>Sua saúde financeira está positiva <TrendingUp className="h-4 w-4 text-emerald-500" /></>
              ) : (
                <>Atenção aos gastos excessivos <TrendingDown className="h-4 w-4 text-rose-500" /></>
              )}
            </div>
          </CardFooter>
        </Card>

        {/* Bar Chart - 50/30/20 */}
        <Card className="flex flex-col shadow-md">
          <CardHeader className="items-center pb-0">
            <CardTitle>Comparativo Ideal (50/30/20)</CardTitle>
            <CardDescription>Sua distribuição vs Recomendação</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0 min-h-[300px]">
            <ChartContainer config={barChartConfig} className="max-h-[300px] w-full">
              <BarChart accessibilityLayer data={barData} layout="vertical" margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="category"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  width={50}
                  className="font-bold text-xs sm:text-sm"
                />
                <XAxis type="number" hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                <ChartLegend content={<ChartLegendContent />} className="flex-wrap gap-2 text-xs" />
                <Bar dataKey="fixos" fill="var(--color-fixos)" radius={[0, 4, 4, 0]} stackId="a" />
                <Bar dataKey="variaveis" fill="var(--color-variaveis)" radius={[0, 4, 4, 0]} stackId="a" />
                <Bar dataKey="sobra" fill="var(--color-sobra)" radius={[0, 4, 4, 0]} stackId="a" />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm pt-4">
            <div className="flex items-center gap-2 font-medium leading-none text-center">
              50% Gastos Fixos, 30% Variáveis, 20% Investimentos.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
