
import { HeroSection } from "@/components/HeroSection";
import { Methodology } from "@/components/Methodology";
import { FlowDiagram } from "@/components/FlowDiagram";
import { GrowthStages } from "@/components/GrowthStages";
import { StrategicPlanning } from "@/components/StrategicPlanning";
import { BusinessModelTools } from "@/components/BusinessModelTools";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Methodology />
      <FlowDiagram />
      <StrategicPlanning />
      <GrowthStages />
      <BusinessModelTools />
      <Tools />
      <Contact />
    </div>
  );
};

export default Index;
