
import { Card, CardContent } from "./ui/card";

export const FlowDiagram = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Diagrama de Flujo según el EC0249
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Nuestro proceso sistemático garantiza resultados óptimos siguiendo el estándar de competencia EC0249
        </p>
        
        <div className="relative mt-8 rounded-lg overflow-hidden shadow-xl">
          <div className="bg-[#364860] p-4 rounded-lg">
            <img 
              src="/lovable-uploads/4316c492-7d37-4edb-88aa-956e16c568a6.png" 
              alt="Diagrama de Flujo según el EC0249" 
              className="w-full h-auto rounded"
            />
          </div>
          
          <Card className="max-w-lg mx-auto mt-8 mb-4 bg-white border border-[#86a8be]/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#364860] mb-2">Beneficios del Proceso EC0249</h3>
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
