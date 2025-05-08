
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
          Nuestra guía paso a paso para crear una estrategia concisa y poderosa que alinee a toda tu organización
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
                Bases (Columnas 1–2)
              </h3>
              <p className="text-[#364860]/80 text-sm">Definimos valores centrales ("Debo/No debo"), Propósito único y tu modelo de ingresos (Utilidad por X), estableciendo tu BHAG® a 10–25 años.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">2</span> 
                Territorio y Promesas (Columna 3)
              </h3>
              <p className="text-[#364860]/80 text-sm">Delimitamos tu Territorio (clientes, geografía, oferta) y seleccionamos 3–5 Promesas de Marca cuantificables con sus KPIs correspondientes.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">3</span> 
                Metas anuales (Columna 4)
              </h3>
              <p className="text-[#364860]/80 text-sm">Establecemos objetivos financieros claros, definimos tu Número Crítico anual y las 3–5 Iniciativas clave para alcanzarlo en los próximos 12 meses.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">4</span> 
                Acciones trimestrales (Columna 5)
              </h3>
              <p className="text-[#364860]/80 text-sm">Desglosamos el año en trimestres, definiendo un Número Crítico trimestral y 3–5 Rocas prioritarias con responsables y fechas de entrega.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#364860] flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#364860] text-white text-sm">5</span> 
                Celebración, cultura y rendición de cuentas
              </h3>
              <p className="text-[#364860]/80 text-sm">Creamos un Lema inspirador, diseñamos mecanismos de reconocimiento y establecemos un Dashboard de KPIs con rutinas de revisión semanal y mensual.</p>
            </div>
            
            <Card className="bg-gradient-to-r from-[#364860] to-[#4a5f77] text-white">
              <CardContent className="p-6">
                <p className="italic">
                  "Nuestra visión es clara: convertirnos en la firma de consultoría de referencia que impulsa la transformación de organizaciones a través de estrategias integrales"
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
