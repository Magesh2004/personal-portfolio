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
    <div className="min-h-screen relative">
      {/* Vintage Paper Texture Background */}
      <div className="fixed inset-0 opacity-25 pointer-events-none z-0" 
           style={{
             backgroundImage: `url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="vintage-paper" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="%23F5F2ED"/><circle cx="5" cy="5" r="0.5" fill="%23E8D9C4" opacity="0.3"/><circle cx="15" cy="10" r="0.3" fill="%23A0C6B7" opacity="0.2"/><circle cx="25" cy="15" r="0.4" fill="%23E8D9C4" opacity="0.4"/><circle cx="35" cy="25" r="0.2" fill="%23A0C6B7" opacity="0.3"/><circle cx="10" cy="30" r="0.3" fill="%23E8D9C4" opacity="0.2"/><circle cx="30" cy="35" r="0.5" fill="%23A0C6B7" opacity="0.3"/></pattern></defs><rect width="200" height="200" fill="url(%23vintage-paper)"/></svg>')`,
           }}
      />
      
      {/* Vintage Aging Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0"
           style={{
             background: 'radial-gradient(circle at 20% 20%, rgba(232, 217, 196, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(232, 217, 196, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(160, 198, 183, 0.1) 0%, transparent 50%)',
           }}
      />
      
      {/* Vintage Border Frame */}
      <div className="fixed inset-4 pointer-events-none z-10 border-2 border-accent-primary/20 rounded-lg"
           style={{
             borderImage: 'url("data:image/svg+xml,%3csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M0 0h100v100H0z\' fill=\'none\' stroke=\'%23A0C6B7\' stroke-width=\'2\' stroke-dasharray=\'8,4\'/%3e%3c/svg%3e") 2',
           }}
      />
      
      {/* Vintage Corner Flourishes */}
      <div className="fixed top-8 left-8 w-20 h-20 opacity-30 pointer-events-none z-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20 Z" fill="none" stroke="#4A7C6E" strokeWidth="2"/>
          <path d="M30 30 Q50 25 70 30 Q75 50 70 70 Q50 75 30 70 Q25 50 30 30 Z" fill="none" stroke="#A0C6B7" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="4" fill="#4A7C6E" opacity="0.6"/>
          <circle cx="35" cy="35" r="2" fill="#A0C6B7" opacity="0.8"/>
          <circle cx="65" cy="65" r="2" fill="#A0C6B7" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="fixed top-8 right-8 w-20 h-20 opacity-30 pointer-events-none z-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M80 20 Q50 10 20 20 Q10 50 20 80 Q50 90 80 80 Q90 50 80 20 Z" fill="none" stroke="#4A7C6E" strokeWidth="2"/>
          <path d="M70 30 Q50 25 30 30 Q25 50 30 70 Q50 75 70 70 Q75 50 70 30 Z" fill="none" stroke="#A0C6B7" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="4" fill="#4A7C6E" opacity="0.6"/>
          <circle cx="65" cy="35" r="2" fill="#A0C6B7" opacity="0.8"/>
          <circle cx="35" cy="65" r="2" fill="#A0C6B7" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="fixed bottom-8 left-8 w-20 h-20 opacity-30 pointer-events-none z-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 80 Q50 90 80 80 Q90 50 80 20 Q50 10 20 20 Q10 50 20 80 Z" fill="none" stroke="#4A7C6E" strokeWidth="2"/>
          <path d="M30 70 Q50 75 70 70 Q75 50 70 30 Q50 25 30 30 Q25 50 30 70 Z" fill="none" stroke="#A0C6B7" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="4" fill="#4A7C6E" opacity="0.6"/>
          <circle cx="35" cy="65" r="2" fill="#A0C6B7" opacity="0.8"/>
          <circle cx="65" cy="35" r="2" fill="#A0C6B7" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="fixed bottom-8 right-8 w-20 h-20 opacity-30 pointer-events-none z-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M80 80 Q50 90 20 80 Q10 50 20 20 Q50 10 80 20 Q90 50 80 80 Z" fill="none" stroke="#4A7C6E" strokeWidth="2"/>
          <path d="M70 70 Q50 75 30 70 Q25 50 30 30 Q50 25 70 30 Q75 50 70 70 Z" fill="none" stroke="#A0C6B7" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="4" fill="#4A7C6E" opacity="0.6"/>
          <circle cx="65" cy="65" r="2" fill="#A0C6B7" opacity="0.8"/>
          <circle cx="35" cy="35" r="2" fill="#A0C6B7" opacity="0.8"/>
        </svg>
      </div>
      
      {/* Vintage Decorative Top Border */}
      <div className="fixed top-0 left-0 right-0 h-2 z-20 pointer-events-none"
           style={{
             background: 'repeating-linear-gradient(90deg, #4A7C6E 0px, #4A7C6E 20px, #A0C6B7 20px, #A0C6B7 40px)',
           }}
      />
      
      {/* Vintage Decorative Bottom Border */}
      <div className="fixed bottom-0 left-0 right-0 h-2 z-20 pointer-events-none"
           style={{
             background: 'repeating-linear-gradient(90deg, #4A7C6E 0px, #4A7C6E 20px, #A0C6B7 20px, #A0C6B7 40px)',
           }}
      />
      {/* Enhanced Vintage Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-500
          ${navShow ? 'translate-y-0' : '-translate-y-full'}
          shadow-sm backdrop-blur-sm`}
        style={{ 
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background-warm)) 100%)', 
          borderBottom: '2px solid rgba(160, 198, 183, 0.3)', 
          minHeight: '48px',
          boxShadow: '0 4px 20px -4px rgba(74, 124, 110, 0.15)',
        }}
        data-aos="fade-down"
      >
        {/* Vintage Navbar Border Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40"
             style={{
               backgroundImage: 'repeating-linear-gradient(90deg, #4A7C6E 0px, #4A7C6E 10px, transparent 10px, transparent 20px)',
             }}
        />
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
        {/* Vintage Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(90deg, rgba(74, 124, 110, 0.3) 0px, rgba(74, 124, 110, 0.3) 15px, transparent 15px, transparent 30px)',
             }}
        />
        <div className="vintage-section-wrapper">
          <Hero data-aos="fade-down" />
        </div>
        <ParticleBackground theme="dark" />
      </div>
      
      {/* Enhanced Vintage Chevron/V shape divider with scrolling skills */}
      <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen" style={{ height: '120px', zIndex: 30, marginBottom: '-40px' }}>
        {/* Vintage Texture Overlay on Divider */}
        <div className="absolute inset-0 z-4 pointer-events-none opacity-30"
             style={{
               backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="vintage-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/></pattern></defs><rect width="40" height="40" fill="url(%23vintage-dots)"/></svg>')`,
             }}
        />
        
        {/* Back (darker) band as SVG, dips lower at bottom left */}
        <svg width="100vw" height="120" viewBox={`0 0 ${width} 120`} style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
          <polygon points={`0,30 ${width},0 ${width},120 0,110`} fill="#393933" />
          {/* Vintage decorative border */}
          <line x1="0" y1="30" x2={width} y2="0" stroke="rgba(160, 198, 183, 0.3)" strokeWidth="2" strokeDasharray="8,4"/>
        </svg>
        
        {/* Front (green) band as SVG, overlapping and forming a chevron */}
        <svg width="100vw" height="120" viewBox={`0 0 ${width} 120`} style={{ position: 'absolute', left: 0, top: 0, zIndex: 2 }}>
          <polygon points={`0,90 ${width},120 ${width},30 0,0`} fill="#5e9082" />
          {/* Vintage decorative border */}
          <line x1="0" y1="90" x2={width} y2="120" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" strokeDasharray="8,4"/>
          <line x1="0" y1="0" x2={width} y2="30" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" strokeDasharray="8,4"/>
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
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {Array(2).fill(0).map((_, i) => (
              <div className="flex" key={i}>
                {techStack.map((tech, idx) => (
                  <span
                    key={tech + i}
                    className="mx-10 relative"
                    style={{ lineHeight: '120px' }}
                  >
                    {tech}
                    {/* Vintage ornamental separators between skills */}
                    <span className="absolute -right-5 top-1/2 transform -translate-y-1/2 text-white/40 text-2xl">
                      ◆
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Vintage Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(90deg, rgba(74, 124, 110, 0.3) 0px, rgba(74, 124, 110, 0.3) 15px, transparent 15px, transparent 30px)',
             }}
        />
        <div className="vintage-section-wrapper">
          <About data-aos="fade-up" />
        </div>
        <ParticleBackground theme="light" />
      </div>
      
      <div className="relative">
        {/* Vintage Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(90deg, rgba(74, 124, 110, 0.3) 0px, rgba(74, 124, 110, 0.3) 15px, transparent 15px, transparent 30px)',
             }}
        />
        <div className="vintage-section-wrapper">
          <ShowcaseProjects data-aos="fade-up" />
        </div>
        <ParticleBackground theme="light" />
      </div>
      
      <div className="relative">
        {/* Vintage Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(90deg, rgba(74, 124, 110, 0.3) 0px, rgba(74, 124, 110, 0.3) 15px, transparent 15px, transparent 30px)',
             }}
        />
        <div className="vintage-section-wrapper">
          <Certificate data-aos="fade-up" />
        </div>
        {/* ParticleBackground removed from Certificate section */}
      </div>
      
      <div className="relative">
        {/* Vintage Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10 pointer-events-none"
             style={{
               background: 'repeating-linear-gradient(90deg, rgba(74, 124, 110, 0.3) 0px, rgba(74, 124, 110, 0.3) 15px, transparent 15px, transparent 30px)',
             }}
        />
        <div className="vintage-section-wrapper">
          <Contact data-aos="fade-up" />
        </div>
        <ParticleBackground theme="light" />
      </div>
    </div>
  );
};

export default Index;
