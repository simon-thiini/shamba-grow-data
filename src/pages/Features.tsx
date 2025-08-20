import FarmHeader from "@/components/FarmHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Heart, 
  Wheat, 
  Calendar, 
  Wrench, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Livestock Management",
    description: "Complete animal registration, health tracking, breeding records, and performance monitoring."
  },
  {
    icon: Wheat,
    title: "Crop Management", 
    description: "Monitor crop growth, track planting schedules, manage harvest data, and optimize yields."
  },
  {
    icon: Calendar,
    title: "Event Scheduling",
    description: "Plan and track farm activities, treatments, maintenance, and important deadlines."
  },
  {
    icon: Wrench,
    title: "Equipment Tracking",
    description: "Manage farm equipment, schedule maintenance, track usage, and monitor efficiency."
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Track expenses, monitor earnings, manage budgets, and analyze profitability."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reports",
    description: "Comprehensive insights, performance metrics, and detailed reporting for informed decisions."
  },
  {
    icon: Users,
    title: "Personnel Management",
    description: "Manage farm staff, track payroll, schedule shifts, and monitor productivity."
  },
  {
    icon: Package,
    title: "Input Management",
    description: "Track seeds, fertilizers, feed, and other inputs with inventory management."
  },
  {
    icon: Truck,
    title: "Distribution Network",
    description: "Manage product distribution, track shipments, and optimize delivery routes."
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Farm Management Solution
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Everything you need to run your farm efficiently, from livestock and crops to finances and distribution.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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
      </main>
    </div>
  );
};

export default Features;