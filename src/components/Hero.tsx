import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-landscaping.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful landscaping and hardscaping work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        
        <div className="inline-block mb-6 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
          <p className="text-secondary-foreground text-sm font-semibold tracking-wide">
            Since 2015 • Rated 5.0/5
          </p>
        </div>
        
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Consistent Service,<br />
          <span className="text-secondary">Exceptional Outdoor Results</span>
        </h3>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Your trusted partner for landscaping and hardscaping projects
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="#contact">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get a Free Estimate
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 text-lg px-8 py-6 rounded-xl transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            (856) 628-0183
          </Button>
        </div>
        
        {/* Service Areas */}
        <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <p className="text-white text-lg font-semibold tracking-wide">
            Serving NJ, PA & DE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;