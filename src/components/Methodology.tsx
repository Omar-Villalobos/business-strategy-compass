
import { BookOpen, Target, Crown, FileCheck, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Methodology = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Metodología de Excelencia
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Un sistema estructurado y probado que combina análisis riguroso con implementación ágil, asegurando resultados tangibles en cada fase del proceso
        </p>
        
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Search className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">1. Diagnóstico y Análisis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Análisis DAFO/CAME y PESTEL</li>
                <li>• 5 Fuerzas de Porter</li>
                <li>• Canvas de Negocio</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Crown className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">2. Diseño de la Solución</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Curvas de Valor</li>
                <li>• Análisis VRIO</li>
                <li>• Customer Journey y Funnel</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40 md:scale-105 z-10">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <BookOpen className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">3. Planificación Estratégica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Plan Estratégico en Una Página (OPSP)</li>
                <li>• Definición de BHAG® a 10-25 años</li>
                <li>• Objetivos y utilidad por X</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <FileCheck className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">4. Implementación</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Iniciativas prioritarias (Rocas)</li>
                <li>• Tableros de control</li>
                <li>• KPIs semanales de desempeño</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Target className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">5. Seguimiento y Ajustes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Revisiones periódicas</li>
                <li>• Ciclos de ejecución diaria</li>
                <li>• Filosofía de "20 millas"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
