
import { Card, CardContent } from "./ui/card";

export const MissionVision = () => {
  return (
    <div className="py-20 px-4 bg-[#f9fbfd]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Nuestra Esencia
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Los pilares fundamentales que guían nuestro trabajo y definen nuestro impacto en el ecosistema empresarial
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg border border-[#86a8be]/20 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-[#364860]">Misión</h3>
              <p className="text-[#364860]/80">
                Empoderar a PyMEs y emprendedores para construir y ejecutar planes estratégicos sólidos, 
                optimizar procesos estructurados y reforzar su imagen corporativa mediante soluciones 
                de consultoría personalizadas que garanticen un crecimiento sostenible.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#364860] text-white shadow-lg border border-[#86a8be]/20 md:transform md:-translate-y-4 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">Visión</h3>
              <p className="text-white/90">
                Convertirnos en la firma de consultoría de referencia que impulsa la transformación 
                de organizaciones a través de estrategias integrales, procesos eficientes y 
                una marca corporativa diferenciada, contribuyendo al desarrollo sostenible del 
                ecosistema empresarial.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border border-[#86a8be]/20 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-[#364860]">Valores</h3>
              <ul className="text-[#364860]/80 space-y-2">
                <li><span className="font-medium">Excelencia:</span> Compromiso con la calidad y el rigor en cada fase.</li>
                <li><span className="font-medium">Innovación:</span> Creatividad y mejora continua en nuestras metodologías.</li>
                <li><span className="font-medium">Transparencia:</span> Comunicación clara y honesta en todas las etapas.</li>
                <li><span className="font-medium">Colaboración:</span> Trabajo estrecho con nuestros clientes para resultados conjuntos.</li>
                <li><span className="font-medium">Orientación a resultados:</span> Enfoque en objetivos concretos y medibles.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
