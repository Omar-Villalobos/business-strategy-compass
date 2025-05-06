
import { Card, CardContent } from "./ui/card";
import { ChevronRight } from "lucide-react";

export const FlowDiagram = () => {
  return (
    <div className="py-20 px-4 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Proceso de Consultoría Estratégica
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Nuestro enfoque sistemático garantiza que cada etapa del proceso esté alineada con los objetivos de su organización
        </p>
        
        <div className="relative mt-8">
          <div className="bg-[#364860] p-6 rounded-lg shadow-xl">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/4316c492-7d37-4edb-88aa-956e16c568a6.png" 
                alt="Diagrama de Flujo del Proceso de Consultoría" 
                className="w-full h-auto rounded-lg border-4 border-white shadow-inner"
              />
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="text-xl font-bold text-[#364860] mb-3">Diagnóstico Inicial</h3>
                <ul className="space-y-2 text-[#364860]/80">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Análisis situacional completo</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Evaluación de capacidades</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Identificación de oportunidades</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="text-xl font-bold text-[#364860] mb-3">Implementación Estratégica</h3>
                <ul className="space-y-2 text-[#364860]/80">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Planificación detallada</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Asignación de recursos</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Ejecución disciplinada</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="text-xl font-bold text-[#364860] mb-3">Seguimiento y Mejora</h3>
                <ul className="space-y-2 text-[#364860]/80">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Medición de resultados</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Ajustes tácticos</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-[#86a8be] mr-2" /> Optimización continua</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Card className="max-w-lg mx-auto mt-8 bg-white border border-[#86a8be]/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#364860] mb-2">Beneficios de Nuestro Proceso</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#364860]/80">
                <li>Diagnóstico exhaustivo basado en evidencia cuantificable</li>
                <li>Propuestas de solución personalizadas y factibles</li>
                <li>Acuerdos transparentes con resultados medibles</li>
                <li>Sistema de seguimiento y evaluación continua</li>
                <li>Retroalimentación para mejora constante de procesos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
