import Hero from "@/components/Hero";
import About from "@/components/About";
import ShowcaseProjects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const techStack = [
  "PYTHON", "NODE", "EXPRESS", "MONGODB", "REACT", "BLENDER", "MYSQL", "JAVA"
];

const Index = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
  // Navbar scroll logic
  const [navVisible, setNavVisible] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [clickedTag, setClickedTag] = useState<string | null>(null);
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation reset
  useEffect(() => {
    if (clickedTag) {
      const timeout = setTimeout(() => setClickedTag(null), 250);
      return () => clearTimeout(timeout);
    }
  }, [clickedTag]);
  return (
    <div className="min-h-screen">
      {/* Global Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500
          ${navVisible ? 'opacity-100' : 'opacity-0 -translate-y-6'}
          ${navShow ? 'translate-y-0' : '-translate-y-full opacity-0'}
          shadow-sm`}
        style={{ background: 'hsl(var(--background))', borderBottom: '1px solid #2221', minHeight: '48px' }}
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo/Name */}
          <div className="font-gayathri text-lg font-bold tracking-widest text-text-darker">MAGESH</div>
          {/* Desktop Nav Links */}
          <div className="flex-1 flex justify-center gap-10 text-base font-inria max-md:hidden">
            <a
              href="#about"
              className={`hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'about' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
              onClick={() => setClickedTag('about')}
            >
              About me
            </a>
            <a
              href="#certificates"
              className={`hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'certificates' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
              onClick={() => setClickedTag('certificates')}
            >
              Certificates
            </a>
            <a
              href="#contact"
              className={`hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'contact' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
              onClick={() => setClickedTag('contact')}
            >
              Contact
            </a>
            <a
              href="#projects"
              className={`hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'projects' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
              onClick={() => setClickedTag('projects')}
            >
              Projects
            </a>
            {/* <Link to="/projects" className="hover:text-accent-primary transition-colors duration-200">Projects</Link> */}
          </div>
          {/* Download CV Button (desktop) */}
          <a
            href="#"
            className="bg-background-dark text-white px-6 py-2 rounded-full font-inter shadow hover:bg-accent-primary hover:text-background-dark transition-all duration-300 text-sm hover:scale-105 hover:shadow-accent max-md:hidden"
            style={{ minWidth: 120, textAlign: 'center' }}
            data-aos="zoom-in"
          >
            Download CV
          </a>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-primary">
                  {/* Hamburger icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-8 mt-16 px-6">
                    <a
                      href="#about"
                      className={`text-lg font-inria py-2 border-b border-accent-light hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'about' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
                      onClick={() => setClickedTag('about')}
                    >
                      About me
                    </a>
                    <a
                      href="#experience"
                      className={`text-lg font-inria py-2 border-b border-accent-light hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'experience' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
                      onClick={() => setClickedTag('experience')}
                    >
                      Experience
                    </a>
                    <a
                      href="#certificates"
                      className={`text-lg font-inria py-2 border-b border-accent-light hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'certificates' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
                      onClick={() => setClickedTag('certificates')}
                    >
                      Certificates
                    </a>
                    <a
                      href="#contact"
                      className={`text-lg font-inria py-2 border-b border-accent-light hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'contact' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
                      onClick={() => setClickedTag('contact')}
                    >
                      Contact
                    </a>
                    <Link
                      to="/projects"
                      className={`text-lg font-inria py-2 border-b border-accent-light hover:text-accent-primary transition-colors duration-200 cursor-pointer ${clickedTag === 'projects' ? 'scale-95 bg-accent-primary/10 shadow-lg' : ''}`}
                      onClick={() => setClickedTag('projects')}
                    >
                      Projects
                    </Link>
                  </div>
                  <div className="px-6 pb-8">
                    <a
                      href="#"
                      className="block w-full bg-background-dark text-white px-6 py-3 rounded-full font-inter shadow hover:bg-accent-primary hover:text-background-dark transition-all duration-300 text-base hover:scale-105 hover:shadow-accent text-center"
                      style={{ minWidth: 120 }}
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <div className="relative">
        <Hero data-aos="fade-down" />
        <ParticleBackground theme="dark" />
      </div>
      {/* Chevron/V shape divider with scrolling skills, extended to full viewport width */}
      <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen" style={{ height: '120px', zIndex: 30, marginBottom: '-40px' }}>
        {/* Back (darker) band as SVG, dips lower at bottom left */}
        <svg width="100vw" height="120" viewBox={`0 0 ${width} 120`} style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
          <polygon points={`0,30 ${width},0 ${width},120 0,110`} fill="#393933" />
        </svg>
        {/* Front (green) band as SVG, overlapping and forming a chevron */}
        <svg width="100vw" height="120" viewBox={`0 0 ${width} 120`} style={{ position: 'absolute', left: 0, top: 0, zIndex: 2 }}>
          <polygon points={`0,90 ${width},120 ${width},30 0,0`} fill="#5e9082" />
        </svg>
        {/* Scrolling skills inside the green band */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100vw',
          height: '120px',
          zIndex: 3,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
        }}>
          <div
            className="flex animate-infinite-scroll"
            style={{
              whiteSpace: 'nowrap',
              alignItems: 'center',
              height: '120px',
              animation: 'infinite-scroll 18s linear infinite',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'white',
              letterSpacing: '1px',
            }}
          >
            {Array(2).fill(0).map((_, i) => (
              <div className="flex" key={i}>
                {techStack.map((tech, idx) => (
                  <span
                    key={tech + i}
                    className="mx-10"
                    style={{ lineHeight: '120px' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <About data-aos="fade-up" />
        <ParticleBackground theme="light" />
      </div>
      <div className="relative">
        <ShowcaseProjects data-aos="fade-up" />
        <ParticleBackground theme="light" />
      </div>
      <div className="relative">
        <Certificate data-aos="fade-up" />
        {/* ParticleBackground removed from Certificate section */}
      </div>
      <div className="relative">
        <Contact data-aos="fade-up" />
        <ParticleBackground theme="light" />
      </div>
    </div>
  );
};

export default Index;
