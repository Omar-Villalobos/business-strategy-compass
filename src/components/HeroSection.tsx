
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#1a365d] text-white py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transformamos tu negocio con estrategia basada en EC0249
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Optimizamos el rendimiento de tu empresa mediante diagnósticos precisos y soluciones medibles
          </p>
          <Button className="bg-[#3b82f6] hover:bg-blue-600 text-white">
            Consulta gratuita <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
