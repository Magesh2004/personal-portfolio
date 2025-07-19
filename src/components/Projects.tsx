import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";
import todoFullImg from "@/assets/project/to-do-full.png";
import yelpCampImg from "@/assets/project/yelp-camp.png";
import quicklinkImg from "@/assets/project/quicklink.png";

  const projects = [
    {
    title: "To-Do Full",
      description:
      "A full-featured Category based to-do application with advanced task management and productivity tools.",
    image: todoFullImg,
    screenshots: [todoFullImg],
    code: "https://github.com/Magesh2004/To-Do", 
    tech: ["React", "TypeScript", "Node.js", "Express.js"],
  },
    {
    title: "Yelp Camp",
      description:
      "Yelp camp is a camping website where you can search for camps and add and view reviews.",
    image: yelpCampImg,
    screenshots: [yelpCampImg],
      code: "https://github.com/Magesh2004/YelpCamp",
    demo: "#", 
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Passport"],
    },
    {
    title: "Quicklink",
      description:
      "Quicklink is a link bookmark app for ESEVAI MAIYAM. Save and organize your links with a user-friendly interface.",
    image: quicklinkImg,
    screenshots: [quicklinkImg],
      code: "https://github.com/Magesh2004/QuickLink",
    demo: "#", 
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Passport","Bootstrap"],
    },
];

const placeholder = "/placeholder.svg";

const ShowcaseProjects = () => {
  const [active, setActive] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const userInteracted = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const activeProject = projects[active];

  // Auto-scroll logic
  useEffect(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!userInteracted.current) {
        setActive((prev) => (prev + 1) % projects.length);
      } else {
        userInteracted.current = false;
      }
    }, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  // Handler for user click
  const handleProjectClick = (idx: number) => {
    userInteracted.current = true;
    setActive(idx);
  };

  // Change project on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Section is in view
        const scrollPercent = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight))
        );
        const idx = Math.floor(scrollPercent * projects.length);
        setActive(idx >= projects.length ? projects.length - 1 : idx);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 min-h-[900px] flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: 900 }}>
      {/* Blended Background */}
      <div id="projects"
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: "linear-gradient(135deg, #f3f4f6 0%, #e0ece7 100%)",
          opacity: 1,
        }}
        aria-hidden="true"
      />
      {/* Main Card */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <div className="showcase-card flex flex-col md:flex-row" style={{ minHeight: 510 }}>
          {/* Left: Screenshot */}
          <div className="flex-1 flex items-center justify-center p-6 min-w-[260px] bg-white/60">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject.image}
                src={activeProject.image || placeholder}
                alt={activeProject.title}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg shadow-lg max-h-80 object-contain"
                style={{ background: "#f3f3f3" }}
              />
            </AnimatePresence>
                  </div>
          {/* Right: Details */}
          <div className="flex-1 flex flex-col justify-center p-8 min-w-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-gayathri text-gray-800">
                  {activeProject.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-inria">
                  {activeProject.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tech && activeProject.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-accent-light/60 text-accent-dark text-xs font-semibold shadow-sm border border-accent-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                {/* Links */}
                <div className="flex gap-6 mt-2">
                  {activeProject.code && (
                    <a
                      href={activeProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-accent-primary transition-colors font-inter text-base"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
                      Code
                    </a>
                  )}
                  {activeProject.demo && (
                      <a
                      href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-accent-primary transition-colors font-inter text-base"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        Live Demo
                      </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Bottom Carousel/Row */}
        <div className="showcase-carousel">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              onClick={() => handleProjectClick(idx)}
              className={idx === active ? "active" : ""}
              aria-label={`Show ${proj.title}`}
            >
              <img
                src={proj.image || placeholder}
                alt={proj.title}
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
        {/* See More Button */}
      <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
          className="see-more-btn font-inter bg-accent-primary text-white border border-accent-primary px-8 py-3 rounded-lg hover:bg-white hover:text-accent-primary transition-all duration-300 inline-block animate-infinite"
          >
            See More →
          </Link>
      </div>
    </section>
  );
};

export default ShowcaseProjects;
