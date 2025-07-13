import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-background" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in" data-aos="fade-right">
            <h2 className="font-gayathri text-4xl md:text-5xl font-bold text-text-darker mb-2">
              Get In <span className="text-accent-primary underline decoration-accent-light/60 decoration-4 underline-offset-4">Touch</span>
            </h2>
            <p className="text-text-primary text-lg mb-8 max-w-xl">Ready to bring your ideas to life? Let’s discuss your next project and create something amazing together.</p>
            
            <Card className="bg-white text-text-darker border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-light/40 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M22 6.5l-10 7L2 6.5"/></svg>
                    </div>
                    <div>
                      <div className="font-inter text-accent-primary text-sm">Email</div>
                      <div className="font-inria">developer@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-light/40 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M8 3.13a4 4 0 0 0 0 7.75"/><line x1="12" y1="17" x2="12" y2="17"/></svg>
                    </div>
                    <div>
                      <div className="font-inter text-accent-primary text-sm">Phone</div>
                      <div className="font-inria">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent-light/40 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 12.02l1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                    </div>
                    <div>
                      <div className="font-inter text-accent-primary text-sm">Location</div>
                      <div className="font-inria">Hyderabad, Telangana</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <div className="font-inter text-text-darker font-semibold mb-2">Follow Me</div>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-light/40 text-accent-primary hover:shadow-[0_0_12px_2px_rgba(160,198,183,0.5)] transition-all duration-300 hover:scale-110" data-aos="zoom-in">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-light/40 text-accent-primary hover:shadow-[0_0_12px_2px_rgba(160,198,183,0.5)] transition-all duration-300 hover:scale-110" data-aos="zoom-in">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/><path d="M2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-light/40 text-accent-primary hover:shadow-[0_0_12px_2px_rgba(160,198,183,0.5)] transition-all duration-300 hover:scale-110" data-aos="zoom-in">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11.36c-2.5 0-4.52 2.02-4.52 4.51 0 .35.04.7.11 1.03C7.69 5.7 4.07 3.88 1.64 1.16c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.64A4.48 4.48 0 0 1 .96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.03 9.03 0 0 1-2.6.71z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }} data-aos="fade-left">
            <Card className="bg-white border-0 shadow-soft hover:shadow-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input 
                        placeholder="Your name"
                        className="border-border-light focus:border-accent-primary focus:ring-accent-light/40"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border-light focus:border-accent-primary focus:ring-accent-light/40"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project inquiry"
                      className="border-border-light focus:border-accent-primary focus:ring-accent-light/40"
                    />
                  </div>
                  
                  <div>
                    <label className="font-inter text-text-primary text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-border-light focus:border-accent-primary focus:ring-accent-light/40 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent-light/80 hover:bg-accent-light text-accent-dark font-inter py-3 rounded-lg transition-all duration-300 hover:shadow-accent hover:scale-105"
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                      Send Message
                    </span>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;