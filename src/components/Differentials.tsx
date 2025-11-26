import { Heart, Sparkles, Home, Lightbulb, Leaf } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento acolhedor",
    description: "Cada paciente é recebida com carinho e atenção personalizada.",
  },
  {
    icon: Sparkles,
    title: "Protocolos personalizados",
    description: "Tratamentos desenvolvidos especialmente para suas necessidades.",
  },
  {
    icon: Home,
    title: "Ambiente confortável",
    description: "Espaço pensado para proporcionar relaxamento e bem-estar.",
  },
  {
    icon: Lightbulb,
    title: "Técnicas atualizadas",
    description: "Sempre investindo em capacitação e novas tecnologias.",
  },
  {
    icon: Leaf,
    title: "Foco na naturalidade",
    description: "Resultados que realçam sua beleza de forma sutil e natural.",
  },
];

const Differentials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-8">
              Nossos diferenciais
            </h2>

            <div className="space-y-6">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-transparent rounded-3xl blur-xl" />
            <img
              src={interiorImage}
              alt="Interior do Espaço Rabello"
              className="relative w-full h-auto rounded-2xl shadow-lg object-cover aspect-[3/4]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
