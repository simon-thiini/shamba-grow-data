import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "150M+",
    label: "Acres Managed",
    description: "Farmland under active management"
  },
  {
    value: "$2.3B",
    label: "Revenue Tracked",
    description: "Total farm revenue monitored"
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
    description: "Based on user feedback surveys"
  },
  {
    value: "45%",
    label: "Time Saved",
    description: "Average reduction in admin tasks"
  }
];

const FarmStats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Farms{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful farms already using Shamba Metrics to optimize their operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-farm transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmStats;