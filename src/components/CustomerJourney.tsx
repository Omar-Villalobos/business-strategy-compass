
import { Card } from "./ui/card";

export const CustomerJourney = () => {
  return (
    <div className="py-20 px-4 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#364860]">
          Mapa de Experiencia del Cliente
        </h2>
        <p className="text-center text-[#364860]/80 max-w-3xl mx-auto mb-12">
          Analizamos y optimizamos cada punto de contacto para mejorar la experiencia del cliente y maximizar su satisfacción
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/d3f62c35-fa6b-4934-9dc4-55ba94f992ac.png" 
              alt="Customer Journey Map" 
              className="w-full max-w-4xl rounded-lg shadow-md"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-[#f8f9fa] p-6 border border-[#86a8be]/20">
              <h3 className="text-xl font-bold text-[#364860] mb-3">Beneficios del Mapa de Experiencia</h3>
              <ul className="space-y-2 text-[#364860]/80 list-disc pl-5">
                <li>Visualiza la experiencia completa de tus clientes</li>
                <li>Identifica puntos de dolor y oportunidades de mejora</li>
                <li>Optimiza cada etapa de la relación con tus clientes</li>
                <li>Mejora la retención y fidelización de clientes</li>
                <li>Incrementa la satisfacción y referencias positivas</li>
              </ul>
            </Card>
            
            <Card className="bg-[#f8f9fa] p-6 border border-[#86a8be]/20">
              <h3 className="text-xl font-bold text-[#364860] mb-3">Nuestro Enfoque</h3>
              <p className="text-[#364860]/80 mb-4">
                En Théa Consultores diseñamos mapas de experiencia personalizados que reflejan 
                fielmente el recorrido de tus clientes. Identificamos:
              </p>
              <ul className="space-y-2 text-[#364860]/80 list-disc pl-5">
                <li>Etapas clave del ciclo de compra</li>
                <li>Puntos de contacto críticos</li>
                <li>Emociones y expectativas en cada fase</li>
                <li>Áreas de fricción y oportunidades</li>
                <li>Acciones estratégicas para optimizar la experiencia</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
