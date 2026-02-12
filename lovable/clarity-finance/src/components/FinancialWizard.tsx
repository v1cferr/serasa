import { useState } from "react";
import { Plus, ArrowRight, SkipForward } from "lucide-react";

interface FinancialData {
  divida: number;
  rendaFixa: number[];
  rendaVariavel: number[];
  gastosFixos: number[];
  gastosVariaveis: number[];
}

interface FinancialWizardProps {
  onComplete: (data: FinancialData) => void;
}

const steps = [
  {
    key: "divida",
    title: "Dívida Ativa",
    question: "Você possui alguma dívida ativa? Digite o valor:",
    description: "Dívida ativa é qualquer valor que você deve a terceiros — bancos, lojas, cartão de crédito, empréstimos, etc. Saber o total é o primeiro passo para se reorganizar.",
    multiple: false,
  },
  {
    key: "rendaFixa",
    title: "Renda Fixa",
    question: "Deseja adicionar alguma renda fixa?",
    description: "Renda fixa é todo valor que você recebe regularmente e de forma previsível: salário, aposentadoria, pensão, aluguéis recebidos, entre outros.",
    multiple: true,
  },
  {
    key: "rendaVariavel",
    title: "Renda Variável",
    question: "Deseja adicionar alguma renda variável?",
    description: "Renda variável inclui trabalho informal, freelances, comissões, gorjetas, renda extra e qualquer ganho sem valor fixo mensal.",
    multiple: true,
  },
  {
    key: "gastosFixos",
    title: "Gastos Fixos",
    question: "Deseja adicionar algum gasto fixo?",
    description: "Gastos fixos são despesas recorrentes com valor previsível: aluguel, educação, financiamentos, plano de saúde, IPVA, IPTU, entre outros.",
    multiple: true,
  },
  {
    key: "gastosVariaveis",
    title: "Gastos Variáveis",
    question: "Deseja adicionar algum gasto variável?",
    description: "Gastos variáveis mudam a cada mês: água, luz, alimentação, higiene, lazer, saúde e outros custos do dia a dia.",
    multiple: true,
  },
];

const formatCurrency = (val: string) => {
  const num = val.replace(/\D/g, "");
  const parsed = (parseInt(num || "0") / 100).toFixed(2);
  return parsed.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const FinancialWizard = ({ onComplete }: FinancialWizardProps) => {
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

  const step = steps[currentStep];

  const handleAddItem = () => {
    const num = parseFloat(inputValue.replace(/\./g, "").replace(",", ".")) || 0;
    if (num > 0) {
      setItems([...items, num]);
      setInputValue("");
    }
  };

  const handleNext = () => {
    const num = parseFloat(inputValue.replace(/\./g, "").replace(",", ".")) || 0;

    const newData = { ...data };
    if (step.multiple) {
      const allItems = num > 0 ? [...items, num] : items;
      (newData as any)[step.key] = allItems;
    } else {
      (newData as any)[step.key] = num;
    }
    setData(newData);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setInputValue("");
      setItems([]);
    } else {
      onComplete(newData);
    }
  };

  const handleSkip = () => {
    const newData = { ...data };
    if (step.multiple) {
      (newData as any)[step.key] = items.length > 0 ? items : [];
    } else {
      (newData as any)[step.key] = 0;
    }
    setData(newData);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setInputValue("");
      setItems([]);
    } else {
      onComplete(newData);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-[7px]"
      style={{ maxWidth: 1366, padding: "2%" }}
    >
      {/* Progress */}
      <div className="w-full flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                i <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            <span className="text-xs text-muted-foreground hidden sm:block">{s.title}</span>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left - Input */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
          <p className="text-muted-foreground">{step.question}</p>

          {/* Added items list */}
          {step.multiple && items.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                >
                  R$ {item.toFixed(2).replace(".", ",")}
                </span>
              ))}
            </div>
          )}

          <div className="row flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                R$
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(formatCurrency(e.target.value))}
                placeholder="0,00"
                className="w-full h-12 pl-10 pr-4 rounded-md border border-input bg-background text-foreground text-lg font-medium focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {step.multiple && (
              <button
                onClick={handleAddItem}
                className="btn-serasa h-12 px-4 bg-accent text-accent-foreground font-medium flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Adicionar
              </button>
            )}
          </div>

          <div className="row flex-wrap mt-2">
            <button
              onClick={handleNext}
              className="btn-serasa px-6 py-3 bg-primary text-primary-foreground font-medium flex items-center gap-2"
            >
              {currentStep < steps.length - 1 ? "Próximo" : "Ver Resultados"}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSkip}
              className="btn-serasa px-6 py-3 border border-border text-muted-foreground font-medium flex items-center gap-2"
            >
              <SkipForward className="w-4 h-4" /> Pular
            </button>
          </div>
        </div>

        {/* Right - Illustration */}
        <div className="flex-1 bg-accent/50 rounded-lg p-6 flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-4xl">
              {currentStep === 0 && "💳"}
              {currentStep === 1 && "💰"}
              {currentStep === 2 && "📊"}
              {currentStep === 3 && "🏠"}
              {currentStep === 4 && "🛒"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialWizard;
