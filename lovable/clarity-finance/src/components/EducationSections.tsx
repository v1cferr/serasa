import {
  GraduationCap, Droplets, PiggyBank, Landmark, LineChart, Briefcase,
  BarChart3, Percent, HandCoins, Calculator, Home, TrendingUp,
  Shield, Target, Wallet, ArrowUpRight, CheckCircle2, Lightbulb
} from "lucide-react";
import { type ReactNode } from "react";

interface EducationCard {
  icon: ReactNode;
  title: string;
  summary: string;
  detail: string;
}

const Section = ({ id, title, subtitle, cards }: { id: string; title: string; subtitle: string; cards: EducationCard[] }) => (
  <section id={id} className="w-full py-16">
    <div className="max-w-[1366px] mx-auto px-[3%]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="card-shadow bg-card rounded-lg p-6 cursor-default group relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {card.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm">{card.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{card.summary}</p>
            <div className="info-hidden">
              <p className="text-xs text-foreground/80 leading-relaxed border-t border-border pt-3">
                {card.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Seção 4 — Educação Financeira (Investimentos)
const section4Cards: EducationCard[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Educação",
    summary: "O melhor investimento é em conhecimento.",
    detail: "Investir em educação — cursos, livros, especializações — é o investimento com maior retorno a longo prazo. Quanto mais você aprende sobre finanças, melhores decisões toma com seu dinheiro.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Liquidez Diária",
    summary: "Acesse seu dinheiro quando precisar.",
    detail: "Liquidez diária significa que você pode resgatar seu investimento a qualquer momento sem perda. Ideal para reserva de emergência. Exemplos: poupança, CDB de liquidez diária, Tesouro Selic.",
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    title: "Poupança",
    summary: "O primeiro passo para quem quer começar.",
    detail: "A poupança é o investimento mais acessível do Brasil. Apesar do rendimento baixo (próximo à inflação), ela é isenta de IR e tem liquidez. Use como porta de entrada para investimentos melhores.",
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Patrimônio",
    summary: "Construa riqueza ao longo do tempo.",
    detail: "Patrimônio é tudo que você possui de valor: imóveis, veículos, investimentos, negócios. O foco deve ser acumular ativos que geram renda (aluguéis, dividendos) e não passivos que geram despesas.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Ações",
    summary: "Invista em empresas e participe do crescimento.",
    detail: "Ações são pequenas partes de empresas negociadas na bolsa. Investir em ações é investir no crescimento de empresas. Comece com fundos de índice (ETFs) para diversificação com menor risco.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Empreendimento",
    summary: "Crie fontes de renda ativa e passiva.",
    detail: "Empreender pode ser desde um negócio próprio até investir em imóveis para aluguel. Diversificar fontes de renda é fundamental para estabilidade financeira a longo prazo.",
  },
];

// Seção 5 — Como funciona?
const section5Cards: EducationCard[] = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Inflação",
    summary: "Seu dinheiro perde valor com o tempo.",
    detail: "A inflação corrói o poder de compra do seu dinheiro. Se seus investimentos rendem menos que a inflação, você está perdendo dinheiro. Por isso, é essencial investir acima da inflação (IPCA).",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "CDB e CDI",
    summary: "Renda fixa com bons rendimentos.",
    detail: "CDB (Certificado de Depósito Bancário) é um título emitido por bancos. CDI é a taxa de referência. Um CDB que paga 100% do CDI rende aproximadamente a taxa Selic. Seguro pelo FGC até R$ 250 mil.",
  },
  {
    icon: <Percent className="w-5 h-5" />,
    title: "Taxas e Juros",
    summary: "Compostos vs simples: entenda a diferença.",
    detail: "Juros simples incidem sobre o valor inicial. Juros compostos incidem sobre o montante acumulado — 'juros sobre juros'. Nos investimentos, compostos são seus aliados. Nas dívidas, seu pior inimigo.",
  },
  {
    icon: <HandCoins className="w-5 h-5" />,
    title: "Empréstimos",
    summary: "Quando vale a pena pedir emprestado?",
    detail: "Empréstimos fazem sentido para investimentos que geram retorno (educação, negócio). Evite empréstimos para consumo. Compare taxas entre bancos e fintechs. Analise o CET (Custo Efetivo Total).",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "Amortização",
    summary: "Reduza o custo total da sua dívida.",
    detail: "Amortização é o pagamento antecipado do principal da dívida, reduzindo juros futuros. Existem dois sistemas: SAC (parcelas decrescentes) e Price (parcelas fixas). No SAC, você paga menos juros total.",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Financiamento",
    summary: "Realize sonhos com planejamento.",
    detail: "Financiamentos imobiliários são compromissos longos. Dê a maior entrada possível, escolha o sistema SAC, e não comprometa mais de 30% da renda com a parcela. Compare taxas entre bancos.",
  },
];

