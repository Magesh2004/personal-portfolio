import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const techStack = [
    "PYTHON", "NODE", "EXPRESS", "MONGODB", "REACT", "BLENDER", "MYSQL", "JAVA"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-warm flex items-center justify-center px-6 overflow-hidden">
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
          
          <button className="font-inter bg-accent-primary text-white px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-accent transform hover:scale-105">
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
      
      {/* Tech stack bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-dark text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="font-inter bg-transparent border border-accent-light text-accent-light hover:bg-accent-light hover:text-background-dark transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;