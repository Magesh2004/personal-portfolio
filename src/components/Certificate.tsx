import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Certificate.css';

const certificates = [
  {
    src: "/certificates/gfg-ml.png",
    alt: "ML & DS Certificate (GeeksforGeeks)",
    title: "ML & DS",
    subtitle: "(GEEKSFORGEEKS)",
    description: "Machine Learning & Data Science certificate from GeeksforGeeks.",
    logo: "/certificates/gfg-logo.png",
    org: "GEEKS FOR GEEKS",
    verify: "https://www.geeksforgeeks.org/certificate/028bd3641239585ca2695348c4e617ba"
  },
  {
    src: "/certificates/guvi_ds.png",
    alt: "Data Science Certificate (GUVI)",
    title: "Data Science",
    subtitle: "(GUVI)",
    description: "Data Science certificate from GUVI.",
    logo: "/certificates/guvi-logo.png",
    org: "GUVI",
    verify: "https://www.guvi.in/certificate?id=7w401o113KA09a9881"
  },
  {
    src: "/certificates/gfg-full.png",
    alt: "Full Stack Certificate (GeeksforGeeks)",
    title: "Full Stack Development",
    subtitle: "(GEEKSFORGEEKS)",
    description: "Full Stack Development certificate from GeeksforGeeks.",
    logo: "/certificates/gfg-logo.png",
    org: "GEEKS FOR GEEKS",
    verify: "https://media.geeksforgeeks.org/courses/certificates/3f37fdfa3b75f757c4ee4985ebf09d89.pdf"
  },
  {
    src: "/certificates/hr-css.png",
    alt: "CSS Certificate (HackerRank)",
    title: "CSS",
    subtitle: "(HACKERRANK)",
    description: "CSS certificate from HackerRank.",
    logo: "/certificates/hr-logo.png",
    org: "HACKERRANK",
    verify: "https://www.hackerrank.com/certificates/c11446d612ba"
  },
  {
    src: "/certificates/emc-js.png",
    alt: "JavaScript Certificate (ErrorMakesClever)",
    title: "JavaScript",
    subtitle: "(ERRORMAKESCLEVER)",
    description: "JavaScript certificate from ErrorMakesClever.",
    logo: "/certificates/emc-logo.png",
    org: "ERRORMAKESCLEVER",
    verify: "https://errormakesclever.graphy.com/share-certificate?serialno=ABS4QNTB"
  },
  {
    src: "/certificates/sl-html.png",
    alt: "HTML Certificate (SoloLearn)",
    title: "HTML",
    subtitle: "(SOLOLEARN)",
    description: "HTML certificate from SoloLearn.",
    logo: "/certificates/sl-logo.png",
    org: "SOLOLEARN",
    verify: "https://www.sololearn.com/en/certificates/CC-ZMUZOFI7"
  },
  {
    src: "/certificates/guvi_py.png",
    alt: "Python Certificate (GUVI)",
    title: "Python",
    subtitle: "(GUVI)",
    description: "Python certificate from GUVI.",
    logo: "/certificates/guvi-logo.png",
    org: "GUVI",
    verify: "https://www.guvi.in/verify-certificate?id=qUBY521610k80w7C22&course=pythonzerotoheroenglish"
  },
  {
    src: "/certificates/hr-py.png",
    alt: "Python Certificate (HackerRank)",
    title: "Python",
    subtitle: "(HACKERRANK)",
    description: "Python certificate from HackerRank.",
    logo: "/certificates/hr-logo.png",
    org: "HACKERRANK",
    verify: "https://www.hackerrank.com/certificates/5bbf7dc67951"
  },
  {
    src: "/certificates/sl-py.png",
    alt: "Python Certificate (SoloLearn)",
    title: "Python",
    subtitle: "(SOLOLEARN)",
    description: "Python certificate from SoloLearn.",
    logo: "/certificates/sl-logo.png",
    org: "SOLOLEARN",
    verify: "https://www.sololearn.com/en/certificates/CC-TRBTBNVT"
  },
  {
    src: "/certificates/s-ml-mat.png",
    alt: "ML & Math Certificate (Scaler)",
    title: "ML & Math",
    subtitle: "(SCALER)",
    description: "Machine Learning & Math certificate from Scaler.",
    logo: "/certificates/s-logo.png",
    org: "SCALER",
    verify: "https://moonshot.scaler.com/s/sl/_RJgtLUiPP?_gl=1*17bjuye*_ga*OTMxNzY4ODM4LjE2OTE1NDk5MDg.*_ga_53S71ZZG1X*MTcwOTQ0NDQzNC4yOS4xLjE3MDk0NDkzNjcuMC4wLjA."
  },
  {
    src: "/certificates/s-mat.png",
    alt: "Math Certificate (Scaler)",
    title: "Math",
    subtitle: "(SCALER)",
    description: "Math certificate from Scaler.",
    logo: "/certificates/s-logo.png",
    org: "SCALER",
    verify: "https://moonshot.scaler.com/s/sl/VIWl93nQYD"
  },
];

