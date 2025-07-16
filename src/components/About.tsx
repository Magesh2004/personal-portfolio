import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "#214141",
    skills: [
      "React.js",
      "HTML5, CSS3, JavaScript (ES6+)",
      "Tailwind CSS, Bootstrap",
      "Figma",
    ],
  },
  {
    title: "Backend & Databases",
    color: "#214141",
    skills: [
      "Node.js & Express.js",
      "MongoDB with Mongoose",
      "PostgreSQL with Prisma ORM",
      "RESTful API Development",
      "JWT Authentication & Middleware",
      "Swagger (API Documentation)",
    ],
  },
  {
    title: "Developer Tools",
    color: "#214141",
    skills: [
      "Git & GitHub",
      "Postman",
      "Visual Studio Code",
      "NPM",
      "Cursor",
      "MongoDB Compass",
    ],
  },
  {
    title: "Exploration & Learning",
    color: "#214141",
    skills: [
      "Blender",
      "Machine Learning (Beginner Level)",
      "Data Science with Python (Pandas, NumPy, Matplotlib)",
      "Problem Solving & DSA (Python)",
      "Core CS Concepts: OS, Networks, DBMS",
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

const experience = [
  {
    year: "2022",
    title: "B.E. Computer Science & Engineering",
    company: "Einstein College of Engineering",
    duration: "May 2022 - May 2026",
    color: "#5e9082",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#5e9082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
  },
  {
    year: "2025",
    title: "Backend Developer Intern",
    company: "Icanio",
    duration: "June 2025 - July 2025",
    color: "#5e9082",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#5e9082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    ),
  },
  // {
  //   year: "2026",
  //   title: "Graduated B.E. CSE",
  //   company: "Einstein College of Engineering",
  //   color: "#5e9082",
  //   icon: (
  //     <svg width="24" height="24" fill="none" stroke="#5e9082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  //   ),
  // },
];

const About = () => {
  return (
    <section className="py-20 bg-background-warm" id="about" data-aos="fade-up">
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
        {/* Main Content and Experience Timeline */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 group">
          {/* Left: Intro Card and Features Grid */}
          <div className="flex-1 flex flex-col gap-8 min-w-[320px] max-w-2xl mx-auto">
            {/* Intro Card */}
            <div className="bg-[#181b1b] rounded-2xl p-10 shadow-soft min-w-[320px] flex flex-col justify-center border-2 border-transparent hover:border-accent-primary hover:shadow-2xl transition-all duration-300 will-change-transform cursor-pointer" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Passionate Developer & Creative Builder</h2>
              <p className="text-base text-gray-200 mb-3">I'm Magesh Balram B V, a student at Einstein College of Engineering and an aspiring full-stack developer with a strong focus on backend development. From building efficient APIs to designing responsive interfaces, I aim to create clean, practical web applications that solve real problems.</p>
              <p className="text-base text-gray-200 mb-6">What began as simple curiosity quickly grew into a passion for building things with code. I'm now deeply focused on becoming a better developer every day—learning by doing and constantly improving through real-world projects</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['React', 'Node.js', 'Python', 'Java', 'UI/UX'].map((tag) => (
                  <span key={tag} className="px-4 py-1 rounded-full bg-[#222] text-white text-sm font-semibold shadow-sm border border-[#222]">{tag}</span>
                ))}
              </div>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[320px]">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex-1 bg-white/80 rounded-2xl shadow-soft p-8 min-w-[280px] max-w-md mx-auto flex flex-col items-start border-2 border-transparent hover:border-accent-primary hover:shadow-2xl transition-all duration-300 will-change-transform cursor-pointer"
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
          {/* Right: Experience Timeline */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[320px] max-w-xs mx-auto p-8">
            <h3 className="text-xl font-bold text-text-darker mb-8">Experience</h3>
            <div className="relative w-full h-full flex flex-col items-center">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#222]" style={{ transform: 'translateX(-50%)' }} />
              {experience.map((exp, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <React.Fragment key={exp.year + exp.title}>
                    <motion.div
                      className="relative flex items-center mb-12 last:mb-0 w-full"
                      style={{ minHeight: 80 }}
                      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, delay: idx * 0.15 }}
                    >
                      {/* Year and Icon */}
                      {isLeft ? (
                        <>
                          <div className="flex flex-col items-end justify-center w-1/2 pr-4">
                            <span className="text-lg font-semibold text-[#222] mb-2">{exp.year}</span>
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-light border-2 border-accent-primary shadow" style={{ color: exp.color }}>
                              {exp.icon}
                            </div>
                          </div>
                          <div className="w-1/2 pl-4 flex justify-start">
                            <div className="bg-accent-light/30 rounded-xl shadow-lg border border-accent-primary px-6 py-4 min-w-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-accent-light/50">
                              <div className="text-accent-primary font-bold text-base mb-1">{exp.title}</div>
                              <div className="text-accent-primary text-sm">{exp.company}</div>
                              {exp.duration && (
                                <div className="text-xs text-accent-dark mt-1">{exp.duration}</div>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-4 flex justify-end">
                            <div className="bg-accent-light/30 rounded-xl shadow-lg border border-accent-primary px-6 py-4 min-w-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-accent-light/50">
                              <div className="text-accent-primary font-bold text-base mb-1">{exp.title}</div>
                              <div className="text-accent-primary text-sm">{exp.company}</div>
                              {exp.duration && (
                                <div className="text-xs text-accent-dark mt-1">{exp.duration}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center w-1/2 pl-4">
                            <span className="text-lg font-semibold text-[#222] mb-2">{exp.year}</span>
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-light border-2 border-accent-primary shadow" style={{ color: exp.color }}>
                              {exp.icon}
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {skillGroups.map((group, idx) => {
            // Staggered scrapbook effect
            const rotations = ['-2deg', '1.5deg', '-1deg', '2deg'];
            const offsets = ['-10px', '8px', '-6px', '12px'];
            return (
              <div
                key={group.title}
                className="vintage-skill-card max-w-[15rem] w-full p-4 hanging-card"
                style={{
                  transform: `rotate(${rotations[idx % rotations.length]}) translateY(${offsets[idx % offsets.length]})`,
                  zIndex: 10 - idx,
                }}
                data-aos="fade-up"
              >
                <div className="hanging-string mx-auto mb-2"></div>
                <h3 className="text-center mb-4 font-gayathri text-lg font-bold tracking-wider" style={{ color: group.color, letterSpacing: '0.04em' }}>
                  {group.title}
                </h3>
                <ul className="vintage-skill-list" style={{ fontSize: '0.95rem' }}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="transition-all duration-300 hover:scale-105 hover:text-accent-primary hover:shadow-accent cursor-pointer"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
