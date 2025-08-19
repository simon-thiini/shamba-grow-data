import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CloudRain, MapPin, DollarSign, MessageSquare, Globe } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description: "Farm performance summaries at your fingertips with comprehensive data visualization and analytics for better decision making."
  },
  {
    icon: CloudRain,
    title: "Weather & Climate Forecasting",
    description: "Stay ahead with accurate weather updates and climate forecasting to protect your crops and optimize farming activities."
  },
  {
    icon: MapPin,
    title: "GPS Mapping & Geotagging",
    description: "Map your fields with precision GPS technology and geotag important locations for efficient farm management."
  },
  {
    icon: DollarSign,
    title: "Expense & Income Tracking",
    description: "Monitor all your farm expenses and income with detailed financial tracking and reporting capabilities."
  },
  {
    icon: MessageSquare,
    title: "SMS Alerts & Reminders",
    description: "Never miss important tasks with automated SMS alerts and reminders for critical farming activities."
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Access the platform in your preferred language with inclusive multi-language support and secure cloud-based backup."
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