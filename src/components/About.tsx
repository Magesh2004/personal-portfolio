const About = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JS', 'Bootstrap', 'React'],
    backend: ['PHP', 'Laravel'],
    databases: ['MySQL', 'MongoDB'],
    languages: ['Python', 'Java', 'JavaScript'],
    others: ['Git', 'AWS', 'Docker']
  };

  return (
    <section className="py-20 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-text-darker mb-6">
            ABOUT ME
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-inria text-lg text-text-primary leading-relaxed mb-8">
              A Computer Science Engineer and specialist in building fullstack and responsive 
              web applications along with automation and experience with various frameworks in Java, 
              Python & JavaScript. I aim to work in an effective and challenging environment where 
              I can use my current skill, appropriate latest from work development. I have a basic 
              knowledge in Machine learning and Data Science.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-tenor text-2xl font-bold text-text-darker mb-8 text-center">
              SKILLS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-accent transition-all duration-300 group">
                <h4 className="font-tenor text-lg font-bold text-accent-primary mb-4 group-hover:text-accent-dark transition-colors">
                  FRONTEND
                </h4>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <div key={skill} className="text-text-primary font-inria">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-accent transition-all duration-300 group">
                <h4 className="font-tenor text-lg font-bold text-accent-primary mb-4 group-hover:text-accent-dark transition-colors">
                  BACKEND
                </h4>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <div key={skill} className="text-text-primary font-inria">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Databases */}
              <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-accent transition-all duration-300 group">
                <h4 className="font-tenor text-lg font-bold text-accent-primary mb-4 group-hover:text-accent-dark transition-colors">
                  DATABASES
                </h4>
                <div className="space-y-2">
                  {skills.databases.map((skill) => (
                    <div key={skill} className="text-text-primary font-inria">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-accent transition-all duration-300 group">
                <h4 className="font-tenor text-lg font-bold text-accent-primary mb-4 group-hover:text-accent-dark transition-colors">
                  LANGUAGES
                </h4>
                <div className="space-y-2">
                  {skills.languages.map((skill) => (
                    <div key={skill} className="text-text-primary font-inria">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Others */}
              <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-accent transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <h4 className="font-tenor text-lg font-bold text-accent-primary mb-4 group-hover:text-accent-dark transition-colors">
                  OTHERS
                </h4>
                <div className="space-y-2">
                  {skills.others.map((skill) => (
                    <div key={skill} className="text-text-primary font-inria">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
