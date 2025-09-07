import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-earth overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern farm landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                Transform Your Farm Into A
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Data-Driven Business</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Complete farm management platform that handles everything from livestock and crops to finances and payroll. Make smarter decisions with comprehensive analytics and reporting.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 animate-slide-up">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">25%</div>
                <div className="text-sm text-muted-foreground">Avg. Profit Increase</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">99.7%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-harvest/10 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-harvest" />
                </div>
                <div className="text-2xl font-bold text-foreground">50</div>
                <div className="text-sm text-muted-foreground">Happy Farmers</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-card rounded-2xl p-8 shadow-2xl border backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Stats Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-success/5 rounded-lg">
                    <span className="text-sm font-medium">Active Livestock</span>
                    <span className="text-lg font-bold text-success">247</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-harvest/5 rounded-lg">
                    <span className="text-sm font-medium">Crop Yield (tons)</span>
                    <span className="text-lg font-bold text-harvest">1,234</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Monthly Revenue</span>
                    <span className="text-lg font-bold text-primary">ksh89,450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};