
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#364860] text-white py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:items-start md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/e88bfd51-55f3-4019-8d6f-304d9a757d20.png" 
              alt="THÉA CONSULTORES Logo" 
              className="h-24 md:h-32 mb-8 animate-fade-in"
            />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-center md:text-left">
              Optimización empresarial avanzada bajo estándar EC0249
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[#86a8be] text-center md:text-left max-w-3xl">
              Elevamos el rendimiento organizacional mediante análisis estratégicos y soluciones cuantificables para maximizar su competitividad en el mercado
            </p>
            <Button className="bg-[#86a8be] hover:bg-[#6a8ca2] text-[#000000] font-medium">
              Solicitar asesoría estratégica <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
      {/* Reducing the opacity of the gradient overlay to make it less blurry */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#364860]/75 to-[#364860]/60 z-0"></div>
      {/* Increasing the opacity of the background image for more impact */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-40 z-[-1]"></div>
    </div>
  );
};
