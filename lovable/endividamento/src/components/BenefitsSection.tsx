import { Smile, Target, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Tranquilidade",
    stat: "100%",
    description: "Durma melhor. Menos preocupação, mais paz de espírito.",
  },
  {
    icon: Target,
    title: "Futuro",
    stat: "∞",
    description: "Volte a sonhar. Viagens, casa própria, aposentadoria.",
  },
  {
    icon: Sparkles,
    title: "Autonomia",
    stat: "24/7",
    description: "Tome decisões com confiança. Você no comando.",
  },
  {
    icon: Heart,
    title: "Qualidade de Vida",
    stat: "+",
    description: "Relacionamentos melhores, saúde mental fortalecida.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container">
        {/* Header - Full Width */}
        <div className="mb-20">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Vale cada esforço
          </span>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="display-lg">
              IMAGINE
              <br />
              SUA VIDA
              <br />
              <span className="text-accent">SEM DÍVIDAS</span>
            </h2>
            <p className="text-xl font-light text-primary-foreground/70 leading-relaxed max-w-lg lg:pb-4">
              A jornada pode ser desafiadora, mas os benefícios de retomar o controle
              financeiro transformam cada área da sua vida.
            </p>
          </div>
        </div>

        {/* Benefits Grid - Bold Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-primary-foreground/20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 border-b border-r border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors"
            >
              {/* Large Stat */}
              <div className="font-['Bebas_Neue'] text-7xl md:text-8xl text-accent mb-4 leading-none">
                {benefit.stat}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <benefit.icon className="w-6 h-6 text-primary-foreground/60" />
                <h3 className="text-xl font-semibold">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden 2xl:block pointer-events-none select-none">
        <div className="vertical-text text-primary-foreground/5 text-xl tracking-[0.5em] font-light">
          LIBERDADE FINANCEIRA
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
