import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

interface FinancialData {
  divida: number;
  rendaFixa: number[];
  rendaVariavel: number[];
  gastosFixos: number[];
  gastosVariaveis: number[];
}

const COLORS = ["hsl(330,78%,49%)", "hsl(220,20%,15%)", "hsl(220,10%,45%)", "hsl(330,78%,70%)", "hsl(200,60%,50%)"];

const FinancialResults = ({ data }: { data: FinancialData }) => {
  const totalRendaFixa = data.rendaFixa.reduce((a, b) => a + b, 0);
  const totalRendaVariavel = data.rendaVariavel.reduce((a, b) => a + b, 0);
  const totalGastosFixos = data.gastosFixos.reduce((a, b) => a + b, 0);
  const totalGastosVariaveis = data.gastosVariaveis.reduce((a, b) => a + b, 0);
  const totalRenda = totalRendaFixa + totalRendaVariavel;
  const totalGastos = totalGastosFixos + totalGastosVariaveis;
  const sobra = totalRenda - totalGastos;

  const percFixos = totalRenda > 0 ? ((totalGastosFixos / totalRenda) * 100).toFixed(1) : "0";
  const percVariaveis = totalRenda > 0 ? ((totalGastosVariaveis / totalRenda) * 100).toFixed(1) : "0";
  const percSobra = totalRenda > 0 ? ((Math.max(sobra, 0) / totalRenda) * 100).toFixed(1) : "0";

  const pieData = [
    { name: "Gastos Fixos", value: totalGastosFixos },
    { name: "Gastos Variáveis", value: totalGastosVariaveis },
    { name: sobra >= 0 ? "Sobra" : "Déficit", value: Math.abs(sobra) },
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

  // Maslow pyramid levels
  const maslowLevels = [
    { label: "Autorrealização", desc: "Investimentos e crescimento", width: "30%", filled: sobra > totalRenda * 0.15 },
    { label: "Estima", desc: "Lazer e bem-estar", width: "45%", filled: totalGastosVariaveis > 0 },
    { label: "Social", desc: "Educação e saúde", width: "60%", filled: totalGastosFixos > 0 },
    { label: "Segurança", desc: "Moradia e renda fixa", width: "75%", filled: totalRendaFixa > 0 },
    { label: "Fisiológica", desc: "Alimentação e necessidades básicas", width: "90%", filled: totalRenda > 0 },
  ];

  const fmt = (v: number) => `R$ ${v.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  return (
    <div className="w-full max-w-[1366px] mx-auto p-[2%] flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-foreground text-center">Seu Panorama Financeiro</h2>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Renda Total", value: fmt(totalRenda), color: "text-green-600" },
          { label: "Gastos Totais", value: fmt(totalGastos), color: "text-orange-600" },
          { label: sobra >= 0 ? "Sobra" : "Déficit", value: fmt(Math.abs(sobra)), color: sobra >= 0 ? "text-green-600" : "text-red-600" },
          { label: "Dívida Ativa", value: fmt(data.divida), color: "text-red-600" },
        ].map((item, i) => (
          <div key={i} className="card-shadow bg-card rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="card-shadow bg-card rounded-lg p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Distribuição de Gastos</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => fmt(v)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - 50/30/20 */}
        <div className="card-shadow bg-card rounded-lg p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Regra 50/30/20</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis unit="%" />
              <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="fixos" name="Fixos" fill={COLORS[0]} />
              <Bar dataKey="variaveis" name="Variáveis" fill={COLORS[1]} />
              <Bar dataKey="investimento" name="Investimento" fill={COLORS[4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Maslow Pyramid */}
      <div className="card-shadow bg-card rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-6 text-center">Pirâmide de Maslow Financeira</h3>
        <div className="flex flex-col items-center gap-2">
          {maslowLevels.map((level, i) => (
            <div
              key={i}
              className={`flex items-center justify-center rounded-sm py-3 px-4 text-center transition-all cursor-default ${
                level.filled
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
              style={{ width: level.width }}
            >
              <div>
                <p className="font-bold text-sm">{level.label}</p>
                <p className="text-xs opacity-80">{level.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialResults;
