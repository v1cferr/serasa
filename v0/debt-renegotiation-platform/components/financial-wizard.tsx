"use client";

import { useState } from "react";
import { Plus, ArrowRight, SkipForward, ArrowLeft, CreditCard, Wallet, BarChart3, Home, ShoppingCart, CheckCircle, AlertTriangle, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FinancialData {
    divida: number;
    rendaFixa: number[];
    rendaVariavel: number[];
    gastosFixos: number[];
    gastosVariaveis: number[];
}

interface FinancialWizardProps {
    onComplete?: (data: FinancialData) => void;
}

const steps = [
    {
        key: "divida",
        title: "Dívida Ativa",
        question: "Você possui alguma dívida ativa? Digite o valor:",
        description: "Dívida ativa é qualquer valor que você deve a terceiros — bancos, lojas, cartão de crédito, empréstimos, etc. Saber o total é o primeiro passo para se reorganizar.",
        multiple: false,
        icon: CreditCard
    },
    {
        key: "rendaFixa",
        title: "Renda Fixa",
        question: "Deseja adicionar alguma renda fixa?",
        description: "Renda fixa é todo valor que você recebe regularmente e de forma previsível: salário, aposentadoria, pensão, aluguéis recebidos, entre outros.",
        multiple: true,
        icon: Wallet
    },
    {
        key: "rendaVariavel",
        title: "Renda Variável",
        question: "Deseja adicionar alguma renda variável?",
        description: "Renda variável inclui trabalho informal, freelances, comissões, gorjetas, renda extra e qualquer ganho sem valor fixo mensal.",
        multiple: true,
        icon: BarChart3
    },
    {
        key: "gastosFixos",
        title: "Gastos Fixos",
        question: "Deseja adicionar algum gasto fixo?",
        description: "Gastos fixos são despesas recorrentes com valor previsível: aluguel, educação, financiamentos, plano de saúde, IPVA, IPTU, entre outros.",
        multiple: true,
        icon: Home
    },
    {
        key: "gastosVariaveis",
        title: "Gastos Variáveis",
        question: "Deseja adicionar algum gasto variável?",
        description: "Gastos variáveis mudam a cada mês: água, luz, alimentação, higiene, lazer, saúde e outros custos do dia a dia.",
        multiple: true,
        icon: ShoppingCart
    },
];

const formatCurrency = (val: string) => {
    const num = val.replace(/\D/g, "");
    const parsed = (parseInt(num || "0") / 100).toFixed(2);
    return parsed.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const parseCurrency = (val: string) => {
    return parseFloat(val.replace(/\./g, "").replace(",", ".")) || 0;
};

export function FinancialWizard({ onComplete }: FinancialWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [complete, setComplete] = useState(false);
    const [data, setData] = useState<FinancialData>({
        divida: 0,
        rendaFixa: [],
        rendaVariavel: [],
        gastosFixos: [],
        gastosVariaveis: [],
    });
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<number[]>([]);

    // Function to initialize inputValue/items when navigating back/forward
    const initializeStep = (stepIndex: number, currentData: FinancialData) => {
        const stepKey = steps[stepIndex].key as keyof FinancialData;
        const val = currentData[stepKey];

        if (steps[stepIndex].multiple && Array.isArray(val)) {
            setItems([...val]);
            setInputValue("");
        } else if (!steps[stepIndex].multiple && typeof val === 'number') {
            setItems([]);
            setInputValue(val > 0 ? val.toFixed(2).replace('.', ',') : "");
        } else {
            setItems([]);
            setInputValue("");
        }
    };

    const handleAddItem = () => {
        const num = parseCurrency(inputValue);
        if (num > 0) {
            setItems([...items, num]);
            setInputValue("");
        }
    };

    const updateData = () => {
        const num = parseCurrency(inputValue);
        const newData = { ...data };
        const stepKey = steps[currentStep].key as keyof FinancialData;

        if (steps[currentStep].multiple) {
            // If there is a pending input value, add it to items implicitly or just take items
            // Ideally user should click "Add", but we can be forgiving or just take 'items'
            // Let's rely on 'items' list primarily. If input has value, maybe prompt or ignore?
            // Current logic: take just the list.
            // IF user typed something but didn't click add, let's allow adding it if valid
            const allItems = num > 0 ? [...items, num] : items;
            // @ts-ignore
            newData[stepKey] = allItems;
        } else {
            // @ts-ignore
            newData[stepKey] = num;
        }
        setData(newData);
        return newData;
    }

    const handleNext = () => {
        const newData = updateData();

        if (currentStep < steps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            initializeStep(nextStep, newData);
        } else {
            setComplete(true);
            if (onComplete) onComplete(newData);
        }
    };

    const handleBack = () => {
        // Save current state before going back? Yes, good practice.
        updateData();

        if (currentStep > 0) {
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            initializeStep(prevStep, data); // load data for previous step
        }
    };

    const handleSkip = () => {
        // Clear current step data? Or just keep what was there?
        // "Skip" usually means "I don't have this" or "Next".
        // Let's assume it clears/zeros the current step if mixed with "Next".
        // But preserving data might be better if they actidentally skipped. 
        // Let's treat as "Next" without validation mostly, but maybe zeroing if empty?
        // Re-using handleNext logic for simplicity, relying on state being correct or empty.
        // If user really wants to skip effectively setting to 0, they can just leave empty.
        handleNext();
    };

    const resetWizard = () => {
        setCurrentStep(0);
        setComplete(false);
        setData({
            divida: 0,
            rendaFixa: [],
            rendaVariavel: [],
            gastosFixos: [],
            gastosVariaveis: [],
        });
        setInputValue("");
        setItems([]);
    };

    if (complete) {
        const totalRenda = [...data.rendaFixa, ...data.rendaVariavel].reduce((a, b) => a + b, 0);
        const totalGastos = [...data.gastosFixos, ...data.gastosVariaveis].reduce((a, b) => a + b, 0);
        const saldo = totalRenda - totalGastos;
        const totalDivida = data.divida;

        const comprometedRenda = totalRenda > 0 ? (totalGastos / totalRenda) * 100 : 0;

        let statusColor = "text-experian-alert-green";
        let statusIcon = CheckCircle;
        let statusMessage = "Sua situação está equilibrada!";

        if (saldo < 0) {
            statusColor = "text-experian-alert-red";
            statusIcon = AlertOctagon;
            statusMessage = "Atenção! Suas despesas superam sua renda.";
        } else if (comprometedRenda > 70) {
            statusColor = "text-experian-orange";
            statusIcon = AlertTriangle;
            statusMessage = "Cuidado, seu orçamento está muito comprometido.";
        }

        return (
            <div className="w-full flex justify-center py-12 px-4 bg-gray-50 dark:bg-experian-navy/10 animate-in fade-in zoom-in duration-500">
                <Card className="w-full max-w-4xl border-t-4 border-t-experian-magenta shadow-xl">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-16 h-16 rounded-full bg-experian-magenta/10 flex items-center justify-center mb-4">
                            <BarChart3 className="w-8 h-8 text-experian-magenta" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-experian-dark-blue dark:text-white">Resultado da Análise</CardTitle>
                        <CardDescription className="text-lg">Veja como está sua saúde financeira hoje</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 p-6 md:p-10">

                        <div className={cn("flex items-center justify-center gap-3 text-xl font-bold p-4 rounded-lg bg-white dark:bg-black/20 shadow-sm border", statusColor)}>
                            <statusIcon className="w-6 h-6" />
                            {statusMessage}
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-experian-blue-10/50 dark:bg-white/5 p-6 rounded-xl border border-experian-blue-20/50">
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Renda Total</span>
                                <div className="text-2xl font-bold text-experian-dark-blue dark:text-blue-300 mt-1">
                                    R$ {totalRenda.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                            <div className="bg-experian-blue-10/50 dark:bg-white/5 p-6 rounded-xl border border-experian-blue-20/50">
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Despesas Mensais</span>
                                <div className="text-2xl font-bold text-experian-raspberry dark:text-red-300 mt-1">
                                    R$ {totalGastos.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                            <div className={cn("p-6 rounded-xl border border-experian-blue-20/50", saldo >= 0 ? "bg-experian-alert-green/10" : "bg-experian-alert-red/10")}>
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Saldo Mensal</span>
                                <div className={cn("text-2xl font-bold mt-1", saldo >= 0 ? "text-experian-alert-green" : "text-experian-alert-red")}>
                                    R$ {saldo.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                        </div>

                        {totalDivida > 0 && (
                            <div className="mt-4 p-6 bg-experian-purple/5 border border-experian-purple/20 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-experian-purple/10 rounded-full">
                                        <CreditCard className="w-6 h-6 text-experian-purple" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-experian-dark-blue dark:text-white">Dívida Ativa Total</h4>
                                        <p className="text-sm text-gray-500">Valor que precisa ser negociado</p>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-experian-purple">
                                    R$ {totalDivida.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-center mt-8 gap-4">
                            <Button onClick={resetWizard} variant="outline" className="border-experian-dark-blue text-experian-dark-blue hover:bg-experian-dark-blue/5">
                                Refazer Análise
                            </Button>
                            <Button className="bg-experian-magenta hover:bg-experian-magenta/90 text-white shadow-lg shadow-experian-magenta/20">
                                Ver Opções de Negociação <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const stepInfo = steps[currentStep];
    const StepIcon = stepInfo.icon;
    const progressPercent = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="w-full flex flex-col items-center justify-center gap-8 py-12 px-4 md:px-8 bg-gray-50 dark:bg-experian-navy/10 relative transition-all duration-300">
            <div className="w-full max-w-6xl">
                {/* Progress Bar */}
                <div className="w-full mb-8">
                    <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                        <span>Passo {currentStep + 1} de {steps.length}</span>
                        <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-2 bg-gray-200 dark:bg-white/10" indicatorClassName="bg-experian-magenta" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Left - Input */}
                    <div className="flex-1 flex flex-col gap-6 w-full animate-in slide-in-from-left-4 duration-500">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-experian-light-blue/10 rounded-lg lg:hidden">
                                    <StepIcon className="w-6 h-6 text-experian-dark-blue" />
                                </div>
                                <h3 className="text-3xl font-bold text-experian-dark-blue dark:text-white">{stepInfo.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 min-h-[3.5rem]">{stepInfo.question}</p>
                        </div>

                        {/* Added items list */}
                        {stepInfo.multiple && items.length > 0 && (
                            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2">
                                {items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full bg-experian-light-blue/10 text-experian-dark-blue dark:text-blue-200 border border-experian-light-blue/20 text-sm font-semibold flex items-center gap-2"
                                    >
                                        R$ {item.toFixed(2).replace(".", ",")}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg group-focus-within:text-experian-purple transition-colors">
                                    R$
                                </span>
                                <Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(formatCurrency(e.target.value))}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            if (stepInfo.multiple) handleAddItem();
                                            else handleNext();
                                        }
                                    }}
                                    placeholder="0,00"
                                    className="h-14 pl-12 text-xl font-medium border-gray-300 focus-visible:ring-2 focus-visible:ring-experian-purple focus-visible:border-transparent transition-all shadow-sm"
                                    autoFocus
                                />
                            </div>

                            {stepInfo.multiple && (
                                <Button
                                    onClick={handleAddItem}
                                    variant="outline"
                                    className="w-full h-12 border-dashed border-2 text-experian-dark-blue hover:text-experian-magenta hover:border-experian-magenta hover:bg-experian-magenta/5 transition-all"
                                >
                                    <Plus className="w-5 h-5 mr-2" /> Adicionar outro valor
                                </Button>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            {currentStep > 0 && (
                                <Button
                                    onClick={handleBack}
                                    variant="ghost"
                                    className="h-12 px-6 text-gray-500 hover:text-experian-dark-blue hover:bg-experian-dark-blue/5 transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5 mr-2" /> Voltar
                                </Button>
                            )}

                            <div className="flex-1 flex gap-3">
                                <Button
                                    onClick={handleSkip}
                                    variant="secondary"
                                    className="h-12 flex-1 sm:flex-none text-gray-600 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                                >
                                    Pular
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    className="h-12 flex-1 bg-experian-magenta hover:bg-experian-magenta/90 text-white font-semibold text-lg shadow-lg shadow-experian-magenta/20 transition-all hover:translate-y-[-2px]"
                                >
                                    {currentStep < steps.length - 1 ? "Próximo" : "Ver Resultados"}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right - Illustration */}
                    <div className="hidden lg:flex flex-1 w-full bg-gradient-to-br from-experian-blue-10 to-white dark:from-experian-navy/40 dark:to-experian-navy/10 rounded-3xl p-10 flex-col items-center justify-center gap-8 min-h-[450px] border border-experian-blue-20 dark:border-white/5 animate-in fade-in duration-700">
                        <div className="w-40 h-40 rounded-full bg-white dark:bg-experian-navy shadow-xl flex items-center justify-center p-8 mb-4 animate-in zoom-in duration-500 delay-150 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-experian-magenta/5 group-hover:bg-experian-magenta/10 transition-colors duration-500"></div>
                            <StepIcon className="w-20 h-20 text-experian-magenta transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="text-center space-y-4">
                            <h4 className="text-xl font-semibold text-experian-dark-blue dark:text-white">Dica Financeira</h4>
                            <p className="text-gray-600 dark:text-gray-300 max-w-sm text-lg leading-relaxed">
                                {stepInfo.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
