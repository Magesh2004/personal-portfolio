import { useState } from "react";

const certificates = [
  {
    src: "/ut.png",
    alt: "Certificate 1",
    title: "ML & DS",
    subtitle: "(GEEKSFORGEEKS)",
    description: "This certificate is from Geeks for Geeks machine learning and data science bootcamp where I learnt major concepts about data science and machine learning from beginner to intermediate algorithms as a 26 week boot camp.",
    logo: "/gfg-logo.png",
    org: "GEEKS FOR GEEKS",
    verify: "#"
  },
  {
    src: "/image.png",
    alt: "Certificate 2",
    title: "Frontend Development",
    subtitle: "(FREECODECAMP)",
    description: "Completed the Responsive Web Design certification, covering HTML, CSS, Flexbox, Grid, and accessibility best practices.",
    logo: "/image.png",
    org: "FREECODECAMP",
    verify: "#"
  },
  {
    src: "/image.png",
    alt: "Certificate 3",
    title: "Python for Everybody",
    subtitle: "(COURSERA)",
    description: "A comprehensive course on Python programming, data structures, and web data access, completed on Coursera.",
    logo: "/image.png",
    org: "COURSERA",
    verify: "#"
  },
];

const Certificate = () => {
  const [active, setActive] = useState(1); // Center certificate

  const prev = () => setActive((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-20 bg-background-dark text-white" id="certificates" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Dynamic Certificate Data with Animation */}
        <div className="flex flex-col gap-10 min-h-[320px]" data-aos="fade-right">
          <div
            key={active}
            className="transition-all duration-500 ease-in-out animate-fade-slide hover:scale-105"
          >
            <h2 className="font-gayathri text-5xl font-bold mb-2">{certificates[active].title}</h2>
            <div className="text-lg text-accent-light mb-2">{certificates[active].subtitle}</div>
            <p className="font-inria text-base text-gray-200 max-w-md">
              {certificates[active].description}
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                <img src={certificates[active].logo} alt={certificates[active].org} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="font-inria text-sm text-white mb-2">{certificates[active].org}</div>
                <a href={certificates[active].verify} target="_blank" rel="noopener noreferrer">
                  <button className="border border-accent-light text-accent-light px-4 py-1 rounded-full text-xs font-inter hover:bg-accent-light hover:text-background-dark transition-all duration-300" style={{ fontSize: '0.85rem' }}>
                    VERIFY
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Carousel */}
        <div className="flex flex-col items-center" data-aos="fade-left">
          <div className="relative flex items-center justify-center h-[320px] md:h-[340px] w-full">
            {/* Left partial */}
            <img
              src={certificates[(active + certificates.length - 1) % certificates.length].src}
              alt="prev cert"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-40 object-contain opacity-60 scale-90 z-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
              style={{ left: '10%', filter: 'blur(1px)' }}
            />
            {/* Center main with animation */}
            <img
              key={active}
              src={certificates[active].src}
              alt="active cert"
              className="relative z-10 w-[420px] h-[300px] object-contain rounded shadow-xl transition-all duration-500 animate-fade-slide hover:scale-105"
              style={{ boxShadow: '0 8px 32px -8px rgba(64, 160, 128, 0.3)' }}
            />
            {/* Right partial */}
            <img
              src={certificates[(active + 1) % certificates.length].src}
              alt="next cert"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-40 object-contain opacity-60 scale-90 z-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
              style={{ right: '10%', filter: 'blur(1px)' }}
            />
        </div>
          {/* Carousel Navigation */}
          <div className="flex gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-accent-light flex items-center justify-center text-accent-light bg-background-dark hover:bg-accent-light hover:text-background-dark transition-all duration-300 text-xl hover:scale-110"
              aria-label="Previous"
              data-aos="zoom-in"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-accent-light flex items-center justify-center text-accent-light bg-background-dark hover:bg-accent-light hover:text-background-dark transition-all duration-300 text-xl hover:scale-110"
              aria-label="Next"
              data-aos="zoom-in"
            >
              &#8594;
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;