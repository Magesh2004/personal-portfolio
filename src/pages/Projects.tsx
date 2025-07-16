import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const placeholder = "/placeholder.svg";

const allProjects = [
  // Frontend (Vanilla JS)
  {
    title: "Calculator JS",
    description: "A simple calculator built with vanilla JavaScript.",
    image: "/project/calculator.png",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/magesh2004/calculator-js",
  },
  {
    title: "Frontend Minis",
    description: "A collection of mini frontend projects.",
    image: placeholder,
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/magesh2004/frontend-minis",
  },
  {
    title: "Hand Cricket JS",
    description: "A hand cricket game implemented in JavaScript.",
    image: "/project/hand-cricket-js.png",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/magesh2004/hand-cricket-js",
  },
  {
    title: "Registration JS",
    description: "A registration form with validation using JavaScript.",
    image: "/project/registration-js.png",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/magesh2004/registration-js",
  },
  {
    title: "To-Do Simple Front",
    description: "A simple to-do list app built with vanilla JS.",
    image: "/project/to-do-simple-front.png",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/magesh2004/to-do-simple-front",
  },
  {
    title: "TV Show Search Front",
    description: "A TV show search app using a public API.",
    image: "/project/tv-show-search-front.png",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    code: "https://github.com/magesh2004/tv-show-search-front",
  },
  // React
  {
    title: "Color Box",
    description: "A color box generator and picker built with React.",
    image: "/project/color-box.png",
    category: "React",
    tech: ["React", "CSS"],
    code: "https://github.com/magesh2004/color-box",
  },
  {
    title: "Country",
    description: "Country info explorer using React and REST APIs.",
    image: "/project/country.png",
    category: "React",
    tech: ["React", "REST API", "CSS"],
    code: "https://github.com/magesh2004/Country",
  },
  {
    title: "Dad's Joke React",
    description: "A fun app to fetch and display dad jokes using React.",
    image: "/project/dadjoke_react.png",
    category: "React",
    tech: ["React", "API", "CSS"],
    code: "https://github.com/magesh2004/dadsjoke_react",
  },
  {
    title: "Naruto Info",
    description: "Naruto anime info app built with React.",
    image: "/project/naruto-info.png",
    category: "React",
    tech: ["React", "API", "CSS"],
    code: "https://github.com/magesh2004/naruto-info",
  },
  {
    title: "To-Do List React Front",
    description: "A to-do list app built with React.",
    image: "/project/todo-list-react-front.png",
    category: "React",
    tech: ["React", "CSS", "LocalStorage"],
    code: "https://github.com/magesh2004/todo-list-react-front",
  },
  {
    title: "Weather App",
    description: "A weather forecast app using React and OpenWeather API.",
    image: "/project/weather-app.png",
    category: "React",
    tech: ["React", "API", "CSS"],
    code: "https://github.com/magesh2004/weather-app",
  },
  // Fullstack
  {
    title: "Markdown Note Taking",
    description: "A fullstack markdown note-taking app.",
    image: "/project/markdown-note-taking.png",
    category: "Fullstack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/magesh2004/markdown-note-taking",
  },
  {
    title: "QuickLink",
    description: "A fullstack link management and bookmarking app.",
    image: "/project/quicklink.png",
    category: "Fullstack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/magesh2004/QuickLink",
  },
  {
    title: "To-Do",
    description: "A fullstack to-do application with user authentication.",
    image: "/project/to-do-full.png",
    category: "Fullstack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/magesh2004/To-Do",
  },
  {
    title: "YelpCamp",
    description: "A fullstack YelpCamp clone for camp reviews.",
    image: "/project/yelp-camp.png",
    category: "Fullstack",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Passport"],
    code: "https://github.com/Magesh2004/YelpCamp",
  },
  // Backend
  {
    title: "Book Author API",
    description: "A RESTful API for managing books and authors.",
    image: placeholder,
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    code: "https://github.com/magesh2004/Book_Author_API",
  },
  {
    title: "Book Store API",
    description: "Backend API for a book store application.",
    image: placeholder,
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    code: "https://github.com/magesh2004/book-store-api",
  },
  {
    title: "Broadcasting Server",
    description: "A server for real-time broadcasting and messaging.",
    image: placeholder,
    category: "Backend",
    tech: ["Node.js", "WebSocket", "Express"],
    code: "https://github.com/magesh2004/broadcasting-server",
  },
  {
    title: "URL Shortener",
    description: "A backend service to shorten URLs.",
    image: placeholder,
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB"],
    code: "https://github.com/magesh2004/Url_shortner",
  },
];

const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

