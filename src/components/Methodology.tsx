
import { BookOpen, Target, Crown, FileCheck, Search, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Fases definidas como objeto de datos
const phases = [
  {
    id: "diagnostico-analisis",
    title: "1. Diagnóstico y Análisis",
    icon: Search,
    points: ["Análisis DAFO/CAME y PESTEL", "5 Fuerzas de Porter", "Canvas de Negocio"],
  },
  {
    id: "diseno-solucion",
    title: "2. Diseño de la Solución",
    icon: Crown,
    points: ["Curvas de Valor", "Análisis VRIO", "Customer Journey y Funnel"],
  },
  {
    id: "planificacion-estrategica",
    title: "3. Planificación Estratégica",
    icon: BookOpen,
    points: [
      "Plan Estratégico en Una Página (OPSP)",
      "Definición de BHAG® a 10-25 años",
      "Objetivos y utilidad por X",
    ],
  },
  {
    id: "implementacion",
    title: "4. Implementación",
    icon: FileCheck,
    points: ["Iniciativas prioritarias (Rocas)", "Tableros de control", "KPIs semanales de desempeño"],
  },
  {
    id: "seguimiento-ajustes",
    title: "5. Seguimiento y Ajustes",
    icon: Target,
    points: ["Revisiones periódicas", "Ciclos de ejecución diaria", 'Filosofía de "20 millas"'],
  },
];

export const Methodology = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="methodology" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Metodología de Excelencia
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Un sistema estructurado y probado que combina análisis riguroso con implementación ágil, asegurando resultados tangibles en cada fase del proceso
        </p>

        {/* Fases */}
        <div className="grid md:grid-cols-5 gap-6">
          {phases.map(({ id, title, icon: Icon, points }, index) => (
            <motion.div
              key={id}
              id={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40 ${
                  id === "planificacion-estrategica" ? "md:scale-105 z-10" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                    <Icon className="h-8 w-8 text-[#364860]" />
                  </div>
                  <CardTitle className="text-[#364860] text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-[#364860]/80 text-sm space-y-2">
                    {points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {phases.map(({ id, title }) => (
            <Button
              key={id}
              onClick={() => scrollToSection(id)}
              variant="outline"
              className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
              aria-label={`Ir a ${title}`}
            >
              {title.replace(/^\d+\.\s/, "")}
            </Button>
          ))}
        </div>

        {/* Botón de volver arriba */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={scrollToTop}
            className="bg-[#364860] hover:bg-[#2d3e52] text-white gap-2"
            aria-label="Volver al inicio de la metodología"
          >
            <ArrowUp className="h-4 w-4" />
            Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};
