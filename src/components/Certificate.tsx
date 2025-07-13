import { Card, CardContent } from "@/components/ui/card";

const Certificate = () => {
  return (
    <section className="py-20 bg-background-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-white mb-6">
            CERTIFICATE
          </h2>
        </div>
        
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-tenor text-2xl font-bold text-accent-light mb-4">
            ML & DS
          </h3>
          <p className="font-inria text-gray-300 max-w-2xl mx-auto mb-8">
            This is a certificate to get from Google for 
            Python Machine learning and Data Science with a
            Machine learning Python language for various
            new applications. I have a passion for machine learning
            applications from training dataset.
          </p>
        </div>
        
        {/* Certificate Display */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-gradient-accent border-0 shadow-accent mx-auto max-w-4xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Left Certificate */}
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="aspect-[3/4] bg-gradient-warm rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent-primary rounded-lg mx-auto mb-4"></div>
                      <div className="text-xs text-text-primary">CERTIFICATE</div>
                      <div className="text-xs text-text-primary">OF COMPLETION</div>
                    </div>
                  </div>
                </div>
                
                {/* Center Main Certificate */}
                <div className="bg-white rounded-lg p-6 shadow-accent transform scale-110">
                  <div className="aspect-[3/4] bg-gradient-warm rounded-lg flex flex-col items-center justify-center p-6">
                    <div className="w-16 h-16 bg-accent-primary rounded-lg mb-4"></div>
                    <div className="text-center">
                      <div className="font-tenor text-sm font-bold text-text-darker mb-2">
                        CERTIFICATE
                      </div>
                      <div className="font-tenor text-xs text-text-darker mb-4">
                        OF COMPLETION
                      </div>
                      <div className="font-inria text-xs text-text-primary">
                        Mayank Mishra B.r
                      </div>
                      <div className="font-inria text-xs text-text-primary">
                        Has successfully completed course of machine
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Certificate */}
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="aspect-[3/4] bg-gradient-warm rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent-primary rounded-lg mx-auto mb-4"></div>
                      <div className="text-xs text-text-primary">CERTIFICATE</div>
                      <div className="text-xs text-text-primary">OF COMPLETION</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="w-3 h-3 bg-accent-light rounded-full"></button>
          <button className="w-3 h-3 bg-accent-light/50 rounded-full"></button>
          <button className="w-3 h-3 bg-accent-light/50 rounded-full"></button>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="font-inter text-accent-light border border-accent-light px-8 py-3 rounded-lg hover:bg-accent-light hover:text-background-dark transition-all duration-300">
            View More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;