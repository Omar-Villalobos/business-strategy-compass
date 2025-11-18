
import { BookOpen, Target, Crown, FileCheck, Search, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Datos de las fases metodológicas
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
    <div id="methodology" className="py-16 px-4 bg-gradient-to-br from-white to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-playfair text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-steel-dark via-steel-blue to-steel-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestra Metodología
        </motion.h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm">
          Sistema certificado EC0249 e ISO 9001:2015 que garantiza resultados medibles
        </p>

        {/* Fases en Grid Compacto */}
        <div className="grid md:grid-cols-5 gap-4">
          {phases.map(({ title, icon: Icon, points }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/90 shadow-lg border-steel-silver/20 hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="p-2 rounded-lg bg-gradient-gold/10 w-fit mb-2">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-steel-dark text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground text-xs space-y-1.5">
                    {points.map((p, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
