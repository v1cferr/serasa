import {
  CreditCard,
  ShoppingBag,
  Brain,
  Megaphone,
  BookX,
  Dices,
  Users
} from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Crédito Fácil Demais",
    description: "Cartões, empréstimos, parcelamentos infinitos. O acesso fácil ao crédito cria a ilusão de poder de compra.",
    number: "01",
  },
  {
    icon: ShoppingBag,
    title: "Consumo Impulsivo",
    description: "Promoções irresistíveis, status social, a pressão de ter. Consumimos mais do que precisamos.",
    number: "02",
  },
  {
    icon: BookX,
    title: "Falta de Educação Financeira",
    description: "Ninguém nos ensinou a lidar com dinheiro. A escola não prepara, a família muitas vezes também não.",
    number: "03",
  },
  {
    icon: Brain,
    title: "Impacto na Saúde Mental",
    description: "Ansiedade, insônia, estresse constante. O peso das dívidas afeta corpo e mente.",
    number: "04",
  },
  {
    icon: Megaphone,
    title: "Marketing Agressivo",
    description: "Bombardeio de ofertas, gatilhos emocionais, urgência artificial. Somos alvos constantes.",
    number: "05",
  },
  {
    icon: Dices,
    title: "Apostas e Vícios",
    description: "Jogos, bets, vícios financeiros. Promessas de ganho fácil que destroem patrimônios.",
    number: "06",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Section Header - Asymmetric */}
      <div className="container mb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Entenda o cenário
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-['Bebas_Neue'] text-foreground">
              POR QUE
              <br />
              <span className="text-accent">ISSO</span>
              <br />
              ACONTECE?
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              O endividamento não é fraqueza pessoal. É resultado de um sistema
              desenhado para nos fazer consumir além do que podemos.
            </p>
          </div>
        </div>
      </div>

      {/* Problems Grid - Magazine Style */}
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-foreground/10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 border-b-2 border-r-2 border-foreground/10 hover:bg-accent/5 transition-all duration-300"
            >
              {/* Large Number */}
              <span className="absolute top-4 right-4 font-['Bebas_Neue'] text-6xl text-foreground/5 group-hover:text-accent/20 transition-colors">
                {problem.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-none bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlighted Callout */}
      <div className="container mt-16">
        <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Users className="w-12 h-12 flex-shrink-0 text-accent" />
          <div>
            <h4 className="text-xl font-semibold mb-2">Vulnerabilidade Social</h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Pessoas em situação de vulnerabilidade são ainda mais afetadas.
              Golpes, empréstimos abusivos e falta de rede de apoio agravam o problema.
            </p>
          </div>
        </div>
      </div>

      {/* Large decorative number */}
      <div className="absolute -bottom-20 -left-20 text-foreground/[0.02] font-['Bebas_Neue'] text-[50vw] leading-none pointer-events-none">
        02
      </div>
    </section>
  );
};

export default ProblemSection;