export default function ProjectsPage() {
  const [selected, setSelected] = useState("All");
  const [titleText, setTitleText] = useState("");
  const projects = selected === "All" ? allProjects : allProjects.filter(p => p.category === selected);
  const canvasRef = useRef(null);

  // Typewriter effect for title
  useEffect(() => {
    const text = "My Projects";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTitleText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Enhanced particle animation with vintage colors
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 3,
      dx: -0.3 + Math.random() * 0.6,
      dy: -0.3 + Math.random() * 0.6,
      alpha: 0.15 + Math.random() * 0.4,
      color: Math.random() > 0.5 ? '#4A7C6E' : '#A0C6B7'
    }));
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-background min-h-screen relative overflow-hidden pt-24">
      {/* Enhanced Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" 
        style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh'}} 
      />
      
      {/* Vintage Paper Texture Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background-warm/20 via-transparent to-background-warm/10 pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header with Typewriter Effect */}
        <header className="relative flex flex-col items-center justify-center mb-16 pt-8 pb-12">
          {/* Vintage Decorative Frame */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
            <div className="w-96 h-32 border-4 border-accent-light/30 rounded-lg"
                 style={{
                   borderImage: 'url("data:image/svg+xml,%3csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M0 0h100v100H0z\' fill=\'none\' stroke=\'%23A0C6B7\' stroke-width=\'2\' stroke-dasharray=\'5,5\'/%3e%3c/svg%3e") 2',
                 }} 
            />
          </div>
          
          {/* Typewriter Title */}
          <h1 className="relative z-10 font-gayathri text-6xl md:text-7xl font-extrabold text-text-darker mb-6 tracking-tight text-center">
            <span className="bg-gradient-to-r from-accent-primary to-accent-light bg-clip-text text-transparent">
              {titleText}
              <span className="animate-pulse text-accent-primary">|</span>
            </span>
          </h1>
          
          {/* Vintage Ornamental Divider */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent-primary" />
              <div className="w-3 h-3 border-2 border-accent-primary rounded-full bg-background" />
              <div className="w-24 h-px bg-accent-primary" />
              <div className="w-3 h-3 border-2 border-accent-primary rounded-full bg-background" />
              <div className="w-12 h-px bg-accent-primary" />
            </div>
            
            <p className="font-inria text-lg md:text-xl text-text-primary max-w-3xl mx-auto text-center leading-relaxed">
              A curated collection of my <span className="text-accent-primary font-semibold italic">Frontend</span>, <span className="text-accent-primary font-semibold italic">React</span>, <span className="text-accent-primary font-semibold italic">Fullstack</span>, and <span className="text-accent-primary font-semibold italic">Backend</span> projects. Each piece showcases my passion for crafting elegant solutions and modern web experiences.
            </p>
          </div>
        </header>

        {/* Enhanced Vintage Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelected(cat)}
              className={`px-8 py-3 font-tenor text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover:rotate-1 ${
                selected === cat 
                  ? 'bg-background-dark text-white border-background-dark shadow-accent' 
                  : 'text-accent-dark bg-background-warm border-accent-light hover:bg-accent-light/30 hover:text-accent-primary shadow-soft'
              }`}
              style={{
                borderRadius: '2rem 1.5rem 2rem 1.5rem',
                boxShadow: selected === cat ? '0 8px 32px -8px rgba(74, 124, 110, 0.4)' : '0 4px 20px -4px rgba(74, 124, 110, 0.2)',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Projects Grid with Staggered Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selected}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={`${selected}-${index}`}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
                className="group perspective-1000"
              >
                <Card className="bg-background-warm border-0 shadow-soft hover:shadow-accent transition-all duration-700 cursor-pointer overflow-hidden transform-gpu group-hover:scale-105 group-hover:rotate-1 group-hover:-translate-y-3"
                      style={{
                        borderRadius: '1.5rem 1.2rem 1.7rem 1.3rem',
                        boxShadow: '0 8px 32px -8px rgba(74, 124, 110, 0.15), 0 2px 0 rgba(224, 214, 195, 0.8) inset',
                        background: 'linear-gradient(135deg, #F5F2ED 0%, #E8D9C4 100%)',
                        border: '2px solid rgba(160, 198, 183, 0.3)',
                      }}
                >
                  <CardContent className="p-0 flex flex-col md:flex-row md:items-stretch relative">
                    {/* Vintage Corner Ornaments */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent-primary opacity-60" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent-primary opacity-60" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent-primary opacity-60" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent-primary opacity-60" />
                    
                    {/* Project Image with Vintage Frame */}
                    <div className="md:w-1/2 w-full aspect-video relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none m-2 md:m-0">
                      <div className="absolute inset-0 bg-gradient-accent opacity-20 z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                        style={{
                          filter: 'sepia(10%) saturate(110%) brightness(105%)',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background-dark/20 z-10" />
                    </div>
                    
                    {/* Enhanced Project Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between relative">
                      <div>
                        <Badge className="bg-accent-light/40 text-accent-dark border-accent-light mb-3 font-tenor text-sm font-semibold px-3 py-1"
                               style={{
                                 borderRadius: '1rem 0.5rem 1rem 0.5rem',
                                 boxShadow: '0 2px 8px rgba(74, 124, 110, 0.2)',
                               }}
                        >
                          {project.category}
                        </Badge>
                        
                        <h3 className="font-gayathri text-2xl font-bold text-text-darker mb-3 group-hover:text-accent-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="font-inria text-text-primary leading-relaxed mb-4 text-base">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tag, tagIndex) => (
                            <motion.span 
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                              className="px-3 py-1 bg-accent-light/30 text-accent-dark text-sm font-semibold border border-accent-light/50 transition-all duration-300 hover:bg-accent-light/50 hover:scale-105"
                              style={{
                                borderRadius: '0.75rem 0.5rem 0.75rem 0.5rem',
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <a 
                          href={project.code} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 px-4 py-2 bg-accent-primary text-white font-tenor font-semibold transition-all duration-300 hover:bg-accent-dark hover:scale-105 hover:rotate-1"
                          style={{
                            borderRadius: '1.5rem 1rem 1.5rem 1rem',
                            boxShadow: '0 4px 16px rgba(74, 124, 110, 0.3)',
                          }}
                        >
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                          </svg>
                          View Code
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}