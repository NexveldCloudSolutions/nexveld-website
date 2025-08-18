import { MapPin, Heart, Target, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Making Ideas Happen",
      description: "We transform your vision into reality with innovative technology solutions that drive real business results."
    },
    {
      icon: Heart,
      title: "Affordable Excellence",
      description: "Quality technology shouldn't break the bank. We provide premium solutions at prices that make sense for your business."
    },
    {
      icon: Users,
      title: "Client Relationships",
      description: "We build lasting partnerships with our clients, providing ongoing support and growing together over time."
    },
    {
      icon: MapPin,
      title: "Proudly South African",
      description: "Based in South Africa, we understand local business needs while delivering world-class technology solutions."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driving Businesses
              <br />
              <span className="text-primary">Forward Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in South Africa, Nexveld is a tech startup passionate about making technology accessible 
              and transformative for businesses of all sizes. We specialize in cloud solutions that scale with 
              your growth and adapt to your unique needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team combines local insight with global expertise, ensuring that every solution we deliver 
              not only meets technical requirements but also drives meaningful business outcomes. We believe 
              in building relationships, not just applications.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl aspect-square flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Based in South Africa</h3>
                <p className="text-blue-100">Serving clients globally</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-elevation p-6 max-w-xs">
              <div className="text-sm text-muted-foreground mb-2">Our Mission</div>
              <div className="text-foreground font-medium">
                "To make cutting-edge technology accessible and affordable for every business."
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};