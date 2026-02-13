"use client";

import Image from "next/image";
import { LogIn, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card px-4 pb-16 pt-24 md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Cálculo Vital
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Renegocie sem comprometer seu sustento.
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Um plano que coloca sua sobrevivência antes da dívida.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]"
            >
              <LogIn className="h-5 w-5" />
              Entrar com CPF
            </button>
            <button
              type="button"
              className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-2xl border-2 border-secondary bg-transparent px-6 text-base font-semibold text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground active:scale-[0.98]"
            >
              <Eye className="h-5 w-5" />
              {"Simulação Anônima"}
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-[300px] w-[300px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]">
            <Image
              src="/hero-illustration.jpg"
              alt="Pessoa protegida por guarda-chuva financeiro"
              fill
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 420px"
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
