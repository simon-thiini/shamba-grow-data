import FarmHeader from "@/components/FarmHeader";
import FarmHero from "@/components/FarmHero";
import FarmFeatures from "@/components/FarmFeatures";
import FarmStats from "@/components/FarmStats";
import FarmCTA from "@/components/FarmCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmHeader />
      <main>
        <FarmHero />
        <FarmFeatures />
        <FarmStats />
        <FarmCTA />
      </main>
    </div>
  );
};

export default Index;
