import FarmHeader from "@/components/FarmHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team - we're here to help you succeed
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have questions about Shamba Metrics? Our team is ready to help you get started 
                    and make the most of our farm management platform.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">info@goldindata.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+254 725808050</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Nairobi, Kenya<br />
                          East Africa
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Cards */}
                <div className="space-y-6">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Technical Support</CardTitle>
                      <CardDescription>
                        Need help with the platform? Our technical team is here to assist.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Get help with setup, troubleshooting, and technical questions.
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Response time: Within 2 hours
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Sales Inquiry</CardTitle>
                      <CardDescription>
                        Interested in our platform? Let's discuss your farm's needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Learn about pricing, features, and how Shamba Metrics can help your farm.
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Response time: Within 1 hour
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Training & Onboarding</CardTitle>
                      <CardDescription>
                        Get the most out of our platform with personalized training.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive training sessions to help you master all features.
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Available: Monday - Friday
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How quickly can I get started?
                  </h3>
                  <p className="text-muted-foreground">
                    You can start using Shamba Metrics immediately. Our team will help you get set up and running within 24 hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Do you provide training?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! We provide comprehensive training to ensure you can use all features effectively and maximize your farm's potential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Is my data secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. We use enterprise-grade security measures to protect your farm data with encryption and secure cloud storage.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Can I access it on mobile?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! Our platform works seamlessly on all devices - desktop, tablet, and mobile - so you can manage your farm anywhere.
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

export default Contact;