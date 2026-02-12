import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Endividamento no Brasil",
    subtitle: "Mais de 70 milhões de brasileiros estão endividados",
    description: "Descubra como sair dessa situação e retomar o controle da sua vida financeira.",
    bg: "from-primary/90 to-primary/60",
  },
  {
    title: "Analise suas Finanças",
    subtitle: "Cadastre seus dados e veja o panorama completo",
    description: "Entenda para onde vai seu dinheiro com gráficos interativos e a Pirâmide de Maslow.",
    bg: "from-serasa-dark to-serasa-dark/80",
  },
  {
    title: "Assistente Financeiro",
    subtitle: "Nosso chatbot analisa sua situação",
    description: "Receba dicas personalizadas para reorganizar suas finanças usando a regra 50/30/20.",
    bg: "from-primary/80 to-serasa-dark/70",
  },
  {
    title: "Educação Financeira",
    subtitle: "Aprenda sobre poupança, investimentos e mais",
    description: "Um guia completo para você construir uma base financeira sólida e sustentável.",
    bg: "from-serasa-dark/90 to-primary/50",
  },
  {
    title: "Crédito Inteligente",
    subtitle: "Empréstimos, financiamentos e amortização",
    description: "Saiba quando vale a pena e como planejar para não cair em armadilhas financeiras.",
    bg: "from-primary/70 to-serasa-dark/90",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      id="hero"
      className="w-full flex items-center justify-center"
      style={{ maxHeight: 768 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="w-full max-w-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`min-w-full h-[500px] md:h-[600px] bg-gradient-to-br ${slide.bg} flex items-center justify-center p-8 md:p-16`}
            >
              <div className="text-center max-w-2xl">
                <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-primary-foreground/80 text-base md:text-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center shadow-md hover:bg-card transition"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center shadow-md hover:bg-card transition"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
