import { useState } from "react";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "O que você está buscando?",
    options: [
      { label: "Relaxamento e alívio do estresse", value: "relaxamento" },
      { label: "Redução de medidas e modelagem corporal", value: "modelagem" },
      { label: "Cuidados com a pele do rosto", value: "facial" },
      { label: "Recuperação pós-cirúrgica", value: "pos-operatorio" },
    ],
  },
  {
    id: 2,
    question: "Qual região do corpo você gostaria de focar?",
    options: [
      { label: "Rosto", value: "rosto" },
      { label: "Corpo (costas, pernas, abdômen)", value: "corpo" },
      { label: "Corpo inteiro", value: "inteiro" },
    ],
  },
  {
    id: 3,
    question: "Com que frequência você pode fazer tratamentos?",
    options: [
      { label: "Uma vez por semana", value: "semanal" },
      { label: "Quinzenalmente", value: "quinzenal" },
      { label: "Uma vez por mês", value: "mensal" },
      { label: "Apenas ocasionalmente", value: "ocasional" },
    ],
  },
  {
    id: 4,
    question: "Você prefere tratamentos mais...",
    options: [
      { label: "Relaxantes e suaves", value: "relaxante" },
      { label: "Intensos com resultados visíveis", value: "intenso" },
      { label: "Equilibrados entre relaxamento e resultado", value: "equilibrado" },
    ],
  },
];

const getRecommendation = (answers: Record<number, string>): string => {
  const objetivo = answers[1];
  const area = answers[2];
  const preferencia = answers[4];
  
  if (objetivo === "relaxamento") {
    if (preferencia === "intenso") {
      return "Massagem Terapêutica com Ventosa";
    }
    return "SPA & Momento Relaxante";
  } else if (objetivo === "modelagem") {
    if (preferencia === "relaxante") {
      return "Drenagem Linfática";
    }
    return "Massagem Modeladora";
  } else if (objetivo === "facial") {
    return "Limpeza de Pele e Tratamentos Faciais";
  } else if (objetivo === "pos-operatorio") {
    return "Drenagem Pós-Operatório";
  }
  
  if (area === "rosto") {
    return "Tratamentos Faciais Personalizados";
  }
  
  return "Avaliação personalizada";
};

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const recommendation = getRecommendation(answers);
  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz o quiz no site e minha indicação foi: ${recommendation}. Gostaria de saber mais!`
  );

  return (
    <section id="quiz" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Descubra
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Qual tratamento combina com você?
            </h2>
            <p className="body-text">
              Responda algumas perguntas rápidas e receba uma indicação inicial 
              com base nos seus objetivos.
            </p>
          </div>

          <div className="card-soft">
            {!showResult ? (
              <>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Pergunta {currentStep + 1} de {questions.length}</span>
                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300 rounded-full"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="heading-3 text-foreground mb-6">
                  {questions[currentStep].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* Back button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Voltar
                  </button>
                )}
              </>
            ) : (
              /* Result */
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-3 text-foreground mb-4">
                  Seu tratamento indicado:
                </h3>
                <p className="text-xl font-semibold text-primary mb-6">
                  {recommendation}
                </p>
                <p className="text-muted-foreground mb-8">
                  Esta é uma indicação inicial. Agende uma avaliação para um 
                  diagnóstico completo e personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/5513988400050?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Agendar avaliação
                    <ArrowRight size={18} />
                  </a>
                  <button
                    onClick={handleReset}
                    className="btn-secondary"
                  >
                    Refazer quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
