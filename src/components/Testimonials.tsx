import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Atendimento impecável! Me senti muito acolhida desde a primeira avaliação. Os resultados superaram minhas expectativas.",
    treatment: "Bioestimuladores",
  },
  {
    name: "Fernanda L.",
    text: "O ambiente é super agradável e a profissional muito atenciosa. Já fiz vários procedimentos e sempre saio satisfeita.",
    treatment: "Limpeza de pele",
  },
  {
    name: "Carolina M.",
    text: "Encontrei o lugar perfeito para cuidar da minha pele. O tratamento foi personalizado para as minhas necessidades.",
    treatment: "Skinbooster",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            O que nossas pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-secondary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block font-medium text-foreground text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
