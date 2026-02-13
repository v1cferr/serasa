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
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FinancialData {
  divida: number;
  rendaFixa: number[];
  rendaVariavel: number[];
  gastosFixos: number[];
  gastosVariaveis: number[];
}

const COLORS = [
  "hsl(330,78%,49%)",
  "hsl(220,20%,15%)",
  "hsl(220,10%,45%)",
  "hsl(330,78%,70%)",
  "hsl(200,60%,50%)",
];

export function FinancialResults({ data }: { data: FinancialData }) {
  const totalRendaFixa = data.rendaFixa.reduce((a, b) => a + b, 0);
  const totalRendaVariavel = data.rendaVariavel.reduce((a, b) => a + b, 0);
  const totalGastosFixos = data.gastosFixos.reduce((a, b) => a + b, 0);
  const totalGastosVariaveis = data.gastosVariaveis.reduce((a, b) => a + b, 0);
  const totalRenda = totalRendaFixa + totalRendaVariavel;
  const totalGastos = totalGastosFixos + totalGastosVariaveis;
  const sobra = totalRenda - totalGastos;

  const percFixos =
    totalRenda > 0 ? ((totalGastosFixos / totalRenda) * 100).toFixed(1) : "0";
  const percVariaveis =
    totalRenda > 0
      ? ((totalGastosVariaveis / totalRenda) * 100).toFixed(1)
      : "0";
  const percSobra =
    totalRenda > 0 ? ((Math.max(sobra, 0) / totalRenda) * 100).toFixed(1) : "0";

  const pieData = [
    { name: "Gastos Fixos", value: totalGastosFixos },
    { name: "Gastos Variáveis", value: totalGastosVariaveis },
    { name: sobra >= 0 ? "Margem de Segurança" : "Déficit", value: Math.abs(sobra) },
  ];

  const barData = [
    { name: "Ideal", fixos: 50, variaveis: 30, investimento: 20 },
    {
      name: "Seu Perfil",
      fixos: parseFloat(percFixos),
      variaveis: parseFloat(percVariaveis),
      investimento: parseFloat(percSobra),
    },
  ];



  const fmt = (v: number) =>
    `R$ ${v
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-experian-dark-blue dark:text-white">
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
            color: "text-green-600",
          },
          {
            label: "Gastos Totais",
            value: fmt(totalGastos),
            color: "text-orange-600",
          },
          {
            label: sobra >= 0 ? "Margem de Segurança" : "Déficit",
            value: fmt(Math.abs(sobra)),
            color: sobra >= 0 ? "text-green-600" : "text-red-600",
          },
          {
            label: "Dívida Ativa",
            value: fmt(data.divida),
            color: "text-red-600",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {item.label}
              </p>
              <p className={cn("text-2xl font-bold mt-2", item.color)}>
                {item.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              Distribuição de Gastos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    paddingAngle={5}
                    label={({ name, percent }) =>
                      `${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => fmt(v)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart - 50/30/20 */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              Índice de Sobrevivência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" unit="%" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
                  <Legend />
                  <Bar
                    dataKey="fixos"
                    name="Fixos (50%)"
                    stackId="a"
                    fill={COLORS[0]}
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="variaveis"
                    name="Variáveis (30%)"
                    stackId="a"
                    fill={COLORS[1]}
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="investimento"
                    name="Invest. (20%)"
                    stackId="a"
                    fill={COLORS[4]}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  );
}
