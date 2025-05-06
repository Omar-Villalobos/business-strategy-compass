
import { HeroSection } from "@/components/HeroSection";
import { Methodology } from "@/components/Methodology";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Methodology />
      <FlowDiagram />
      <Tools />
      <Contact />
    </div>
  );
};

export default Index;
