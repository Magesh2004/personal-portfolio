import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";

const techStack = [
  "PYTHON", "NODE", "EXPRESS", "MONGODB", "REACT", "BLENDER", "MYSQL", "JAVA"
];

const Index = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
  return (
    <div className="min-h-screen">
      <Hero data-aos="fade-down" />
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
      <About data-aos="fade-up" />
      <Projects data-aos="fade-up" />
      <Certificate data-aos="fade-up" />
      <Contact data-aos="fade-up" />
    </div>
  );
};

export default Index;
