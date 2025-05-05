
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export const Tools = () => {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
          Instrumentos de Análisis Empresarial
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Implementamos metodologías analíticas de vanguardia para maximizar el potencial estratégico de su organización
        </p>
        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-gray-900">Instrumento Analítico</TableHead>
                <TableHead className="font-bold text-gray-900">Aplicación Estratégica</TableHead>
                <TableHead className="font-bold text-gray-900">Beneficios Corporativos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Análisis FODA Estratégico</TableCell>
                <TableCell>Evaluación sistemática de factores internos y externos</TableCell>
                <TableCell>Identificación de ventajas competitivas y mitigación de vulnerabilidades organizacionales</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Metodología Ishikawa</TableCell>
                <TableCell>Análisis estructurado de causalidad sistémica</TableCell>
                <TableCell>Determinación de factores críticos y resolución de ineficiencias operativas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sistema Balanced Scorecard</TableCell>
                <TableCell>Gestión integral de planificación estratégica</TableCell>
                <TableCell>Alineación de objetivos corporativos con métricas de desempeño cuantificables</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mapeo Estratégico de Procesos</TableCell>
                <TableCell>Análisis de flujos operativos y cadenas de valor</TableCell>
                <TableCell>Optimización de eficiencia operativa y reducción de redundancias procedimentales</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
