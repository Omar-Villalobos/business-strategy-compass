
import { Card, CardContent } from "./ui/card";

export const StrategicPlanning = () => {
  return (
    <div className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Plan Estratégico en Una Página (OPSP)
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Nuestra metodología exclusiva para elaborar una estrategia clara y accionable en un solo documento
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
              <h3 className="text-xl font-bold text-[#364860]">1. Bases (Columnas 1–2)</h3>
              <p className="text-[#364860]/80 text-sm">Valores centrales, Propósito único, Modelo de ingresos y visión a largo plazo.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860]">2. Territorio y Promesas (Columna 3)</h3>
              <p className="text-[#364860]/80 text-sm">Definición de cliente objetivo, geografía, oferta y 3–5 Promesas de Marca cuantificables.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860]">3. Metas anuales (Columna 4)</h3>
              <p className="text-[#364860]/80 text-sm">Objetivos financieros a 12 meses, Número Crítico anual y 3–5 Iniciativas clave.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860]">4. Acciones trimestrales (Columna 5)</h3>
              <p className="text-[#364860]/80 text-sm">Número Crítico trimestral, 3–5 Rocas con responsables y fechas definidas.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860]">5. Celebración y rendición de cuentas (Columnas 6–7)</h3>
              <p className="text-[#364860]/80 text-sm">Mecanismos de reconocimiento, Dashboard de KPIs y rutinas de revisión.</p>
            </div>
            
            <Card className="bg-[#364860] text-white">
              <CardContent className="p-6">
                <p className="italic">
                  "El Plan Estratégico en Una Página nos permite transformar ideas abstractas en objetivos tangibles y accionables para toda la organización"
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
