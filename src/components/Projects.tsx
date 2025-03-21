import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ number, title, subtitle, description, isVisible }) => {
  return (
    <div 
      className={`border border-border rounded-lg overflow-hidden hover:border-muted-foreground transition-all cursor-pointer card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${Number(number) * 100}ms` }}
    >
      <div className="p-6">
        <span className="text-muted-foreground block mb-4">{`• ${number.padStart(2, '0')}`}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h4 className="text-lg text-muted-foreground mb-4">{subtitle}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
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

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects-section" className="py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-xl mb-2">
          <span className="inline-block dot-separator">SIDE PROJECTS</span>
        </h2>
        
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            SOME OF MY RECENT<br />WORKPIECES
          </h1>
          <button 
            onClick={() => window.location.href = '/#/projects'} 
            className="hidden md:block text-foreground hover:text-highlight transition-colors"
          >
            See More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            number="01" 
            title="Ethical Webshop Clothing Store" 
            subtitle="Clothing Store"
            description="A webshop for ethical clothes made in my first Laravel project"
            isVisible={isVisible}
          />
          
          <ProjectCard 
            number="02" 
            title="Fitness App Design & Mockup" 
            subtitle="Mockup"
            description="Fitness app mockup for an app design project in Figma"
            isVisible={isVisible}
          />
          
          <ProjectCard 
            number="03" 
            title="Animated Interactive Webpage" 
            subtitle="Webpage"
            description="A webpage designed with lots of animations and illustrations"
            isVisible={isVisible}
          />
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => window.location.href = '/#/projects'} 
            className="text-foreground hover:text-highlight transition-colors"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
