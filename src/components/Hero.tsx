import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const techStack = [
    "PYTHON", "NODE", "EXPRESS", "MONGODB", "REACT", "BLENDER", "MYSQL", "JAVA"
  ];

  // Animation state for navbar
  const [navVisible, setNavVisible] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setTimeout(() => setNavVisible(true), 100);
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 40) {
        setNavShow(false); // scrolling down
      } else {
        setNavShow(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-warm flex items-center justify-center px-6 overflow-hidden" data-aos="fade-down">
      {/* Animated Sticky Nav Bar, hides on scroll down */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-700
          ${navVisible ? 'opacity-100' : 'opacity-0 -translate-y-6'}
          ${navShow ? 'translate-y-0' : '-translate-y-full opacity-0'}
          shadow-sm`}
        style={{ background: 'hsl(var(--background))', borderBottom: '1px solid #2221', minHeight: '48px' }}
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo/Name */}
          <div className="font-gayathri text-lg font-bold tracking-widest text-text-darker">MAGESH</div>
          {/* Centered Nav Links */}
          <div className="flex-1 flex justify-center gap-10 text-base font-inria">
            <a href="#about" className="hover:text-accent-primary transition-colors duration-200">About me</a>
            <a href="#projects" className="hover:text-accent-primary transition-colors duration-200">Projects</a>
            <a href="#certificates" className="hover:text-accent-primary transition-colors duration-200">Certificates</a>
            <a href="#contact" className="hover:text-accent-primary transition-colors duration-200">Contact</a>
          </div>
          {/* Download CV Button */}
          <a
            href="#"
            className="bg-background-dark text-white px-6 py-2 rounded-full font-inter shadow hover:bg-accent-primary hover:text-background-dark transition-all duration-300 text-sm hover:scale-105 hover:shadow-accent"
            style={{ minWidth: 120, textAlign: 'center' }}
            data-aos="zoom-in"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-light/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <h1 className="font-gayathri text-5xl md:text-6xl lg:text-7xl font-bold text-text-darker mb-6 leading-tight">
            I'm <span className="text-accent-primary">Developer</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-text-primary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Passionate iOS and Developer passionate about crafting 
            experiences that are enjoyable and bring your vision to life.
          </p>
          
          <button className="font-inter bg-accent-primary text-white px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-accent transform hover:scale-110" data-aos="zoom-in">
            Hire me
          </button>
          
          {/* Social links */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-8">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
          </div>
        </div>
        {/* Right side - Portrait and avatar */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
            {/* Background decorative circle */}
            <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-20"></div>
            
            {/* Profile image placeholder */}
            <div className="absolute inset-4 bg-accent-primary/10 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-accent-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;