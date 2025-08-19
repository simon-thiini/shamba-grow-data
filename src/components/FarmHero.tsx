import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm-landscape.jpg";

const FarmHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Modern farm landscape with organized crop fields"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Your{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Farming Solution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionize your farm management with Shamba Metrics! Our all-in-one app provides detailed 
            analysis of your crops and livestock, tracks everything from farmworkers to distribution, 
            and keeps your farm running like clockwork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg shadow-farm">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">25%</div>
              <div className="text-muted-foreground">Avg. Profit Increase</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-muted-foreground">Active Farms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmHero;