
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export const Tools = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Herramientas de Diagnóstico
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Herramienta</TableHead>
                <TableHead>Aplicación</TableHead>
                <TableHead>Beneficios</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Análisis FODA</TableCell>
                <TableCell>Evaluación estratégica</TableCell>
                <TableCell>Identificación de oportunidades y riesgos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Diagrama de Ishikawa</TableCell>
                <TableCell>Análisis de causa-efecto</TableCell>
                <TableCell>Identificación de causas raíz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Balanced Scorecard</TableCell>
                <TableCell>Gestión estratégica</TableCell>
                <TableCell>Alineación de objetivos con KPIs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mapeo de Procesos</TableCell>
                <TableCell>Análisis operativo</TableCell>
                <TableCell>Optimización de flujos de trabajo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
