import FarmHeader from "@/components/FarmHeader";
import { HeroSection } from "@/components/HeroSection";
import FarmStats from "@/components/FarmStats";
import FarmCTA from "@/components/FarmCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmHeader />
      <main>
        <HeroSection />
        <FarmStats />
        <FarmCTA />
      </main>
    </div>
  );
};

export default Index;
