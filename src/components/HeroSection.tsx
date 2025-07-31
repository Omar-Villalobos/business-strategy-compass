
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu } from "./NavigationMenu";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#364860] text-white">
      {/* Navigation menu */}
      <NavigationMenu />
      
      {/* Hero content */}
      <div className="py-20 px-4 md:py-32 max-w-6xl mx-auto relative z-10">
        {/* Nuevo logo/banner */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/87b070a6-4748-483d-9cb6-4526714c1c14.png" 
            alt="THÉA CONSULTORES - Estrategia que Transforma. Proceso que Impulsa" 
            className="mx-auto max-w-md h-auto mb-4 animate-fade-in"
          />
        </div>

        {/* Créditos PyME destacados - más delgado */}
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-12 border border-orange-500/30">
          <div className="text-center">
            <h2 className="text-orange-400 text-xl md:text-2xl font-bold mb-2">
              🏢 CRÉDITOS PyME DISPONIBLES
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-orange-400">
                  $2,000,000
                </div>
                <div className="text-sm text-orange-200">DESDE</div>
              </div>
              <div className="text-orange-400 text-2xl md:text-4xl font-bold">
                —
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-orange-400">
                  $300,000,000
                </div>
                <div className="text-sm text-orange-200">HASTA</div>
              </div>
            </div>
            <p className="text-orange-200 mt-4 text-lg font-medium">
              Financiamiento empresarial para impulsar tu crecimiento
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-12 md:items-start md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <h3 className="font-playfair text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-center md:text-left">
              Sabiduría Estratégica para Transformar tu Empresa
            </h3>
            <p className="text-lg md:text-xl mb-8 text-[#86a8be] text-center md:text-left max-w-3xl">
              Empoderamos a PyMEs y emprendedores en Ciudad Juárez para construir y ejecutar planes estratégicos sólidos, optimizar procesos y reforzar su imagen corporativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#86a8be] hover:bg-[#6a8ca2] text-[#000000] font-medium"
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
              <Button variant="outline" className="border-[#86a8be] text-white hover:bg-[#86a8be]/20">
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
      
      {/* Background with reduced blur for more impact */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#364860]/80 to-[#364860]/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 z-[-1]"></div>
    </div>
  );
};
