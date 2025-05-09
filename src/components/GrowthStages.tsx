
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Progress } from "./ui/progress";
import { CheckCircle, Circle, CircleCheck, CircleDot, Star } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0f4f8] to-[#e9edf1]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#243b53] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Etapas de Crecimiento Empresarial
        </motion.h2>

        <p className="text-center text-[#486581] max-w-3xl mx-auto mb-12">
          Adaptamos nuestras soluciones según el tamaño y la madurez de su compañía para enfrentar los desafíos específicos de cada etapa.
        </p>

        <motion.div
          className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Table>
            <TableHeader className="bg-[#364860]">
              <TableRow>
                <TableHead className="text-white font-semibold">Etapa</TableHead>
                <TableHead className="text-white font-semibold">Tamaño</TableHead>
                <TableHead className="text-white font-semibold">Enfoque</TableHead>
                <TableHead className="text-white font-semibold">Prioridad</TableHead>
                <TableHead className="text-white font-semibold">Perfil CEO</TableHead>
                <TableHead className="text-white font-semibold">Progreso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stageList.map((stage) => (
                <TableRow
                  key={stage.name}
                  className="hover:bg-[#d0d9e0]/20 transition-colors"
                  style={{ backgroundColor: `${stage.color}10` }}
                >
                  <TableCell className="flex items-center font-medium">
                    <stage.icon size={20} color={stage.color} className="mr-2" />
                    <span style={{ color: stage.color }}>{stage.name}</span>
                  </TableCell>
                  <TableCell>{stage.size}</TableCell>
                  <TableCell>{stage.focus}</TableCell>
                  <TableCell>{stage.priority}</TableCell>
                  <TableCell>{stage.ceo}</TableCell>
                  <TableCell className="w-28">
                    <Progress
                      value={stage.progress}
                      className="h-2"
                      style={{ backgroundColor: `${stage.color}30` }}
                    >
                      <div
                        className="h-full transition-all"
                        style={{
                          backgroundColor: stage.color,
                          width: `${stage.progress}%`,
                        }}
                      />
                    </Progress>
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
      </div>
    </section>
  );
};
