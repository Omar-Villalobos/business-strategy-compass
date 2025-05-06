
import { ClipboardCheck, Target, Settings, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Methodology = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Metodología EC0249
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Implementamos procesos sistemáticos basados en estándares internacionales para optimizar su organización
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <ClipboardCheck className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860]">Diagnóstico Corporativo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Evaluación exhaustiva de procesos operativos actuales, identificación de ineficiencias sistémicas y análisis de capacidad productiva.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Settings className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860]">Propuesta de Soluciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Desarrollo e integración de soluciones personalizadas conforme a los estándares EC0249, optimizando recursos y maximizando el retorno de inversión.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <FileCheck className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860]">Presentación de Acuerdos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Establecimiento de compromisos claros con objetivos medibles, cronogramas detallados y asignación de responsabilidades entre las partes.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Target className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860]">Seguimiento y Evaluación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Monitorización sistemática de indicadores clave de desempeño y métricas cuantitativas para garantizar resultados verificables y sostenibles a largo plazo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
