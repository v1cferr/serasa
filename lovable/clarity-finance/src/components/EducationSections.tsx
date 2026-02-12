import { BookOpen, Shield, TrendingUp, Landmark, PiggyBank, Droplets, BarChart3, GraduationCap,
  Banknote, Percent, LineChart, Briefcase, HandCoins, Calculator, Home, ClipboardList } from "lucide-react";
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

const section4Cards: EducationCard[] = [
  {
    icon: <PiggyBank className="w-5 h-5" />,
    title: "Poupança e Reserva de Emergência",
    summary: "A base da sua segurança financeira.",
    detail: "Tenha sempre de 3 a 6 meses de gastos guardados em uma aplicação de liquidez diária. A poupança é o primeiro passo, mas existem opções melhores como CDBs com liquidez diária e Tesouro Selic.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Liquidez Diária",
    summary: "Acesse seu dinheiro quando precisar.",
    detail: "Liquidez diária significa que você pode resgatar seu investimento a qualquer momento sem perda. Ideal para reserva de emergência. Exemplos: poupança, CDB de liquidez diária, Tesouro Selic.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Inflação e seu Impacto",
    summary: "Seu dinheiro perde valor com o tempo.",
    detail: "A inflação corrói o poder de compra do seu dinheiro. Se seus investimentos rendem menos que a inflação, você está perdendo dinheiro. Por isso, é essencial investir acima da inflação (IPCA).",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Educação Financeira Básica",
    summary: "Conhecimento é o melhor investimento.",
    detail: "Entender juros compostos, orçamento pessoal, diferença entre ativos e passivos, e a importância de investir regularmente são fundamentos que transformam sua relação com o dinheiro.",
  },
];

const section5Cards: EducationCard[] = [
  {
    icon: <Landmark className="w-5 h-5" />,
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
    icon: <LineChart className="w-5 h-5" />,
    title: "Ações e Patrimônio",
    summary: "Invista em empresas e construa riqueza.",
    detail: "Ações são pequenas partes de empresas negociadas na bolsa. Investir em ações é investir no crescimento de empresas. Comece com fundos de índice (ETFs) para diversificação com menor risco.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Empreendimento",
    summary: "Crie fontes de renda ativa e passiva.",
    detail: "Empreender pode ser desde um negócio próprio até investir em imóveis para aluguel. Diversificar fontes de renda é fundamental para estabilidade financeira a longo prazo.",
  },
];

const section6Cards: EducationCard[] = [
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
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Planejamento Financeiro",
    summary: "Organize suas finanças para o futuro.",
    detail: "Planejamento financeiro sustentável envolve: orçamento mensal, reserva de emergência, proteção (seguros), investimentos de longo prazo e revisão periódica dos objetivos e estratégias.",
  },
];

const EducationSections = () => (
  <>
    <Section
      id="educacao"
      title="Educação Financeira: Fundamentos"
      subtitle="Aprenda os conceitos essenciais para uma vida financeira saudável"
      cards={section4Cards}
    />
    <Section
      id="investimentos"
      title="Investimentos e Crescimento"
      subtitle="Faça seu dinheiro trabalhar para você"
      cards={section5Cards}
    />
    <Section
      id="credito"
      title="Crédito e Planejamento"
      subtitle="Use o crédito a seu favor com inteligência"
      cards={section6Cards}
    />
  </>
);

export default EducationSections;
