
import { HeroSection } from "@/components/HeroSection";
import { Methodology } from "@/components/Methodology";
import { GrowthStages } from "@/components/GrowthStages";
import { Contact } from "@/components/Contact";
import { MissionVision } from "@/components/MissionVision";
import { ActivoAlliance } from "@/components/ActivoAlliance";
import { Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVision />
      <Methodology />
      <GrowthStages />
      <ActivoAlliance />
      <Contact />
      
      {/* Footer Profesional con Gradiente Metálico */}
      <footer className="bg-gradient-metallic text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/95 via-steel-blue/90 to-steel-dark/95 z-0"></div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo y Descripción */}
            <div>
              <img 
                src="/lovable-uploads/87b070a6-4748-483d-9cb6-4526714c1c14.png" 
                alt="THÉA CONSULTORES" 
                className="h-16 mb-4 drop-shadow-2xl"
              />
              <p className="text-steel-silver/80 text-sm">
                Estrategia que Transforma. Proceso que Impulsa
              </p>
            </div>
            
            {/* Contacto */}
            <div>
              <h3 className="font-bold text-accent mb-4">Contacto</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-steel-silver/80">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+526572973150" className="hover:text-accent transition-colors">+52 657 297 3150</a>
                </div>
                <div className="flex items-center gap-2 text-steel-silver/80">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:info@thea-consultores.com" className="hover:text-accent transition-colors">info@thea-consultores.com</a>
                </div>
                <div className="flex items-center gap-2 text-steel-silver/80">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Ciudad Juárez, Chihuahua</span>
                </div>
              </div>
            </div>
            
            {/* Certificaciones */}
            <div>
              <h3 className="font-bold text-accent mb-4">Certificaciones</h3>
              <div className="space-y-2 text-sm text-steel-silver/80">
                <p>• EC0249 - Consultoría Empresarial</p>
                <p>• ISO 9001:2015</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-steel-silver/20 pt-6 text-center">
            <p className="text-steel-silver/70 text-sm">
              © {new Date().getFullYear()} THÉA CONSULTORES. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
