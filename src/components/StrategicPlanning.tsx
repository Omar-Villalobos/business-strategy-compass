
import { Card, CardContent } from "./ui/card";
import { Lightbulb } from "lucide-react";

export const StrategicPlanning = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lightbulb className="h-8 w-8 text-[#364860]" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-[#364860]">
            Plan Estratégico en Una Página (OPSP)
          </h2>
        </div>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Nuestra creación exclusiva para transformar visiones en estrategias innovadoras y accionables en un solo documento
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/4316c492-7d37-4edb-88aa-956e16c568a6.png" 
              alt="Plan Estratégico en Una Página" 
              className="w-full h-auto rounded-lg shadow-lg border border-[#86a8be]/20"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">1</span> 
                Visión Fundacional
              </h3>
              <p className="text-[#364860]/80 text-sm">Definimos valores centrales, propósito único y la visión transformadora a largo plazo para tu organización.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">2</span> 
                Territorio de Innovación
              </h3>
              <p className="text-[#364860]/80 text-sm">Creamos tu espacio único en el mercado con una propuesta de valor diferenciada y promesas cuantificables.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">3</span> 
                Diseño de Objetivos
              </h3>
              <p className="text-[#364860]/80 text-sm">Damos forma a metas inspiradoras a 12 meses con iniciativas creativas que impulsan el crecimiento.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">4</span> 
                Arquitectura de Acciones
              </h3>
              <p className="text-[#364860]/80 text-sm">Construimos un sistema trimestral de proyectos estratégicos con líderes y plazos definidos.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">5</span> 
                Cultura de Excelencia
              </h3>
              <p className="text-[#364860]/80 text-sm">Integramos mecanismos de reconocimiento y sistemas de medición para mantener la creatividad y excelencia.</p>
            </div>
            
            <Card className="bg-gradient-to-r from-[#364860] to-[#4a5f77] text-white">
              <CardContent className="p-6">
                <p className="italic">
                  "El Plan Estratégico en Una Página transforma la complejidad en simplicidad, convirtiendo visiones abstractas en obras maestras empresariales tangibles"
                </p>
                <p className="mt-4 font-semibold">- Equipo Théa Consultores</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
