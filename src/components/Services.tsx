import { Cloud, Code, Database, Smartphone, Globe, Shield } from "lucide-react";
import { NexveldButton } from "./ui/nexveld-button";

export const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that grows with your business. We design and implement robust cloud architectures for optimal performance.",
      features: ["AWS & Azure Integration", "Auto-scaling Solutions", "Cloud Migration", "Cost Optimization"]
    },
    {
      icon: Globe,
      title: "Websites & Web Apps",
      description: "Modern, responsive websites and powerful web applications built with cutting-edge technologies for exceptional user experiences.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Progressive Web Apps"]
    },
    {
      icon: Database,
      title: "Data Storage & Analytics",
      description: "Secure, efficient data management solutions with powerful analytics to help you make data-driven business decisions.",
      features: ["Database Design", "Data Warehousing", "Real-time Analytics", "Data Security"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver outstanding user experiences across all devices and platforms.",
      features: ["iOS & Android", "Cross-platform Development", "App Store Optimization", "Mobile-first Design"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Cloud Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions that transform your business ideas into reality. 
            Our expertise spans across cloud infrastructure, web development, and mobile applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <NexveldButton variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-all">
                      Learn More
                    </NexveldButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud solutions can drive your business forward. 
              We're here to make your ideas happen with affordable, cutting-edge technology.
            </p>
            <NexveldButton variant="hero" size="lg" className="bg-white text-primary hover:bg-blue-50">
              Get Free Consultation
            </NexveldButton>
          </div>
        </div>
      </div>
    </section>
  );
};