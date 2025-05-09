
import { BookOpen, Target, Crown, FileCheck, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const Methodology = () => {
  // Function to scroll to specific sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id="methodology" className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Metodología de Excelencia
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Un sistema estructurado y probado que combina análisis riguroso con implementación ágil, asegurando resultados tangibles en cada fase del proceso
        </p>
        
        <div className="grid md:grid-cols-5 gap-6">
          {/* Fase 1 */}
          <Card id="diagnostico-analisis" className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Search className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">1. Diagnóstico y Análisis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Análisis DAFO/CAME y PESTEL</li>
                <li>• 5 Fuerzas de Porter</li>
                <li>• Canvas de Negocio</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Fase 2 */}
          <Card id="diseno-solucion" className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Crown className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">2. Diseño de la Solución</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Curvas de Valor</li>
                <li>• Análisis VRIO</li>
                <li>• Customer Journey y Funnel</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Fase 3 */}
          <Card id="planificacion-estrategica" className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40 md:scale-105 z-10">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <BookOpen className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">3. Planificación Estratégica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Plan Estratégico en Una Página (OPSP)</li>
                <li>• Definición de BHAG® a 10-25 años</li>
                <li>• Objetivos y utilidad por X</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Fase 4 */}
          <Card id="implementacion" className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <FileCheck className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">4. Implementación</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Iniciativas prioritarias (Rocas)</li>
                <li>• Tableros de control</li>
                <li>• KPIs semanales de desempeño</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Fase 5 */}
          <Card id="seguimiento-ajustes" className="backdrop-blur-sm bg-white shadow-md border border-[#86a8be]/20 transition-all hover:shadow-lg hover:border-[#86a8be]/40">
            <CardHeader className="pb-2">
              <div className="p-2 rounded-full bg-[#364860]/10 w-fit mb-2">
                <Target className="h-8 w-8 text-[#364860]" />
              </div>
              <CardTitle className="text-[#364860] text-lg">5. Seguimiento y Ajustes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-[#364860]/80 text-sm space-y-2">
                <li>• Revisiones periódicas</li>
                <li>• Ciclos de ejecución diaria</li>
                <li>• Filosofía de "20 millas"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">
          <Button 
            onClick={() => scrollToSection('diagnostico-analisis')}
            variant="outline" 
            className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
          >
            Diagnóstico y Análisis
          </Button>
          <Button 
            onClick={() => scrollToSection('diseno-solucion')}
            variant="outline" 
            className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
          >
            Diseño de la Solución
          </Button>
          <Button 
            onClick={() => scrollToSection('planificacion-estrategica')}
            variant="outline" 
            className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
          >
            Planificación Estratégica
          </Button>
          <Button 
            onClick={() => scrollToSection('implementacion')}
            variant="outline" 
            className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
          >
            Implementación
          </Button>
          <Button 
            onClick={() => scrollToSection('seguimiento-ajustes')}
            variant="outline" 
            className="text-[#364860] border-[#364860]/30 hover:bg-[#364860]/10"
          >
            Seguimiento y Ajustes
          </Button>
          <Button
            onClick={scrollToTop}
            className="bg-[#364860] hover:bg-[#2d3e52] text-white"
          >
            Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};
