
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export const MissionVision = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-white via-secondary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-steel-dark via-steel-blue to-steel-dark bg-clip-text text-transparent">
          Nuestra Esencia
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-sm">
          Pilares que definen nuestro compromiso con la excelencia empresarial
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-steel-silver/20 hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold mb-3 text-accent">Misión</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empoderar a PyMEs con estrategias sólidas, procesos optimizados e imagen corporativa diferenciada para crecimiento sostenible.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-metallic text-white shadow-2xl border-steel-gold/30 md:transform md:-translate-y-2 transition-all duration-300 hover:shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-silver/5"></div>
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-playfair font-bold mb-3 text-accent">Visión</h3>
              <p className="text-steel-silver/95 text-sm leading-relaxed">
                Ser la firma de consultoría líder que transforma organizaciones mediante estrategias integrales y procesos eficientes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-steel-silver/20 hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold mb-3 text-accent">Valores</h3>
              <ul className="text-muted-foreground text-sm space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><span className="font-semibold text-steel-dark">Excelencia</span> en cada proyecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><span className="font-semibold text-steel-dark">Innovación</span> continua</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><span className="font-semibold text-steel-dark">Transparencia</span> total</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span><span className="font-semibold text-steel-dark">Resultados</span> medibles</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-steel-dark hover:bg-steel-blue text-white gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};
