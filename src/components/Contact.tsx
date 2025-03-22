
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-section" className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="uppercase text-xl mb-8 sm:mb-12 text-center sm:text-left">
          <span className="inline-block dot-separator">GET IN TOUCH</span>
        </h2>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="text-muted-foreground">
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        
        <div className={`text-center mb-8 sm:mb-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "100ms" }}>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-0 sm:mr-3 text-accent" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Have Any <span className="bg-white dark:bg-white text-black px-2 sm:px-3 py-1">Questions?</span></h2>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 sm:mt-8">
          <a href="mailto:zakelijkps@gmail.com">
            <Button 
              className={`bg-white hover:bg-yellow-400 dark:bg-white text-black dark:hover:bg-gray-400 transition-colors duration-300 shadow-lg ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}
              style={{ animationDelay: "300ms" }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
