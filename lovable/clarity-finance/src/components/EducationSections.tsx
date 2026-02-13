import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const column1 = [
  {
    title: "Educação",
    content:
      "O melhor investimento é em conhecimento. Investir em educação — cursos, livros, especializações — é o investimento com maior retorno a longo prazo. Quanto mais você aprende sobre finanças, melhores decisões toma com seu dinheiro.",
  },
  {
    title: "Liquidez Diária",
    content:
      "Liquidez diária significa que você pode resgatar seu investimento a qualquer momento sem perda. Ideal para reserva de emergência. Exemplos: poupança, CDB de liquidez diária, Tesouro Selic.",
  },
  {
    title: "Poupança",
    content:
      "A poupança é o investimento mais acessível do Brasil. Apesar do rendimento baixo (próximo à inflação), ela é isenta de IR e tem liquidez. Use como porta de entrada para investimentos melhores.",
  },
  {
    title: "Patrimônio",
    content:
      "Patrimônio é tudo que você possui de valor: imóveis, veículos, investimentos, negócios. O foco deve ser acumular ativos que geram renda (aluguéis, dividendos) e não passivos que geram despesas.",
  },
  {
    title: "Ações",
    content:
      "Ações são pequenas partes de empresas negociadas na bolsa. Investir em ações é investir no crescimento de empresas. Comece com fundos de índice (ETFs) para diversificação com menor risco.",
  },
  {
    title: "Empreendimento",
    content:
      "Empreender pode ser desde um negócio próprio até investir em imóveis para aluguel. Diversificar fontes de renda é fundamental para estabilidade financeira a longo prazo.",
  },
];

const column2 = [
  {
    title: "Inflação",
    content:
      "A inflação corrói o poder de compra do seu dinheiro. Se seus investimentos rendem menos que a inflação, você está perdendo dinheiro. Por isso, é essencial investir acima da inflação (IPCA).",
  },
  {
    title: "CDB e CDI",
    content:
      "CDB (Certificado de Depósito Bancário) é um título emitido por bancos. CDI é a taxa de referência. Um CDB que paga 100% do CDI rende aproximadamente a taxa Selic. Seguro pelo FGC até R$ 250 mil.",
  },
  {
    title: "Taxas e Juros",
    content:
      "Juros simples incidem sobre o valor inicial. Juros compostos incidem sobre o montante acumulado — 'juros sobre juros'. Nos investimentos, compostos são seus aliados. Nas dívidas, seu pior inimigo.",
  },
  {
    title: "Empréstimos",
    content:
      "Empréstimos fazem sentido para investimentos que geram retorno (educação, negócio). Evite empréstimos para consumo. Compare taxas entre bancos e fintechs. Analise o CET (Custo Efetivo Total).",
  },
  {
    title: "Amortização",
    content:
      "Amortização é o pagamento antecipado do principal da dívida, reduzindo juros futuros. Existem dois sistemas: SAC (parcelas decrescentes) e Price (parcelas fixas). No SAC, você paga menos juros total.",
  },
];

const column3 = [
  {
    title: "Reserva de Emergência",
    content:
      "A reserva de emergência é o alicerce da sua saúde financeira. O ideal é ter de 3 a 6 meses dos seus gastos mensais guardados em investimentos com liquidez diária (Tesouro Selic, CDB de liquidez diária). Ela garante que imprevistos não destruam seu planejamento e evita que você precise recorrer a empréstimos com juros altos.",
  },
  {
    title: "Pirâmide de Maslow",
    content:
      "A Pirâmide de Maslow aplicada às finanças organiza suas necessidades em 5 níveis: Fisiológica (alimentação e necessidades básicas), Segurança (moradia e renda fixa), Social (educação e saúde), Estima (lazer e bem-estar) e Autorrealização (investimentos e crescimento). Garanta cada nível antes de avançar para o próximo — assim você constrói uma base financeira sólida e sustentável.",
  },
];

const FaqColumn = ({
  items,
}: {
  items: { title: string; content: string }[];
}) => (
  <Accordion type="multiple" className="w-full">
    {items.map((item, i) => (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger className="text-sm text-left">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const EducationSections = () => (
  <section id="educacao" className="w-full py-16">
    <div className="max-w-[1366px] mx-auto px-[3%]">
      <h2 className="text-3xl font-bold text-foreground text-center mb-10">
        Educação Financeira
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-foreground mb-4 text-lg">Investimentos</h3>
          <FaqColumn items={column1} />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-4 text-lg">Conceitos</h3>
          <FaqColumn items={column2} />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-4 text-lg">Proteção</h3>
          <FaqColumn items={column3} />
        </div>
      </div>
    </div>
  </section>
);

export default EducationSections;
