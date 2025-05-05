
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#1a365d] text-white py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:items-start">
          <img 
            src="/lovable-uploads/e88bfd51-55f3-4019-8d6f-304d9a757d20.png" 
            alt="THÉA CONSULTORES Logo" 
            className="h-24 md:h-32 mb-8 animate-fade-in"
          />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-center md:text-left">
            Optimización empresarial avanzada bajo estándar EC0249
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 text-center md:text-left max-w-3xl">
            Elevamos el rendimiento organizacional mediante análisis estratégicos y soluciones cuantificables para maximizar su competitividad en el mercado
          </p>
          <Button className="bg-[#3b82f6] hover:bg-blue-600 text-white">
            Solicitar asesoría estratégica <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30 z-[-1]"></div>
    </div>
  );
};
