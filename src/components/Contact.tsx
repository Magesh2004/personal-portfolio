import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-background-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-text-darker mb-8">
              Contact Information
            </h2>
            
            <Card className="bg-background-dark text-white border-0 shadow-accent">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <div className="font-inter text-accent-light text-sm">Email</div>
                      <div className="font-inria">developer@example.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <div className="font-inter text-accent-light text-sm">Phone</div>
                      <div className="font-inria">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <div className="font-inter text-accent-light text-sm">Location</div>
                      <div className="font-inria">Hyderabad, Telangana</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input 
                        placeholder="Your name"
                        className="border-border-light focus:border-accent-primary focus:ring-accent-primary/20"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border-light focus:border-accent-primary focus:ring-accent-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project inquiry"
                      className="border-border-light focus:border-accent-primary focus:ring-accent-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-border-light focus:border-accent-primary focus:ring-accent-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent-primary hover:bg-accent-dark text-white font-inter py-3 rounded-lg transition-all duration-300 hover:shadow-accent"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-border-light">
          <p className="font-inter text-text-primary">
            Copyright All right reserved
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
            <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer">
              <span className="w-5 h-5 bg-accent-primary rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;