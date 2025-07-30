
import { HeroSection } from "@/components/HeroSection";
import { Methodology } from "@/components/Methodology";
import { FlowDiagram } from "@/components/FlowDiagram";
import { GrowthStages } from "@/components/GrowthStages";
import { StrategicPlanning } from "@/components/StrategicPlanning";
import { BusinessModelTools } from "@/components/BusinessModelTools";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";
import { MissionVision } from "@/components/MissionVision";
import { CustomerJourney } from "@/components/CustomerJourney";
import { ActivoAlliance } from "@/components/ActivoAlliance";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVision />
      <Methodology />
      <FlowDiagram />
      <CustomerJourney />
      <StrategicPlanning />
      <GrowthStages />
      <BusinessModelTools />
      <ActivoAlliance />
      <Tools />
      <Contact />
      
      {/* Footer with Copyright and Back to Top */}
      <footer className="bg-background border-t py-6">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} THÉA CONSULTORES. Todos los derechos reservados.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                "Estrategia que Transforma. Proceso que Impulsa"
              </p>
            </div>
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Ir al inicio
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
