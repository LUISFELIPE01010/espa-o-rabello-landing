import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 p-8 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/50 rounded-full blur-2xl" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="heading-2 text-foreground mb-4">
              Agende sua avaliação
            </h2>
            <p className="body-text mb-8">
              Entre em contato e vamos descobrir qual tratamento é ideal para você. 
              Estamos prontas para te receber!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://wa.me/5513988400050?text=Olá%2C+quero+agendar+uma+avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/espaco.rabello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Instagram
                <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <strong className="text-foreground">WhatsApp:</strong>{" "}
                <a href="tel:+5513988400050" className="hover:text-primary transition-colors">
                  (13) 98840-0050
                </a>
              </p>
              <p>
                <strong className="text-foreground">Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/espaco.rabello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @espaco.rabello
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
