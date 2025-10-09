import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Sanchez Landscaping
          </h2>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in creating beautiful outdoor spaces
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Photo */}
          <div className="order-2 lg:order-1">
            <Card className="border-border shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/team-photo.jpg" 
                  alt="Sanchez Landscaping Team" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Company Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Since 2015, Sanchez Landscaping & Hardscaping has been transforming outdoor spaces 
                across the Tri-State Area. We started as a small family business with a passion for 
                creating beautiful, functional landscapes that enhance both property value and quality of life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to be one of the most trusted landscaping companies in New Jersey, 
                Pennsylvania, and Delaware. Our commitment to quality, attention to detail, and 
                customer satisfaction has earned us a reputation for excellence.
              </p>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-primary" />
                Service Areas
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="px-3 py-1 text-sm">New Jersey</Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">Pennsylvania</Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">Delaware</Badge>
              </div>
              <p className="text-muted-foreground">
                We proudly serve residential and commercial properties throughout the Tri-State Area, 
                bringing professional landscaping and hardscaping services to your doorstep.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
