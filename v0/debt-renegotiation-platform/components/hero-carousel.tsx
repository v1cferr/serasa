"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
    {
        title: "Endividamento no Brasil",
        subtitle: "Mais de 70 milhões de brasileiros estão endividados",
        description: "Descubra como sair dessa situação e retomar o controle da sua vida financeira.",
        bg: "from-experian-magenta/90 to-experian-magenta/60",
    },
    {
        title: "Analise suas Finanças",
        subtitle: "Cadastre seus dados e veja o panorama completo",
        description: "Entenda para onde vai seu dinheiro com gráficos interativos e a Pirâmide de Maslow.",
        bg: "from-experian-navy to-experian-navy/80",
    },
    {
        title: "Assistente Financeiro",
        subtitle: "Nosso chatbot analisa sua situação",
        description: "Receba dicas personalizadas para reorganizar suas finanças usando a regra 50/30/20.",
        bg: "from-experian-magenta/80 to-experian-navy/70",
    },
    {
        title: "Educação Financeira",
        subtitle: "Aprenda sobre poupança, investimentos e mais",
        description: "Um guia completo para você construir uma base financeira sólida e sustentável.",
        bg: "from-experian-navy/90 to-experian-magenta/50",
    },
    {
        title: "Crédito Inteligente",
        subtitle: "Empréstimos, financiamentos e amortização",
        description: "Saiba quando vale a pena e como planejar para não cair em armadilhas financeiras.",
        bg: "from-experian-magenta/70 to-experian-navy/90",
    },
];

export function HeroCarousel() {
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
        <div
            id="hero"
            className="w-full flex items-center justify-center relative bg-background"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="w-full relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={cn(
                                "min-w-full h-[500px] md:h-[600px] bg-gradient-to-br flex items-center justify-center p-8 md:p-16",
                                slide.bg
                            )}
                        >
                            <div className="text-center max-w-4xl mx-auto">
                                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-sm">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all text-white border border-white/20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all text-white border border-white/20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                i === current ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                            )}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
