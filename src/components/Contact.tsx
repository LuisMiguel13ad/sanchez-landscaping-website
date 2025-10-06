import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { sendFormEmail, initializeEmailJS } from "@/lib/emailjs";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS when component mounts
  React.useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendFormEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        alert('Thank you for your consultation request! We will contact you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          budget: '',
          details: ''
        });
      } else {
        setSubmitStatus('error');
        alert('There was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('There was an error sending your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <a 
                        href="tel:8566280183" 
                        className="text-primary hover:underline text-lg"
                      >
                        (856) 628-0183
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <a 
                        href="mailto:dcsanchez75@gmail.com" 
                        className="text-primary hover:underline"
                      >
                        dcsanchez75@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Service Area</h4>
                      <p className="text-muted-foreground">
                        NJ, PA & DE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Consultation Request Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Free Consultation</h3>
            <Card className="border-border shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(856) 123-4567"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landscaping">Landscaping</SelectItem>
                        <SelectItem value="hardscaping">Hardscaping</SelectItem>
                        <SelectItem value="patio">Patio Installation</SelectItem>
                        <SelectItem value="retaining-wall">Retaining Wall</SelectItem>
                        <SelectItem value="lawn-care">Lawn Care & Maintenance</SelectItem>
                        <SelectItem value="garden-design">Garden Design</SelectItem>
                        <SelectItem value="drainage">Drainage Solutions</SelectItem>
                        <SelectItem value="outdoor-living">Outdoor Living Space</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget *</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Project Details *</Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your project in detail. Include property size, specific requirements, timeline, and any other important information..."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;