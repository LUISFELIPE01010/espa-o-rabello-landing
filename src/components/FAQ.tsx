import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a avaliação?",
    answer:
      "A avaliação é um momento para conhecermos você, entender suas expectativas e analisar suas necessidades. Fazemos uma análise completa da pele ou área a ser tratada e indicamos os melhores protocolos para seus objetivos.",
  },
  {
    question: "Quantas sessões geralmente são recomendadas?",
    answer:
      "O número de sessões varia de acordo com o tratamento e as necessidades individuais. Em média, os protocolos faciais têm de 4 a 8 sessões, enquanto tratamentos corporais podem variar de 6 a 12 sessões.",
  },
  {
    question: "Quais áreas podem ser tratadas?",
    answer:
      "Oferecemos tratamentos para rosto, pescoço, colo e diversas áreas do corpo como abdômen, braços, coxas, glúteos e costas. Cada área recebe um protocolo específico para melhores resultados.",
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer:
      "A maioria dos procedimentos é confortável e bem tolerada. Quando necessário, utilizamos anestésicos tópicos para garantir seu conforto durante toda a sessão.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "O tempo varia de acordo com o procedimento. Sessões mais simples como limpeza de pele duram cerca de 1 hora, enquanto protocolos mais completos podem durar de 1h30 a 2 horas.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Dúvidas
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
