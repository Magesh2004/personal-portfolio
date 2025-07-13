import { useEffect, useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "#214141",
    skills: [
      { name: "React", percent: 90 },
      { name: "TypeScript", percent: 85 },
      { name: "Tailwind CSS", percent: 95 },
      { name: "Next.js", percent: 80 },
      { name: "Vue.js", percent: 75 },
    ],
  },
  {
    title: "Backend",
    color: "#214141",
    skills: [
      { name: "Node.js", percent: 85 },
      { name: "Python", percent: 80 },
      { name: "PostgreSQL", percent: 75 },
      { name: "MongoDB", percent: 70 },
      { name: "Express.js", percent: 85 },
    ],
  },
  {
    title: "Tools & Others",
    color: "#214141",
    skills: [
      { name: "Git", percent: 90 },
      { name: "Docker", percent: 70 },
      { name: "AWS", percent: 65 },
      { name: "Figma", percent: 80 },
      { name: "Testing", percent: 75 },
    ],
  },
];

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#214141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 18v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ),
    title: "Clean Code",
    desc: "Writing maintainable and scalable code with best practices",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#214141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94"/><path d="M9.69 8h11.48"/><path d="M7.38 12l5.74-9.94"/><path d="M9.69 16L3.95 6.06"/><path d="M14.31 16H2.83"/><path d="M16.62 12l-5.74 9.94"/></svg>
    ),
    title: "Creative Design",
    desc: "Crafting beautiful user interfaces with attention to detail",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#214141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M13 2v8h8"/><path d="M13 22V12H5"/></svg>
    ),
    title: "Performance",
    desc: "Optimizing applications for speed and efficiency",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#214141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a10.94 10.94 0 0 1 13 0"/></svg>
    ),
    title: "User-Centered",
    desc: "Focusing on user experience and accessibility",
  },
];

const About = () => {
  // Animate bars on mount
  const [animatedPercents, setAnimatedPercents] = useState(
    skillGroups.map(group => group.skills.map(() => 0))
  );

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    skillGroups.forEach((group, groupIdx) => {
      group.skills.forEach((skill, skillIdx) => {
        // Stagger the animation for each bar
        const timeout = setTimeout(() => {
          setAnimatedPercents(prev => {
            const updated = prev.map(arr => [...arr]);
            updated[groupIdx][skillIdx] = skill.percent;
            return updated;
          });
        }, 200 + (groupIdx * 5 + skillIdx) * 120);
        timeouts.push(timeout);
      });
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-20 bg-background-warm" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Me Heading and Subtitle */}
        <div className="text-center mb-10 animate-fade-in" data-aos="fade-down">
          <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-text-darker mb-4">
            ABOUT ME
          </h2>
          <p className="font-inria text-lg text-text-primary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        {/* Modern Intro and Features Grid */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left: Intro Card */}
          <div className="flex-1 bg-[#181b1b] rounded-2xl p-10 shadow-soft min-w-[320px] max-w-2xl mx-auto flex flex-col justify-center hover:scale-105 hover:-rotate-1 hover:shadow-accent transition-transform duration-300" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Passionate Developer & Digital Creator</h2>
            <p className="text-base text-gray-200 mb-3">I'm a dedicated developer with a passion for creating innovative digital solutions. With years of experience in modern web technologies, I specialize in building responsive, user-friendly applications that make a difference.</p>
            <p className="text-base text-gray-200 mb-6">My journey in development started with curiosity and has evolved into a commitment to excellence. I believe in the power of technology to solve real-world problems and create meaningful user experiences.</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX'].map((tag) => (
                <span key={tag} className="px-4 py-1 rounded-full bg-[#222] text-white text-sm font-semibold shadow-sm border border-[#222]">{tag}</span>
                  ))}
                </div>
              </div>
          {/* Right: Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[320px]">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex-1 bg-white/80 rounded-2xl shadow-soft p-8 min-w-[280px] max-w-md mx-auto flex flex-col items-start hover:scale-105 hover:-rotate-1 hover:shadow-accent transition-transform duration-300"
                style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)" }}
                data-aos="zoom-in"
              >
                <div className="mb-2" style={{ color: '#214141' }}>{f.icon}</div>
                <div className="text-lg font-bold text-text-darker mb-1">{f.title}</div>
                <div className="text-text-primary text-sm">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className="flex-1 bg-white/80 rounded-2xl shadow-soft p-8 min-w-[280px] max-w-md mx-auto hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)" }}
              data-aos="fade-up"
            >
              <h3 className="text-center text-xl font-bold mb-6" style={{ color: group.color }}>
                {group.title}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-text-darker text-base">{skill.name}</span>
                      <span className="text-sm text-text-primary font-inria">{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded bg-accent-light/20 overflow-hidden">
                      <div
                        className="h-2 rounded transition-all duration-1000"
                        style={{
                          width: `${animatedPercents[idx][i]}%`,
                          background: group.color,
                          boxShadow: "0 1px 8px 0 rgba(33,65,65,0.08)",
                        }}
                      />
                    </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
