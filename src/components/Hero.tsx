import clinicImage from "@/assets/clinic-1.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center pt-28 md:pt-24 lg:pt-0">
      <div className="container-narrow mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center">
            <h1 className="heading-1 text-foreground mb-6 animate-fade-in">
              Espaço Rabello{" "}
              <span className="text-primary">Bem-estar e cuidado</span> para você
            </h1>
            <p className="body-text mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Um espaço dedicado ao seu relaxamento e cuidado pessoal. Massagens terapêuticas, 
              drenagens, tratamentos faciais e momentos de SPA para renovar corpo e mente. 
              Cada atendimento é personalizado para suas necessidades.
            </p>
            <div className="animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <a href="https://wa.me/5513988400050?text=Olá%2C+quero+agendar+uma+avaliação" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar avaliação agora
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/50 to-transparent rounded-3xl blur-2xl" />
              <img alt="Tratamento estético no Espaço Rabello" className="relative w-full h-auto rounded-2xl shadow-xl object-cover aspect-[4/5] lg:aspect-[3/4]" loading="eager" src="/lovable-uploads/d5b34b7a-1a4e-4935-8fff-590476b5951c.png" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
    </section>;
};
export default Hero;