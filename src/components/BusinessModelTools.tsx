
import { Lightbulb, FileText, Grid3X3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const BusinessModelTools = () => {
  return (
    <div className="py-20 px-4 bg-[#f9fbfd]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FileText className="h-8 w-8 text-[#364860]" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-[#364860]">
            Herramientas Estratégicas
          </h2>
        </div>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Utilizamos metodologías probadas que transforman la complejidad en claridad para tomar decisiones estratégicas con confianza
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Canvas del Modelo de Negocio */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-[#364860] px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" /> 
                Canvas del Modelo de Negocio
              </h3>
            </div>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/33a5a0b3-b310-4fd3-81b1-ecb8c79d8336.png" 
                alt="Canvas del Modelo de Negocio" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <p className="text-[#364860]">
                  Estructura visual que permite diseñar, describir y analizar el modelo de negocio de forma integral, identificando propuestas de valor, segmentos de clientes, canales y fuentes de ingresos.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Análisis FODA */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-[#364860] px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> 
                Análisis FODA
              </h3>
            </div>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/1472b55b-9a67-4585-903b-97925b53db90.png" 
                alt="Análisis FODA" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <p className="text-[#364860]">
                  Metodología de estudio que analiza Fortalezas, Oportunidades, Debilidades y Amenazas para diagnosticar la situación actual de la empresa y formular estrategias competitivas.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Matriz RACI */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-[#364860] px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5" /> 
                Matriz RACI
              </h3>
            </div>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/286422a3-c922-4c23-8eef-8988541f60e0.png" 
                alt="Matriz RACI" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <p className="text-[#364860]">
                  Sistema de asignación de responsabilidades que clarifica roles en proyectos y procesos, definiendo quién es Responsable, Aprobador, Consultado e Informado en cada actividad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
