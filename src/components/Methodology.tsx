
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
          Un sistema estructurado y probado que establece orden, control y liderazgo en cada fase del proceso de transformación empresarial
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
                <li>• Evaluación experta del estado actual</li>
                <li>• Análisis DAFO/CAME y PESTEL</li>
                <li>• Identificación de oportunidades de liderazgo</li>
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
                <li>• Desarrollo de ventajas diferenciadoras</li>
                <li>• Estructuras de control y dominio</li>
                <li>• Optimización de autoridad en el mercado</li>
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
                <li>• Establecimiento de gobiernos empresariales</li>
                <li>• Marcos de orden y estructura definidos</li>
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
                <li>• Ejecución con disciplina y control</li>
                <li>• Procesos de comando definidos</li>
                <li>• Tableros de control ejecutivos</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Target className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">5. Dominio del Mercado</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Medición sistemática de resultados</li>
                <li>• Consolidación de posición de autoridad</li>
                <li>• Mejora continua con precisión</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
