import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Leaf, TreePine, Droplets } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Hardscape Design & Installation",
    description: "Custom patios, walkways, retaining walls, and outdoor kitchens designed to last.",
  },
  {
    icon: Leaf,
    title: "Landscape Maintenance",
    description: "From lawn mowing to seasonal cleanups, we keep your yard in perfect shape.",
  },
  {
    icon: TreePine,
    title: "Tree & Plant Care",
    description: "Professional pruning, trimming, and planting to keep your property healthy.",
  },
  {
    icon: Droplets,
    title: "Water & Drainage Solutions",
    description: "Smart irrigation and drainage systems to protect your investment.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Comprehensive Landscaping & Hardscaping Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need lawn care, tree services, or a brand-new patio, Sanchez Landscaping & Hardscaping is here to help. With over a decade of experience, we provide reliable solutions for both residential and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;