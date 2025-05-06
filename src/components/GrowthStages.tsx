
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export const GrowthStages = () => {
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
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-[#86a8be]/5">
                <TableCell className="font-medium">Start‑Up</TableCell>
                <TableCell>1–5 colaboradores</TableCell>
                <TableCell>Producto & ajuste mercado</TableCell>
                <TableCell>Validar modelo de negocio</TableCell>
                <TableCell>Guerrero</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#86a8be]/5">
                <TableCell className="font-medium">Grow‑Up</TableCell>
                <TableCell>6–15 colaboradores</TableCell>
                <TableCell>Ventas</TableCell>
                <TableCell>Estabilizar ingresos</TableCell>
                <TableCell>Cazador</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#86a8be]/5">
                <TableCell className="font-medium">Speed‑Up</TableCell>
                <TableCell>16–80 colaboradores</TableCell>
                <TableCell>Diferenciación</TableCell>
                <TableCell>Ejecución eficiente</TableCell>
                <TableCell>Explorador</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#86a8be]/5">
                <TableCell className="font-medium">Scale‑Up</TableCell>
                <TableCell>81–250 colaboradores</TableCell>
                <TableCell>Definir industria</TableCell>
                <TableCell>Escalar con disciplina</TableCell>
                <TableCell>Granjero</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#86a8be]/5">
                <TableCell className="font-medium">Power‑Up</TableCell>
                <TableCell>>250 colaboradores</TableCell>
                <TableCell>Dominar industria</TableCell>
                <TableCell>Reinvención continua</TableCell>
                <TableCell>Disruptor</TableCell>
              </TableRow>
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
