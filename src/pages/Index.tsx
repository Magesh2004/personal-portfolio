import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
};

export default Index;
