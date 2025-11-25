import { MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-narrow mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and description */}
          <div>
            <img src={logo} alt="Espaço Rabello" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-background/70 leading-relaxed">
              Realçando sua beleza natural com tecnologia e cuidado dedicado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5513988400050"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone size={16} />
                (13) 98840-0050
              </a>
              <a
                href="https://instagram.com/espaco.rabello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Instagram size={16} />
                @espaco.rabello
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-medium mb-4">Localização</h3>
            <div className="flex items-start gap-3 text-sm text-background/70">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <address className="not-italic">
                Rua Rio de Janeiro, 54<br />
                Boqueirão, Praia Grande<br />
                São Paulo, Brazil – 11500-055
              </address>
            </div>
          </div>
        </div>

        <div className="divider-soft my-8 opacity-20" />

        <div className="text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Espaço Rabello. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
