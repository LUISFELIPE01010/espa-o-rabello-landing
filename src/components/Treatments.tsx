import { Hand, Droplet, CircleDot, Sparkles, Flame, Heart, Leaf, Smile } from "lucide-react";

const treatments = [
  {
    icon: Hand,
    title: "Massagem Terapêutica",
    description: "Alívio de tensões musculares e promoção do bem-estar físico e mental.",
  },
  {
    icon: Droplet,
    title: "Drenagem Linfática",
    description: "Redução de inchaços e eliminação de toxinas para um corpo mais leve.",
  },
  {
    icon: Flame,
    title: "Massagem Modeladora",
    description: "Técnica que auxilia na redução de medidas e melhora do contorno corporal.",
  },
  {
    icon: Sparkles,
    title: "Tratamentos Faciais",
    description: "Limpeza de pele, facelifting e cuidados completos para o rosto.",
  },
  {
    icon: CircleDot,
    title: "Ventosaterapia",
    description: "Técnica milenar que estimula a circulação e alivia dores musculares.",
  },
  {
    icon: Leaf,
    title: "SPA & Relaxamento",
    description: "Momentos de paz e revitalização para corpo e mente.",
  },
  {
    icon: Heart,
    title: "Drenagem Pós-Operatório",
    description: "Recuperação mais rápida e confortável após procedimentos cirúrgicos.",
  },
  {
    icon: Smile,
    title: "Tratamento de Acne",
    description: "Cuidados especializados para pele acneica e prevenção de cicatrizes.",
  },
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nossos serviços
          </span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            Tratamentos
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Conheça nossos tratamentos desenvolvidos para seu bem-estar e cuidado pessoal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="card-soft group hover:border-primary/30 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <treatment.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{treatment.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
              <a
                href="https://wa.me/5513988400050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Quero saber mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
