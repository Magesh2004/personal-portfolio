import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import profileImg from "@/assets/profile1.jpg";

const Hero = () => {
  const techStack = [
    "PYTHON", "NODE", "EXPRESS", "MONGODB","PRISMA", "REACT", "MYSQL", "JAVA"
  ];

  // Typing animation state
  const words = ["Developer","Creator","Coder","Full-Stack", "Designer"];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = words[currentWord];
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
      } else {
        setTyping(true);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }
    typingTimeout.current = timeout;
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentWord]);

  // Remove navbar state and scroll logic

  return (
    <section className="relative min-h-screen bg-gradient-warm flex items-center justify-center px-6 overflow-hidden" data-aos="fade-down">
      {/* Particle Background for dark section */}
      <ParticleBackground theme="dark" />
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-light/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <h1 className="font-gayathri text-5xl md:text-6xl lg:text-7xl font-bold text-text-darker mb-6 leading-tight">
            I'm a <span className="text-accent-primary">{displayed}&nbsp;<span className="border-r-2 border-accent-primary animate-pulse" style={{marginLeft:2}}></span></span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-text-primary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Just a dev who enjoys turning ideas into beautiful, functional, and useful digital things.
          </p>
          
          <a href="/projects">
          <button className="font-inter bg-accent-primary text-white px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-accent transform hover:scale-110" data-aos="zoom-in">
            Know more
          </button>
          </a>
          
          {/* Social links */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-8">
            <a href="https://github.com/Magesh2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <Github className="w-5 h-5 text-accent-primary" />
            </a>
            <a href="https://www.linkedin.com/in/magesh-balram/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <Linkedin className="w-5 h-5 text-accent-primary" />
            </a>
            <a href="https://x.com/mageshbalram" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <Twitter className="w-5 h-5 text-accent-primary" />
            </a>
            <a href="https://www.instagram.com/___magesh.____/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <Instagram className="w-5 h-5 text-accent-primary" />
            </a>
          </div>
        </div>
        {/* Right side - Portrait and avatar */}
        <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] mx-auto animate-fade-in-up animate-scale-in">
            {/* Background decorative circle */}
          <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-20 animate-fade-in-up animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
          {/* Profile image */}
          <img src={profileImg} alt="Profile" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full z-10 shadow-lg animate-fade-in-up animate-scale-in animate-giggle" style={{ animationDelay: '0.4s' }} />
          {/* Profile image placeholder (now behind the real image) */}
          <div className="absolute inset-4 bg-accent-primary/10 rounded-full flex items-center justify-center z-0 animate-fade-in-up animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-28 h-28 bg-accent-primary/20 rounded-full animate-fade-in-up animate-scale-in" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;