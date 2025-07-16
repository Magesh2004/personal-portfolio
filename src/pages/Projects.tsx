import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const projects = selected === "All" ? allProjects : allProjects.filter(p => p.category === selected);
  const canvasRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      alpha: 0.2 + Math.random() * 0.5
    }));
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#5e9082';
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
      <section className="py-16 bg-background min-h-screen animate-fade-slide relative overflow-hidden pt-24" data-aos="fade-up">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh'}} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Redesigned Head Section */}
        <header className="relative flex flex-col items-center justify-center mb-14 pt-6 pb-10">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
            <svg width="340" height="80" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
              <ellipse cx="170" cy="40" rx="160" ry="28" fill="#5e9082" fillOpacity="0.08" />
              <ellipse cx="170" cy="40" rx="120" ry="18" fill="#5e9082" fillOpacity="0.12" />
            </svg>
          </div>
          <h1 className="relative z-10 font-gayathri text-5xl md:text-6xl font-extrabold text-text-darker mb-4 tracking-tight text-center drop-shadow-lg">
            <span className="bg-gradient-to-r from-accent-primary to-accent-light bg-clip-text text-transparent">My Projects</span>
          </h1>
          <div className="relative z-10 flex flex-col items-center">
            <span className="block w-24 h-1 rounded-full bg-accent-primary mb-4" />
            <p className="font-inria text-lg md:text-xl text-text-primary max-w-2xl mx-auto text-center">
              Explore my work across <span className="text-accent-primary font-semibold">Frontend</span>, <span className="text-accent-primary font-semibold">React</span>, <span className="text-accent-primary font-semibold">Fullstack</span>, and <span className="text-accent-primary font-semibold">Backend</span> projects. Each project showcases my skills in modern web development and problem solving.
            </p>
          </div>
        </header>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full font-inter border border-accent-light shadow transition-all duration-200 hover:bg-accent-light/30 hover:text-accent-primary ${selected === cat ? 'bg-background-dark text-white border-background-dark' : 'text-accent-dark bg-white/80'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Card
              className="bg-white border-0 shadow-soft hover:shadow-accent transition-all duration-500 group cursor-pointer animate-fade-in-up hover:scale-105 hover:-rotate-1 hover:-translate-y-2 vintage-project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="zoom-in"
            >
              <CardContent className="p-0 flex flex-col md:flex-row md:items-stretch">
                {/* Project Image */}
                <div className="md:w-1/2 w-full aspect-video bg-gradient-accent rounded-t-lg md:rounded-l-lg md:rounded-tr-none mb-0 md:mb-0 overflow-hidden flex items-center justify-center group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between vintage-project-content">
                  <div>
                    <Badge variant="secondary" className="bg-accent-light/20 text-accent-dark border-0 mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-tenor text-xl font-bold text-text-darker mb-2 group-hover:text-accent-primary transition-colors group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-300 vintage-shadow">
                      {project.title}
                    </h3>
                    <p className="font-inria text-text-primary leading-relaxed mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-accent-light/60 text-accent-dark text-xs font-semibold shadow-sm border border-accent-light vintage-shadow">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-6 text-gray-400 text-base font-inter">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                      Code
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 