import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "30-day free trial",
  "No setup fees",
  "24/7 customer support",
  "Cancel anytime"
];

const FarmCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-farm border-border/50">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Your Farm?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who have already increased their profits and 
              streamlined their operations with Shamba Metrics.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg shadow-farm">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/5">
                Schedule a Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Get started in under 5 minutes
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FarmCTA;