const Certificate = () => {
  const [active, setActive] = useState(0); // Start with the first certificate
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [animating, setAnimating] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const interactionRef = useRef(false);

  const prev = () => {
    if (animating) return;
    interactionRef.current = true;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
      setAnimating(false);
    }, 500);
  };
  const next = () => {
    if (animating) return;
    interactionRef.current = true;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!animating && !interactionRef.current) {
        setDirection('right');
        setAnimating(true);
        setTimeout(() => {
          setActive((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
          setAnimating(false);
        }, 500);
      } else if (interactionRef.current) {
        interactionRef.current = false;
      }
    }, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [animating]);

  return (
    <>
      <section className="py-28" style={{ background: '#181C14' }} id="certificates" data-aos="fade-up">
        <img
          src="/golden-ribbon.png"
          alt="Golden Ribbon"
          className="hidden md:block animate-float-ribbon"
          style={{ position: 'absolute', top: 0, left: 0, width: '140px', transform: 'rotate(-18deg)', zIndex: 20 }}
        />
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-gayathri text-6xl font-bold mb-12 text-center tracking-wide" style={{ color: '#fff' }} data-aos="fade-down">
            Certificates
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Dynamic Certificate Data with Animation */}
          <div className="flex flex-col gap-16 min-h-[480px]" data-aos="fade-right">
            <div
              key={active}
              className={`transition-all duration-500 ease-in-out hover:scale-110 ${direction === 'right' && animating ? 'slide-left' : ''}${direction === 'left' && animating ? 'slide-right' : ''}`}
            >
              <h2 className="font-gayathri text-7xl font-bold mb-4" style={{ color: '#fff' }}>
                {certificates[active].title}
              </h2>
              <div className="text-2xl text-accent-light mb-4">{certificates[active].subtitle}</div>
              <p className="font-inria text-xl text-gray-200 max-w-xl">
                {certificates[active].description}
              </p>
              <div className="flex items-center gap-6 mt-12">
                <div className="w-24 h-24 rounded-lg bg-white flex items-center justify-center">
                  <img src={certificates[active].logo} alt={certificates[active].org} className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <div className="font-inria text-lg text-white mb-4">{certificates[active].org}</div>
                  <a href={certificates[active].verify} target="_blank" rel="noopener noreferrer">
                    <button className="border border-accent-light text-accent-light px-6 py-2 rounded-full text-base font-inter hover:bg-accent-light hover:text-background-dark transition-all duration-300" style={{ fontSize: '1.275rem' }}>
                      VERIFY
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Carousel */}
          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="relative flex items-center justify-center h-[480px] md:h-[510px] w-full">
              {/* Left partial */}
              <img
                src={certificates[(active + certificates.length - 1) % certificates.length].src}
                alt="prev cert"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-60 object-contain opacity-60 scale-90 z-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
                style={{ left: '10%', filter: 'blur(1px)' }}
              />
              {/* Center main with animation */}
              <img
                key={active}
                src={certificates[active].src}
                alt="active cert"
                className={`relative z-10 w-[630px] h-[450px] object-contain rounded shadow-xl transition-all duration-500 hover:scale-110 ${direction === 'right' && animating ? 'slide-left' : ''}${direction === 'left' && animating ? 'slide-right' : ''}`}
                style={{ boxShadow: '0 12px 48px -12px rgba(64, 160, 128, 0.3)' }}
              />
              {/* Right partial */}
              <img
                src={certificates[(active + 1) % certificates.length].src}
                alt="next cert"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-60 object-contain opacity-60 scale-90 z-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
                style={{ right: '10%', filter: 'blur(1px)' }}
              />
          </div>
            {/* Carousel Navigation */}
            <div className="flex gap-10 mt-12">
              <button
                onClick={prev}
                className="w-16 h-16 rounded-full border border-accent-light flex items-center justify-center text-accent-light bg-background-dark hover:bg-accent-light hover:text-background-dark transition-all duration-300 text-3xl hover:scale-125"
                aria-label="Previous"
                data-aos="zoom-in"
              >
                &#8592;
              </button>
              <button
                onClick={next}
                className="w-16 h-16 rounded-full border border-accent-light flex items-center justify-center text-accent-light bg-background-dark hover:bg-accent-light hover:text-background-dark transition-all duration-300 text-3xl hover:scale-125"
                aria-label="Next"
                data-aos="zoom-in"
              >
                &#8594;
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;