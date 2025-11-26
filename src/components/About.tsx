import outdoorImage from "@/assets/outdoor.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tl from-secondary/30 to-transparent rounded-3xl blur-xl" />
            <img
              src={outdoorImage}
              alt="Fachada do Espaço Rabello"
              className="relative w-full h-auto rounded-2xl shadow-lg object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
          
          <div className="text-center lg:text-left">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Sobre nós
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-6">
              A Espaço Rabello
            </h2>
            <p className="body-text mb-6">
              O Espaço Rabello foi criado para ser seu refúgio de bem-estar. Oferecemos 
              massagens terapêuticas, drenagens linfáticas, tratamentos faciais e experiências 
              de SPA em um ambiente acolhedor e relaxante.
            </p>
            <p className="body-text">
              Nosso foco é proporcionar momentos de cuidado e relaxamento que renovam 
              corpo e mente. Cada sessão é pensada especialmente para suas necessidades, 
              trazendo equilíbrio e bem-estar.
            </p>
            
            <div className="divider-soft my-8" />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl md:text-3xl font-semibold text-primary">+500</span>
                <span className="text-sm text-muted-foreground">Clientes atendidas</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-semibold text-primary">5</span>
                <span className="text-sm text-muted-foreground">Anos de experiência</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-semibold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
