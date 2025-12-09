import { useState } from "react";
import resultMassage1 from "@/assets/result-massage-1.jpg";
import resultCupping from "@/assets/result-cupping.jpg";
import resultMassage2 from "@/assets/result-massage-2.jpg";
import resultBody from "@/assets/result-body.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const results = [
  {
    id: 1,
    image: resultMassage1,
    alt: "Massagem modeladora"
  },
  {
    id: 2,
    image: resultCupping,
    alt: "Ventosaterapia"
  },
  {
    id: 3,
    image: resultMassage2,
    alt: "Massagem relaxante"
  },
  {
    id: 4,
    image: resultBody,
    alt: "Tratamento corporal"
  }
];

const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Confira alguns dos procedimentos realizados no Espaço Rabello
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true, dragFree: true, duration: 20 }} className="w-full">
            <CarouselContent className="-ml-2">
              {results.map(result => (
                <CarouselItem key={result.id} className="pl-2 basis-[85%]">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img 
                      src={result.image} 
                      alt={result.alt} 
                      className="w-full h-full object-cover" 
                      loading="eager" 
                      decoding="async" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Deslize para ver mais →
          </p>
        </div>

        {/* Desktop Click Gallery */}
        <div className="hidden md:block">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-4">
            <img 
              src={results[activeIndex].image} 
              alt={results[activeIndex].alt} 
              className="w-full h-full object-cover transition-opacity duration-300" 
              loading="eager" 
              decoding="async" 
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-200 ${
                  activeIndex === index 
                    ? "ring-2 ring-primary ring-offset-2" 
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img 
                  src={result.image} 
                  alt={result.alt} 
                  className="w-full h-full object-cover" 
                  loading="eager" 
                  decoding="async" 
                />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="https://instagram.com/espaco.rabello" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
