import { Sparkles, Droplet, Syringe, Star, Target, Flame, Heart, Users } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Limpeza de pele",
    description: "Remoção de impurezas e renovação celular para uma pele mais saudável.",
  },
  {
    icon: Star,
    title: "Clareamento",
    description: "Tratamento para manchas e uniformização do tom da pele.",
  },
  {
    icon: Syringe,
    title: "Bioestimuladores",
    description: "Estímulo natural de colágeno para firmeza e rejuvenescimento.",
  },
  {
    icon: Droplet,
    title: "Skinbooster",
    description: "Hidratação profunda que revitaliza e ilumina a pele.",
  },
  {
    icon: Target,
    title: "Microagulhamento",
    description: "Renovação da pele e redução de cicatrizes e linhas finas.",
  },
  {
    icon: Flame,
    title: "Lipo enzimática",
    description: "Redução de gordura localizada de forma não invasiva.",
  },
  {
    icon: Heart,
    title: "Protocolos faciais",
    description: "Tratamentos completos personalizados para o rosto.",
  },
  {
    icon: Users,
    title: "Protocolos corporais",
    description: "Cuidados específicos para o corpo todo.",
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
            Conheça nossos tratamentos desenvolvidos para realçar sua beleza natural
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
