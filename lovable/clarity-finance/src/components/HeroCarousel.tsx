import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Endividamento no Brasil",
    subtitle: "Mais de 70 milhões de brasileiros estão endividados",
    description: "Descubra como sair dessa situação e retomar o controle da sua vida financeira.",
    bg: "from-primary/90 to-primary/60",
    svgBg: (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg className="absolute -right-20 -top-20 w-96 h-96" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M60 130 L100 50 L140 130 Z" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        <svg className="absolute -left-10 bottom-10 w-72 h-72" viewBox="0 0 100 100"><rect x="10" y="60" width="15" height="30" fill="currentColor" /><rect x="30" y="40" width="15" height="50" fill="currentColor" /><rect x="50" y="20" width="15" height="70" fill="currentColor" /><rect x="70" y="50" width="15" height="40" fill="currentColor" /></svg>
      </div>
    ),
  },
  {
    title: "Analise suas Finanças",
    subtitle: "Cadastre seus dados e veja o panorama completo",
    description: "Entenda para onde vai seu dinheiro com gráficos interativos e a Pirâmide de Maslow.",
    bg: "from-serasa-dark to-serasa-dark/80",
    svgBg: (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg className="absolute right-10 top-10 w-80 h-80" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" fill="none" /><line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" /><line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" /><path d="M100 20 A80 80 0 0 1 180 100" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
        <svg className="absolute -left-16 -bottom-10 w-64 h-64" viewBox="0 0 100 100"><circle cx="35" cy="65" r="25" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="65" cy="65" r="25" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="50" cy="38" r="25" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
      </div>
    ),
  },
  {
    title: "Assistente Financeiro",
    subtitle: "Nosso chatbot analisa sua situação",
    description: "Receba dicas personalizadas para reorganizar suas finanças usando a regra 50/30/20.",
    bg: "from-primary/80 to-serasa-dark/70",
    svgBg: (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg className="absolute right-10 bottom-10 w-80 h-80" viewBox="0 0 200 200"><rect x="20" y="40" width="160" height="120" rx="20" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="100" r="5" fill="currentColor" /><circle cx="100" cy="100" r="5" fill="currentColor" /><circle cx="140" cy="100" r="5" fill="currentColor" /><path d="M90 160 L100 180 L110 160" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        <svg className="absolute -left-10 top-10 w-60 h-60" viewBox="0 0 100 100"><path d="M20 80 Q50 20 80 80" stroke="currentColor" strokeWidth="2" fill="none" /><line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="1" /></svg>
      </div>
    ),
  },
  {
    title: "Educação Financeira",
    subtitle: "Aprenda sobre poupança, investimentos e mais",
    description: "Um guia completo para você construir uma base financeira sólida e sustentável.",
    bg: "from-serasa-dark/90 to-primary/50",
    svgBg: (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg className="absolute right-5 top-5 w-72 h-72" viewBox="0 0 200 200"><path d="M100 20 L180 80 L150 170 L50 170 L20 80 Z" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        <svg className="absolute -left-10 bottom-0 w-80 h-80" viewBox="0 0 200 200"><path d="M40 160 L40 60 L80 40 L120 70 L160 30 L160 160 Z" stroke="currentColor" strokeWidth="2" fill="none" /><line x1="40" y1="160" x2="160" y2="160" stroke="currentColor" strokeWidth="2" /></svg>
      </div>
    ),
  },
  {
    title: "Crédito Inteligente",
    subtitle: "Empréstimos, financiamentos e amortização",
    description: "Saiba quando vale a pena e como planejar para não cair em armadilhas financeiras.",
    bg: "from-primary/70 to-serasa-dark/90",
    svgBg: (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg className="absolute right-10 top-10 w-72 h-72" viewBox="0 0 200 200"><rect x="30" y="50" width="140" height="100" rx="10" stroke="currentColor" strokeWidth="2" fill="none" /><line x1="30" y1="80" x2="170" y2="80" stroke="currentColor" strokeWidth="2" /><rect x="40" y="110" width="40" height="25" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
        <svg className="absolute -left-5 bottom-5 w-64 h-64" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" /><text x="35" y="60" fontSize="30" fill="currentColor" fontWeight="bold">$</text></svg>
      </div>
    ),
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
              className={`min-w-full h-[500px] md:h-[600px] bg-gradient-to-br ${slide.bg} flex items-center justify-center p-8 md:p-16 relative`}
            >
              {slide.svgBg}
              <div className="text-center max-w-2xl relative z-10">
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
