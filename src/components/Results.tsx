import clinicImage1 from "@/assets/clinic-1.jpg";
import clinicImage2 from "@/assets/clinic-2.jpg";
import clinicImage3 from "@/assets/clinic-3.jpg";

const results = [
  { id: 1, image: clinicImage1, alt: "Resultado de tratamento facial" },
  { id: 2, image: clinicImage2, alt: "Resultado de tratamento corporal" },
  { id: 3, image: clinicImage3, alt: "Procedimento estético" },
];

const Results = () => {
  return (
    <section id="resultados" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Transformações
          </span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            Resultados
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Confira algumas transformações realizadas no Espaço Rabello
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={result.image}
                alt={result.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/espaco.rabello"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
