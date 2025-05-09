
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Progress } from "./ui/progress";
import { CheckCircle, Circle, CircleCheck, CircleDot, Star } from "lucide-react";

export const GrowthStages = () => {
  const stages = [
    {
      name: "Start‑Up",
      size: "1–5 colaboradores",
      focus: "Producto & ajuste mercado",
      priority: "Validar modelo de negocio",
      ceoProfile: "Guerrero",
      color: "#9b87f5",
      progress: 20,
      icon: Circle
    },
    {
      name: "Grow‑Up",
      size: "6–15 colaboradores",
      focus: "Ventas",
      priority: "Estabilizar ingresos",
      ceoProfile: "Cazador",
      color: "#7E69AB",
      progress: 40,
      icon: CircleDot
    },
    {
      name: "Speed‑Up",
      size: "16–80 colaboradores",
      focus: "Diferenciación",
      priority: "Ejecución eficiente",
      ceoProfile: "Explorador",
      color: "#6E59A5",
      progress: 60,
      icon: CircleCheck
    },
    {
      name: "Scale‑Up",
      size: "81–250 colaboradores",
      focus: "Definir industria",
      priority: "Escalar con disciplina",
      ceoProfile: "Granjero",
      color: "#33C3F0",
      progress: 80,
      icon: CheckCircle
    },
    {
      name: "Power‑Up",
      size: "{'>'}250 colaboradores",
      focus: "Dominar industria",
      priority: "Reinvención continua",
      ceoProfile: "Disruptor",
      color: "#0FA0CE",
      progress: 100,
      icon: Star
    }
  ];

  return (
    <div className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Etapas de Crecimiento Empresarial
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Adaptamos nuestras soluciones según el tamaño y la madurez de su compañía para enfrentar los desafíos específicos de cada etapa
        </p>
        
        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <Table>
            <TableHeader className="bg-[#364860]">
              <TableRow>
                <TableHead className="font-bold text-white">Etapa</TableHead>
                <TableHead className="font-bold text-white">Tamaño</TableHead>
                <TableHead className="font-bold text-white">Enfoque</TableHead>
                <TableHead className="font-bold text-white">Prioridad</TableHead>
                <TableHead className="font-bold text-white">Perfil del CEO</TableHead>
                <TableHead className="font-bold text-white">Progreso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stages.map((stage, index) => (
                <TableRow 
                  key={stage.name} 
                  className="hover:bg-[#86a8be]/5 transition-colors"
                  style={{ backgroundColor: `${stage.color}15` }}
                >
                  <TableCell className="font-medium flex items-center">
                    <div className="mr-2">
                      <stage.icon size={20} color={stage.color} strokeWidth={2} />
                    </div>
                    <span style={{ color: stage.color }}>{stage.name}</span>
                  </TableCell>
                  <TableCell>{stage.size}</TableCell>
                  <TableCell>{stage.focus}</TableCell>
                  <TableCell>{stage.priority}</TableCell>
                  <TableCell>{stage.ceoProfile}</TableCell>
                  <TableCell className="w-24">
                    <Progress value={stage.progress} className="h-2" 
                      style={{ 
                        backgroundColor: `${stage.color}30`,
                      }}
                    >
                      <div 
                        className="h-full transition-all" 
                        style={{ 
                          backgroundColor: stage.color,
                          width: `${stage.progress}%` 
                        }} 
                      />
                    </Progress>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg border border-[#86a8be]/20">
          <h3 className="font-playfair text-2xl font-bold mb-4 text-[#364860]">¿En qué etapa se encuentra tu empresa?</h3>
          <p className="text-[#364860]/80 mb-6">
            Conocer la etapa actual de tu organización es el primer paso para desarrollar una estrategia efectiva. Nuestros consultores te ayudarán a identificar los desafíos específicos de tu etapa y diseñar soluciones personalizadas.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#364860] hover:bg-[#2d3e52] text-white py-2 px-6 rounded-md font-medium transition-colors">
              Solicitar diagnóstico gratuito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
