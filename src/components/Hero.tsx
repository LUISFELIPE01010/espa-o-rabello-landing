import clinicImage from "@/assets/clinic-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex">
      {/* Left side - Text */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-6 md:px-12 lg:px-16 py-24 lg:py-0">
        <div className="max-w-lg">
          <h1 className="heading-1 text-foreground mb-6 animate-fade-in">
            Espaço Rabello –{" "}
            <span className="text-primary">Realce sua beleza</span> com naturalidade
          </h1>
          <p className="body-text mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A união entre tecnologia estética e cuidado dedicado, criando resultados que 
            valorizam a beleza natural e elevam a autoestima. No Espaço Rabello, cada pessoa 
            recebe atenção personalizada e protocolos desenvolvidos de forma cuidadosa.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://wa.me/5513988400050?text=Olá%2C+quero+agendar+uma+avaliação"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar avaliação agora
            </a>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={clinicImage}
          alt="Tratamento estético no Espaço Rabello"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
      </div>

      {/* Mobile Image (below text) */}
      <div className="lg:hidden absolute inset-0 -z-10">
        <img
          src={clinicImage}
          alt="Tratamento estético no Espaço Rabello"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
