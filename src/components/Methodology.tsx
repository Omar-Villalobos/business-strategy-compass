
import { ClipboardCheck, Target, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Methodology = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Metodología EC0249
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <ClipboardCheck className="h-12 w-12 text-[#3b82f6] mb-4" />
              <CardTitle>Diagnóstico Inicial</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Evaluación completa de procesos actuales, identificación de áreas de mejora y análisis de eficiencia operativa.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Settings className="h-12 w-12 text-[#3b82f6] mb-4" />
              <CardTitle>Implementación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Desarrollo e implementación de estrategias personalizadas siguiendo los estándares EC0249.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 text-[#3b82f6] mb-4" />
              <CardTitle>Medición de Resultados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seguimiento continuo de KPIs y métricas clave para asegurar el éxito de la implementación.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
