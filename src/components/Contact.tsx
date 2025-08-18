import { useState } from "react";
import { NexveldButton } from "./ui/nexveld-button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@nexveld.co.za",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+27 (0) 11 123 4567",
      description: "Monday to Friday, 9AM - 6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Cape Town, South Africa",
      description: "Serving clients across Africa & beyond"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Make Your
            <br />
            <span className="text-primary">Ideas Happen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge cloud solutions? 
            Get in touch with our team for a free consultation and discover how we can drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-primary font-medium mb-1">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-card rounded-xl p-6 shadow-card">
              <h4 className="font-bold text-foreground mb-3">Why Choose Nexveld?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Free initial consultation</li>
                <li>✓ Transparent pricing with no hidden fees</li>
                <li>✓ Ongoing support and maintenance</li>
                <li>✓ Proven track record with South African businesses</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <NexveldButton 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </NexveldButton>
              </form>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                We typically respond within 24 hours. Your information is kept confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};