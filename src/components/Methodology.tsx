
import { ClipboardCheck, Target, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Methodology = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Metodología EC0249
        </h2>
        <p className="text-center text-[#364860] max-w-3xl mx-auto mb-12">
          Implementamos procesos sistemáticos basados en estándares internacionales para optimizar su organización
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg">
            <CardHeader>
              <ClipboardCheck className="h-12 w-12 text-[#86a8be] mb-4" />
              <CardTitle className="text-[#364860]">Diagnóstico Corporativo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Evaluación exhaustiva de procesos operativos actuales, identificación de ineficiencias sistémicas y análisis de capacidad productiva mediante metodologías avanzadas.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg">
            <CardHeader>
              <Settings className="h-12 w-12 text-[#86a8be] mb-4" />
              <CardTitle className="text-[#364860]">Implementación Estratégica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#364860]/80">
                Desarrollo e integración de soluciones personalizadas conforme a los estándares EC0249, optimizando recursos y maximizando el retorno de inversión.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg">
            <CardHeader>
              <Target className="h-12 w-12 text-[#86a8be] mb-4" />
              <CardTitle className="text-[#364860]">Evaluación de Rendimiento</CardTitle>
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
