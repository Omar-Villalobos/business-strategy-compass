
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu } from "./NavigationMenu";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-metallic text-white overflow-hidden">
      {/* Navigation menu */}
      <NavigationMenu />
      
      {/* Hero content */}
      <div className="py-16 px-4 md:py-24 max-w-6xl mx-auto relative z-10">
        {/* Logo/banner rediseñado - más compacto */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/87b070a6-4748-483d-9cb6-4526714c1c14.png" 
              alt="THÉA CONSULTORES - Estrategia que Transforma. Proceso que Impulsa" 
              className="mx-auto max-w-xs md:max-w-sm h-auto mb-2 animate-fade-in drop-shadow-2xl"
            />
            {/* Efecto metálico alrededor del logo */}
            <div className="absolute inset-0 bg-gradient-silver opacity-10 blur-xl rounded-lg"></div>
          </div>
        </div>

        {/* Créditos PyME destacados - diseño metálico */}
        <div className="bg-gradient-gold/20 backdrop-blur-sm rounded-xl p-3 md:p-4 mb-8 border border-steel-gold/40 shadow-2xl relative overflow-hidden">
          {/* Efecto metálico de fondo */}
          <div className="absolute inset-0 bg-gradient-silver/5"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-accent text-lg md:text-xl font-bold mb-2 drop-shadow-lg">
              🏢 CRÉDITOS PyME DISPONIBLES
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-white">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-accent drop-shadow-lg">
                  $2,000,000
                </div>
                <div className="text-xs text-accent/80">DESDE</div>
              </div>
              <div className="text-accent text-xl md:text-3xl font-bold">
                —
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-accent drop-shadow-lg">
                  $300,000,000
                </div>
                <div className="text-xs text-accent/80">HASTA</div>
              </div>
            </div>
            <p className="text-accent/90 mt-3 text-sm md:text-base font-medium drop-shadow-md">
              Financiamiento empresarial para impulsar tu crecimiento
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 md:items-start md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <h3 className="font-playfair text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-center md:text-left bg-gradient-to-r from-white via-steel-silver to-white bg-clip-text text-transparent drop-shadow-2xl">
              Sabiduría Estratégica para Transformar tu Empresa
            </h3>
            <p className="text-lg md:text-xl mb-8 text-steel-silver/90 text-center md:text-left max-w-3xl drop-shadow-lg">
              Empoderamos a PyMEs y emprendedores en Ciudad Juárez para construir y ejecutar planes estratégicos sólidos, optimizar procesos y reforzar su imagen corporativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-gold hover:bg-gradient-gold/90 text-steel-dark font-medium shadow-2xl border border-steel-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-accent/25"
                onClick={() => {
                  // Enviar correo promocional
                  fetch('/functions/v1/send-promotional-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                  });
                  // Abrir WhatsApp
                  window.open('https://wa.me/526572973150?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20consultoría%20de%20THÉA%20CONSULTORES', '_blank');
                }}
              >
                Descubre tu potencial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-steel-silver/50 text-white hover:bg-steel-silver/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="mr-2 h-4 w-4" /> Nuestra filosofía
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 mt-6 md:mt-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                  alt="Consultoría empresarial" 
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3" 
                  alt="Diagnóstico empresarial" 
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg mt-3">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3" 
                  alt="Evaluación de procesos" 
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg mt-3">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3" 
                  alt="Mejora continua" 
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background metálico profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/95 via-steel-blue/90 to-steel-dark/95 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30 z-[-1]"></div>
      {/* Efectos metálicos adicionales */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-steel-silver/5 to-transparent z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-steel-dark/50 to-transparent z-[1]"></div>
    </div>
  );
};
