"use client";

import { TrendingUp, BadgePercent, Clock, Zap } from "lucide-react";

const score = 620;
const maxScore = 1000;
const scorePercent = (score / maxScore) * 100;

function getScoreColor(s: number) {
  if (s >= 700) return { text: "text-success", bar: "bg-success", label: "Bom" };
  if (s >= 400) return { text: "text-warning", bar: "bg-warning", label: "Regular" };
  return { text: "text-destructive", bar: "bg-destructive", label: "Atenção" };
}

const scoreInfo = getScoreColor(score);

const offers = [
  {
    icon: BadgePercent,
    creditor: "Banco Nacional",
    original: "R$ 4.500",
    discounted: "R$ 1.800",
    discount: "60% OFF",
    installments: "6x de R$ 300",
  },
  {
    icon: Clock,
    creditor: "Financeira Alfa",
    original: "R$ 2.200",
    discounted: "R$ 1.100",
    discount: "50% OFF",
    installments: "4x de R$ 275",
  },
  {
    icon: Zap,
    creditor: "Cartão Beta",
    original: "R$ 890",
    discounted: "R$ 356",
    discount: "60% OFF",
    installments: "3x de R$ 119",
  },
];

export function DashboardPreview() {
  return (
    <section className="bg-background px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {"Seu Painel Financeiro"}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {"Veja como ficaria seu dashboard após a simulação."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Score Card */}
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-8 shadow-sm lg:col-span-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {"Saúde Financeira"}
              </h3>
            </div>
            <div className="relative flex h-36 w-36 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeDasharray={`${scorePercent * 2.64} ${264 - scorePercent * 2.64}`}
                  strokeLinecap="round"
                  className={scoreInfo.text}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className={`text-3xl font-bold ${scoreInfo.text}`}>
                  {score}
                </span>
                <span className="text-xs text-muted-foreground">
                  {"de 1000"}
                </span>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${scoreInfo.bar} text-card`}
            >
              {scoreInfo.label}
            </span>
          </div>

          {/* Offers */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">
              {"Ofertas Personalizadas"}
            </h3>
            {offers.map((offer) => (
              <div
                key={offer.creditor}
                className="flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <offer.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {offer.creditor}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="line-through">{offer.original}</span>
                      {" "}
                      <span className="font-bold text-success">
                        {offer.discounted}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                    {offer.discount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {offer.installments}
                  </span>
                  <button
                    type="button"
                    className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Negociar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
