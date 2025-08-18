import { useEffect, useState } from "react";
import { NexveldButton } from "./ui/nexveld-button";
import { ArrowRight, Cloud, Code, Database, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              To New Heights
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a South African tech startup specializing in cloud solutions that make your ideas happen. 
            From websites to mobile apps, we drive businesses forward with affordable, cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <NexveldButton variant="hero" size="lg" className="bg-white text-primary hover:bg-blue-50">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </NexveldButton>
            <NexveldButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </NexveldButton>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 hover:bg-white/20 transition-all duration-300">
                <Cloud className="h-8 w-8 text-white mx-auto" />
              </div>
              <p className="text-blue-100 text-sm font-medium">Cloud Solutions</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 hover:bg-white/20 transition-all duration-300">
                <Code className="h-8 w-8 text-white mx-auto" />
              </div>
              <p className="text-blue-100 text-sm font-medium">Web Apps</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 hover:bg-white/20 transition-all duration-300">
                <Database className="h-8 w-8 text-white mx-auto" />
              </div>
              <p className="text-blue-100 text-sm font-medium">Data Storage</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 hover:bg-white/20 transition-all duration-300">
                <Smartphone className="h-8 w-8 text-white mx-auto" />
              </div>
              <p className="text-blue-100 text-sm font-medium">Mobile Apps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};