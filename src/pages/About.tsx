import FarmHeader from "@/components/FarmHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Shamba Metrics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Empowering farmers with innovative technology solutions for modern agriculture
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Shamba Metrics was founded with a simple yet powerful vision: to transform agriculture through technology. 
                We understand the challenges farmers face in managing their operations efficiently while maximizing productivity 
                and profitability. Our comprehensive platform brings together all aspects of farm management into one 
                integrated solution, making it easier than ever to run a successful agricultural business.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    To provide farmers with cutting-edge tools that simplify farm management and drive agricultural success.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A world where every farmer has access to technology that maximizes their potential and sustainability.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for excellence in everything we do, delivering quality solutions that exceed expectations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building a strong farming community through collaboration, support, and shared knowledge.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose Shamba Metrics?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                We're more than just a software company - we're your partners in agricultural success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Comprehensive Solution</h3>
                  <p className="text-muted-foreground">
                    From livestock to crops, finances to distribution - manage every aspect of your farm in one place.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">User-Friendly Design</h3>
                  <p className="text-muted-foreground">
                    Intuitive interface designed specifically for farmers, making technology accessible to everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Join thousands of farmers who have increased their productivity and profitability with our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;