// Seção 6 — Reserva de Emergência (dicas práticas)
const emergencyTips = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Defina sua meta",
    text: "O ideal é ter de 3 a 6 meses dos seus gastos mensais guardados. Calcule seus gastos fixos + variáveis e multiplique por 6 para ter sua meta.",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Comece pequeno",
    text: "Separe pelo menos 10% da sua renda todo mês. Mesmo R$ 50 por mês já é um começo. O importante é criar o hábito de poupar consistentemente.",
  },
  {
    icon: <ArrowUpRight className="w-5 h-5" />,
    title: "Invista com liquidez",
    text: "Sua reserva deve estar em investimentos com liquidez diária: Tesouro Selic, CDB com liquidez diária ou fundos DI. Evite poupança — rende menos que a inflação.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Automatize",
    text: "Configure uma transferência automática no dia do pagamento para sua conta de investimentos. Trate a reserva como uma conta fixa e obrigatória.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Não toque sem necessidade",
    text: "Use a reserva apenas para emergências reais: perda de emprego, problemas de saúde, reparos urgentes. Viagens e compras de desejo NÃO são emergências.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Reponha após usar",
    text: "Se precisar usar parte da reserva, priorize repor o valor o mais rápido possível. Ajuste temporariamente seus gastos variáveis para acelerar a reposição.",
  },
];

const EducationSections = () => (
  <>
    <Section
      id="educacao"
      title="Educação Financeira"
      subtitle="Conheça os principais tipos de investimento e comece sua jornada"
      cards={section4Cards}
    />
    <Section
      id="como-funciona"
      title="Como funciona?"
      subtitle="Entenda os conceitos que impactam diretamente suas finanças"
      cards={section5Cards}
    />

    {/* Seção 6 — Reserva de Emergência */}
    <section id="reserva" className="w-full py-16 bg-secondary/30">
      <div className="max-w-[1366px] mx-auto px-[3%]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">Reserva de Emergência</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A reserva de emergência é o alicerce da sua saúde financeira. Ela garante que imprevistos
            não destruam seu planejamento e evita que você precise recorrer a empréstimos com juros altos.
          </p>
        </div>

        {/* Hero block */}
        <div className="card-shadow bg-primary/10 rounded-lg p-8 mb-8 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Por que é tão importante?</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Segundo pesquisas, <strong>mais de 60% dos brasileiros</strong> não possuem nenhuma reserva financeira.
            Isso significa que qualquer imprevisto — uma demissão, um problema de saúde, um reparo no carro —
            pode levar ao endividamento. Ter uma reserva de emergência é a diferença entre enfrentar um problema
            com tranquilidade ou entrar em uma espiral de dívidas.
          </p>
        </div>

        {/* Dicas práticas */}
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">Dicas práticas para construir sua reserva</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyTips.map((tip, i) => (
            <div key={i} className="card-shadow bg-card rounded-lg p-6 cursor-default group">
              <div className="row mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {tip.icon}
                </div>
                <h4 className="font-bold text-foreground text-sm">{tip.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default EducationSections;
