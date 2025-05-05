
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Briefcase } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-20 px-4 bg-[#1a365d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10">
          <Briefcase className="h-12 w-12 text-[#3b82f6] mb-4" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
            Solicite una Consulta Estratégica
          </h2>
          <p className="text-center text-gray-300 max-w-2xl">
            Nuestros especialistas en optimización empresarial elaborarán un análisis preliminar personalizado para su organización
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            <div>
              <Input placeholder="Nombre del Ejecutivo" className="bg-white/20 border-0 text-white placeholder:text-gray-300" />
            </div>
            <div>
              <Input type="email" placeholder="Correo Corporativo" className="bg-white/20 border-0 text-white placeholder:text-gray-300" />
            </div>
            <div>
              <Input placeholder="Organización" className="bg-white/20 border-0 text-white placeholder:text-gray-300" />
            </div>
            <div>
              <Textarea placeholder="Describa brevemente su requerimiento estratégico" className="h-32 bg-white/20 border-0 text-white placeholder:text-gray-300" />
            </div>
            <Button className="w-full bg-[#3b82f6] hover:bg-blue-700 transition-colors">
              Solicitar Consultoría Estratégica
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
