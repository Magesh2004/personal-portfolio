import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Yolo camping an upcoming website",
      description: "Yolo camping is an upcoming website where you can search for campsites and make paid and new review.",
      image: "placeholder-1",
      link: "View Project →",
      category: "Web Development"
    },
    {
      title: "Think of me in Upcoming website for mental program",
      description: "Help users to find upcoming website for mental program with secure user registration and new technology.",
      image: "placeholder-2", 
      link: "View Project →",
      category: "Full Stack"
    },
    {
      title: "Quick link is the full complete website for second program",
      description: "Quick link is the full complete website for second program with create full application and also new review.",
      image: "placeholder-3",
      link: "View Project →", 
      category: "Web Application"
    },
    {
      title: "Yolo camping an upcoming website for camping and still new review",
      description: "Yolo camping an upcoming website for camping and still new review with more user create and also development.",
      image: "placeholder-4",
      link: "View Project →",
      category: "Platform"
    }
  ];

  const stats = [
    { number: "100+", label: "Completed projects" },
    { number: "30+", label: "Current Skills" },
    { number: "2+", label: "Ongoing project" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
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
              className="bg-white border-0 shadow-soft hover:shadow-accent transition-all duration-500 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-accent rounded-t-lg mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-primary/20 group-hover:bg-accent-primary/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-accent-light/20 text-accent-dark border-0">
                      {project.category}
                    </Badge>
                    <span className="font-inter text-accent-primary group-hover:text-accent-dark transition-colors font-medium">
                      {project.link}
                    </span>
                  </div>
                  
                  <h3 className="font-tenor text-xl font-bold text-text-darker mb-3 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-inria text-text-primary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mb-16">
          <button className="font-inter text-accent-primary border border-accent-primary px-8 py-3 rounded-lg hover:bg-accent-primary hover:text-white transition-all duration-300">
            See More →
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-background-dark text-center py-12 px-6 rounded-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="font-gayathri text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-accent-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;