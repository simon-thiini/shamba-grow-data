import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Heart, Wheat, DollarSign, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Livestock Management",
    description: "Track animal health, breeding cycles, feeding schedules, and productivity metrics with comprehensive livestock profiles."
  },
  {
    icon: Wheat,
    title: "Crop Planning",
    description: "Optimize planting schedules, monitor growth stages, and manage harvest logistics with intelligent crop management tools."
  },
  {
    icon: DollarSign,
    title: "Financial Tracking",
    description: "Monitor expenses, revenue, profit margins, and cash flow with detailed financial reporting and budget planning."
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Streamline employee management, track working hours, calculate wages, and handle seasonal workforce needs."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Gain insights with real-time data visualization, performance metrics, and predictive analytics for better decision making."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Identify inefficiencies, optimize resource allocation, and increase overall farm productivity with AI-powered recommendations."
  }
];

const FarmFeatures = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Manage Your Farm
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools designed specifically for modern agricultural operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-farm transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmFeatures;