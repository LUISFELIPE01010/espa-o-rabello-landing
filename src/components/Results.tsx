import resultImage1 from "@/assets/result-1.jpg";
import clinicImage2 from "@/assets/clinic-2.jpg";
import clinicImage3 from "@/assets/clinic-3.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
const results = [{
  id: 1,
  image: resultImage1,
  alt: "Resultado de tratamento corporal"
}, {
  id: 2,
  image: clinicImage2,
  alt: "Resultado de tratamento facial"
}, {
  id: 3,
  image: clinicImage3,
  alt: "Procedimento estético"
}];
const ResultCard = ({
  result
}: {
  result: typeof results[0];
}) => <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
    <img src={result.image} alt={result.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="eager" decoding="async" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>;
const Results = () => {
  return <section id="resultados" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Transformações
          </span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            Resultados
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Confira alguns dos procedimentos realizados no Espaço Rabello
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true, dragFree: true, duration: 20 }} className="w-full">
            <CarouselContent className="-ml-2">
              {results.map(result => <CarouselItem key={result.id} className="pl-2 basis-[85%]">
                  <ResultCard result={result} />
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Deslize para ver mais →
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
          {results.map(result => <ResultCard key={result.id} result={result} />)}
        </div>

        <div className="text-center mt-10">
          <a href="https://instagram.com/espaco.rabello" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>;
};
export default Results;