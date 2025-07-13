import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Yolo camping an upcoming website",
      description: "Yolo camping is an upcoming website where you can search for campsites and make paid and new review.",
      image: "placeholder-1",
      category: "Web Development",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      code: "https://github.com/your-repo/yolo-camping",
      demo: "https://yolo-camping-demo.com"
    },
    {
      title: "Think of me in Upcoming website for mental program",
      description: "Help users to find upcoming website for mental program with secure user registration and new technology.",
      image: "placeholder-2", 
      category: "Full Stack",
      tech: ["React", "TypeScript", "MongoDB", "Express.js"],
      code: "https://github.com/your-repo/think-of-me",
      demo: "https://think-of-me-demo.com"
    },
    {
      title: "Quick link is the full complete website for second program",
      description: "Quick link is the full complete website for second program with create full application and also new review.",
      image: "placeholder-3",
      category: "Web Application",
      tech: ["Vue.js", "Node.js", "AWS", "Stripe"],
      code: "https://github.com/your-repo/quick-link",
      demo: "https://quick-link-demo.com"
    },
    {
      title: "Yolo camping an upcoming website for camping and still new review",
      description: "Yolo camping an upcoming website for camping and still new review with more user create and also development.",
      image: "placeholder-4",
      category: "Platform",
      tech: ["React", "Figma", "Docker", "Stripe"],
      code: "https://github.com/your-repo/yolo-camping-platform",
      demo: "https://yolo-camping-platform-demo.com"
    }
  ];

  return (
    <section className="py-20 bg-background" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in" data-aos="fade-down">
          <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-text-darker mb-4">
            PROJECTS
          </h2>
          <p className="font-inria text-lg text-text-primary max-w-2xl mx-auto mb-8">
            Here are all the IOS apps building during this program recent part of 
            my life who can love my final projects.
          </p>
          <button className="font-inter text-accent-primary border border-accent-primary px-6 py-2 rounded-lg hover:bg-accent-primary hover:text-white transition-all duration-300">
            See More →
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-soft hover:shadow-accent transition-all duration-500 group cursor-pointer animate-fade-in-up hover:scale-105 hover:-rotate-1 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="zoom-in"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-accent rounded-t-lg mb-6 relative overflow-hidden group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500">
                  <div className="absolute inset-0 bg-accent-primary/20 group-hover:bg-accent-primary/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"></div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-accent-light/20 text-accent-dark border-0">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-tenor text-xl font-bold text-text-darker mb-3 group-hover:text-accent-primary transition-colors group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-inria text-text-primary leading-relaxed">
                    {project.description}
                  </p>
                  {/* Tech Stack Tags */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-accent-light/60 text-accent-dark text-xs font-semibold shadow-sm border border-accent-light">{tag}</span>
                      ))}
                    </div>
                  )}
                  {/* Code & Live Demo Row */}
                  <div className="flex items-center gap-6 mt-6 text-gray-400 text-base font-inter">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                      Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mb-16">
          <button className="font-inter text-accent-primary border border-accent-primary px-8 py-3 rounded-lg hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-accent" data-aos="zoom-in">
            See More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;