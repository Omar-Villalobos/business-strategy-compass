
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu } from "./NavigationMenu";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#364860] text-white">
      {/* Navigation menu */}
      <NavigationMenu />
      
      {/* Hero content */}
      <div className="py-20 px-4 md:py-32 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12 md:items-start md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/e88bfd51-55f3-4019-8d6f-304d9a757d20.png" 
              alt="THÉA CONSULTORES Logo" 
              className="h-24 md:h-32 mb-8 animate-fade-in"
            />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-center md:text-left">
              Estrategia que Transforma. Proceso que Impulsa.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[#86a8be] text-center md:text-left max-w-3xl">
              Empoderamos a pymes y emprendedores con planes estratégicos sólidos, procesos optimizados e imagen corporativa reforzada para garantizar un crecimiento sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#86a8be] hover:bg-[#6a8ca2] text-[#000000] font-medium">
                Solicitar consultoría <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#86a8be] text-white hover:bg-[#86a8be]/20">
                Conoce nuestra metodología
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#364860]/70 to-[#364860]/50 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 z-[-1]"></div>
    </div>
  );
};
