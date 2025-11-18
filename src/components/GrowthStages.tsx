
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Progress } from "./ui/progress";
import { CheckCircle, Circle, CircleCheck, CircleDot, Star, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const stageArchetypes = {
  StartUp: {
    icon: Circle,
    color: "#9b87f5",
    ceo: "Guerrero",
    size: "1–5 colaboradores",
    focus: "Producto & ajuste mercado",
    priority: "Validar modelo de negocio",
    progress: 20,
  },
  GrowUp: {
    icon: CircleDot,
    color: "#7E69AB",
    ceo: "Cazador",
    size: "6–15 colaboradores",
    focus: "Ventas",
    priority: "Estabilizar ingresos",
    progress: 40,
  },
  SpeedUp: {
    icon: CircleCheck,
    color: "#6E59A5",
    ceo: "Explorador",
    size: "16–80 colaboradores",
    focus: "Diferenciación",
    priority: "Ejecución eficiente",
    progress: 60,
  },
  ScaleUp: {
    icon: CheckCircle,
    color: "#33C3F0",
    ceo: "Granjero",
    size: "81–250 colaboradores",
    focus: "Definir industria",
    priority: "Escalar con disciplina",
    progress: 80,
  },
  PowerUp: {
    icon: Star,
    color: "#0FA0CE",
    ceo: "Disruptor",
    size: ">250 colaboradores",
    focus: "Dominar industria",
    priority: "Reinvención continua",
    progress: 100,
  },
};

const stageList = Object.entries(stageArchetypes).map(([key, value]) => ({
  name: key.replace(/([A-Z])/g, " $1").trim().replace("Up", "‑Up"),
  ...value,
}));

export const GrowthStages = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section id="growth-stages" className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-steel-dark via-steel-blue to-steel-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Soluciones por Etapa
        </motion.h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-sm">
          Desde StartUp hasta PowerUp, estrategias adaptadas a tu crecimiento
        </p>

        <motion.div
          className="overflow-x-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-steel-silver/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Table>
            <TableHeader className="bg-gradient-metallic">
              <TableRow>
                <TableHead className="text-white font-semibold text-xs">Etapa</TableHead>
                <TableHead className="text-white font-semibold text-xs">Tamaño</TableHead>
                <TableHead className="text-white font-semibold text-xs">Enfoque</TableHead>
                <TableHead className="text-white font-semibold text-xs">Prioridad</TableHead>
                <TableHead className="text-white font-semibold text-xs">Progreso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stageList.map((stage, index) => (
                <TableRow
                  key={stage.name}
                  className="hover:bg-accent/5 transition-colors border-b border-steel-silver/10"
                  style={{ backgroundColor: `${stage.color}05` }}
                >
                  <TableCell className="flex items-center font-medium text-sm">
                    <stage.icon size={18} color={stage.color} className="mr-2 flex-shrink-0" />
                    <span style={{ color: stage.color }}>{stage.name}</span>
                  </TableCell>
                  <TableCell className="text-xs">{stage.size}</TableCell>
                  <TableCell className="text-xs">{stage.focus}</TableCell>
                  <TableCell className="text-xs">{stage.priority}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={stage.progress} className="w-20" />
                      <span className="text-xs text-muted-foreground">{stage.progress}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        <motion.div
          className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-[#86a8be]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-playfair text-2xl font-bold mb-4 text-[#364860]">
            ¿En qué etapa se encuentra tu empresa?
          </h3>
          <p className="text-[#364860]/80 mb-6">
            Conocer la etapa actual de tu organización es el primer paso para desarrollar una estrategia efectiva. Nuestros consultores te ayudarán a identificar los desafíos específicos y diseñar soluciones personalizadas.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#364860] hover:bg-[#2d3e52] text-white py-2 px-6 rounded-md font-medium transition-all duration-200">
              Solicita tu diagnóstico gratuito
            </button>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <Button
            onClick={scrollToTop}
            className="bg-[#364860] hover:bg-[#2d3e52] text-white gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Inicio
          </Button>
        </div>
      </div>
    </section>
  );
};
