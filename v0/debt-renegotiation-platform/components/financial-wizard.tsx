"use client";

import { useState } from "react";
import { Plus, ArrowRight, ArrowLeft, SkipForward, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FinancialData {
    divida: number;
    rendaFixa: number[];
    rendaVariavel: number[];
    gastosFixos: number[];
    gastosVariaveis: number[];
}

export interface FinancialWizardProps {
    onComplete: (data: FinancialData) => void;
}

const steps = [
    {
        key: "divida",
        title: "Dívida Ativa",
        question: "Você possui alguma dívida ativa? Digite o valor:",
        description: "Dívida ativa é qualquer valor que você deve a terceiros — bancos, lojas, cartão de crédito, empréstimos, etc. Saber o total é o primeiro passo para se reorganizar.",
        image: "/assets/financial-wizard/wizard-divida.jpg",
        multiple: false,
    },
    {
        key: "rendaFixa",
        title: "Renda Fixa",
        question: "Deseja adicionar alguma renda fixa?",
        description: "Renda fixa é todo valor que você recebe regularmente e de forma previsível: salário, aposentadoria, pensão, aluguéis recebidos, entre outros.",
        image: "/assets/financial-wizard/wizard-renda-fixa.jpg",
        multiple: true,
    },
    {
        key: "rendaVariavel",
        title: "Renda Variável",
        question: "Deseja adicionar alguma renda variável?",
        description: "Renda variável inclui trabalho informal, freelances, comissões, gorjetas, renda extra e qualquer ganho sem valor fixo mensal.",
        image: "/assets/financial-wizard/wizard-renda-variavel.jpg",
        multiple: true,
    },
    {
        key: "gastosFixos",
        title: "Gastos Fixos",
        question: "Deseja adicionar algum gasto fixo?",
        description: "Gastos fixos são despesas recorrentes com valor previsível: aluguel, educação, financiamentos, plano de saúde, IPVA, IPTU, entre outros.",
        image: "/assets/financial-wizard/wizard-gastos-fixos.jpg",
        multiple: true,
    },
    {
        key: "gastosVariaveis",
        title: "Gastos Variáveis",
        question: "Deseja adicionar algum gasto variável?",
        description: "Gastos variáveis mudam a cada mês: água, luz, alimentação, higiene, lazer, saúde e outros custos do dia a dia.",
        image: "/assets/financial-wizard/wizard-gastos-variaveis.jpg",
        multiple: true,
    },
];

const formatCurrency = (val: string) => {
    const num = val.replace(/\D/g, "");
    const parsed = (parseInt(num || "0") / 100).toFixed(2);
    return parsed.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

interface StepSnapshot {
    data: FinancialData;
    inputValue: string;
    items: number[];
}

export function FinancialWizard({ onComplete }: FinancialWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState<FinancialData>({
        divida: 0,
        rendaFixa: [],
        rendaVariavel: [],
        gastosFixos: [],
        gastosVariaveis: [],
    });
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<number[]>([]);
    const [history, setHistory] = useState<StepSnapshot[]>([]);

    const step = steps[currentStep];

    const handleAddItem = () => {
        const num = parseFloat(inputValue.replace(/\./g, "").replace(",", ".")) || 0;
        if (num > 0) {
            setItems([...items, num]);
            setInputValue("");
        }
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const saveAndAdvance = (newData: FinancialData) => {
        setHistory([...history, { data: { ...data }, inputValue, items: [...items] }]);
        setData(newData);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setInputValue("");
            setItems([]);
        } else {
            onComplete(newData);
        }
    };

    const handleNext = () => {
        const num = parseFloat(inputValue.replace(/\./g, "").replace(",", ".")) || 0;
        const newData = { ...data };

        // If user typed a number but didn't add it yet in a multiple step, add it now?
        // Behavior decided: 
        // If multiple and input > 0: Add it and stay? Or add it and continue? 
        // Let's Add it and continue for smoother flow if they just typed one thing.
        // If multiple and input == 0: Just continue with existing items.

        if (step.multiple) {
            const allItems = num > 0 ? [...items, num] : items;
            (newData as any)[step.key] = allItems;
        } else {
            (newData as any)[step.key] = num;
        }
        saveAndAdvance(newData);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const num = parseFloat(inputValue.replace(/\./g, "").replace(",", ".")) || 0;

            if (step.multiple) {
                if (num > 0) {
                    handleAddItem();
                } else {
                    handleNext();
                }
            } else {
                handleNext();
            }
        }
    };

    const handleSkip = () => {
        const newData = { ...data };
        if (step.multiple) {
            (newData as any)[step.key] = items.length > 0 ? items : [];
        } else {
            (newData as any)[step.key] = 0;
        }
        saveAndAdvance(newData);
    };

    const handleBack = () => {
        if (history.length === 0) return;
        const prev = history[history.length - 1];
        setData(prev.data);
        setInputValue(prev.inputValue);
        setItems(prev.items);
        setHistory(history.slice(0, -1));
        setCurrentStep(currentStep - 1);
    };

    return (
        <div
            className="w-full flex flex-col items-center justify-center gap-8 animate-in fade-in duration-700"
            style={{ padding: "2%" }}
        >
            {/* Progress */}
            <div className="w-full max-w-5xl flex items-center gap-2 mb-6">
                {steps.map((s, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-default">
                        <div className="relative">
                            {i < currentStep && (
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm" />
                            )}
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2",
                                    i <= currentStep
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-muted text-muted-foreground border-muted-foreground/20"
                                )}
                            >
                                {i + 1}
                            </div>
                        </div>
                        <span className={cn(
                            "text-xs font-medium hidden sm:block transition-colors",
                            i <= currentStep ? "text-primary" : "text-muted-foreground"
                        )}
                        >
                            {s.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-stretch bg-card border rounded-2xl shadow-xl overflow-hidden min-h-[500px]">
                {/* Left - Input */}
                <div className="flex-1 flex flex-col gap-6 p-8 lg:p-12 justify-center">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-foreground tracking-tight">{step.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{step.question}</p>
                    </div>

                    {/* Added items list */}
                    {step.multiple && items.length > 0 && (
                        <div className="flex flex-wrap gap-2 animate-in slide-in-from-bottom-2">
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-semibold shadow-sm transition-colors hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive"
                                >
                                    <span>R$ {item.toFixed(2).replace(".", ",")}</span>
                                    <button
                                        onClick={() => handleRemoveItem(i)}
                                        className="p-0.5 rounded-full hover:bg-destructive/20 transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                        <span className="sr-only">Remover</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="relative flex-1 min-w-[200px] group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-xl group-focus-within:text-primary transition-colors">
                                R$
                            </span>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(formatCurrency(e.target.value))}
                                onKeyDown={handleKeyDown}
                                placeholder="0,00"
                                className="h-14 pl-12 text-2xl font-bold border-muted-foreground/20 focus-visible:ring-primary shadow-sm"
                            />
                        </div>

                        {step.multiple && (
                            <Button
                                onClick={handleAddItem}
                                variant="outline"
                                className="h-14 px-6 border-dashed border-2 font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-muted-foreground"
                            >
                                <Plus className="w-5 h-5 mr-2" /> Adicionar
                            </Button>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t mt-4">
                        {currentStep > 0 && (
                            <Button
                                onClick={handleBack}
                                variant="ghost"
                                className="h-12 px-6 text-muted-foreground hover:text-foreground"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
                            </Button>
                        )}

                        <div className="flex-1 flex gap-3 justify-end">
                            <Button
                                onClick={handleSkip}
                                variant="secondary"
                                className="h-12 px-6"
                            >
                                <SkipForward className="w-4 h-4 mr-2" /> Pular
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="h-12 px-8 text-lg shadow-lg hover:shadow-primary/25 transition-all"
                            >
                                {currentStep < steps.length - 1 ? "Próximo" : "Ver Resultados"}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right - Illustration with background image */}
                <div className="hidden lg:flex flex-1 relative min-h-[400px] bg-muted">
                    <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 z-10 space-y-3">
                        <div className="inline-block p-2 rounded-lg bg-white/10 backdrop-blur-md mb-2 border border-white/20">
                            <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-base text-white/90 leading-relaxed font-medium max-w-md drop-shadow-md">
                            {step.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
