import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a 
                href="tel:8562755073" 
                className="text-primary hover:underline text-lg"
              >
                (856) 275-5073
              </a>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a 
                href="mailto:info@sanchezlandscaping.com" 
                className="text-primary hover:underline"
              >
                info@sanchezlandscaping.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Service Area</h3>
              <p className="text-muted-foreground">
                NJ, PA & DE
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;