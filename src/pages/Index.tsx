
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

const Index = () => {
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
    </div>
  );
};

export default Index;
