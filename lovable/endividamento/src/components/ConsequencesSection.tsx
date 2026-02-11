import { 
  Ban, 
  TrendingDown, 
  HeartCrack, 
  Frown,
  Users,
  ShieldOff
} from "lucide-react";

const consequences = [
  {
    icon: Ban,
    title: "Nome Negativado",
    description: "Portas fechadas para crédito, financiamentos e até mesmo aluguel de imóveis.",
  },
  {
    icon: TrendingDown,
    title: "Sem Planejamento",
    description: "Impossível pensar no futuro quando o presente é só apagar incêndios.",
  },
  {
    icon: HeartCrack,
    title: "Saúde Abalada",
    description: "Estresse crônico, ansiedade, depressão. O corpo paga o preço das dívidas.",
  },
  {
    icon: Users,
    title: "Conflitos Familiares",
    description: "Tensão em casa, brigas por dinheiro, relacionamentos desgastados.",
  },
  {
    icon: Frown,
    title: "Perda de Controle",
    description: "A sensação de que nada funciona, de que não há saída. Mas há.",
  },
  {
    icon: ShieldOff,
    title: "Vulnerabilidade Total",
    description: "Sem reservas, qualquer imprevisto vira uma catástrofe financeira.",
  },
];

const ConsequencesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-secondary" />
        <div className="hidden lg:block w-1/2 bg-primary" />
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Content */}
          <div>
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              O peso real
            </span>
            <h2 className="display-md text-foreground mb-8">
              AS CONSEQUÊNCIAS
              <br />
              <span className="accent-underline">VÃO ALÉM</span>
              <br />
              DO BOLSO
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
              O endividamento não é só um número vermelho na conta. 
              Ele afeta sua saúde, seus relacionamentos, seus sonhos.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4">
              <p className="text-xl font-light italic text-foreground/80">
                "A pior parte não é dever dinheiro. É acordar todo dia 
                com medo de atender o telefone."
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block">
                — Relato real de um brasileiro endividado
              </cite>
            </blockquote>
          </div>

          {/* Right Side - Cards */}
          <div className="lg:text-primary-foreground">
            <div className="grid gap-0">
              {consequences.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-6 border-b border-foreground/10 lg:border-primary-foreground/20 hover:bg-foreground/5 lg:hover:bg-primary-foreground/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-none bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-primary-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground lg:text-primary-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
