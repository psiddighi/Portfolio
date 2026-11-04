import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ number, title, subtitle, description, isVisible, url }) => {
  return (
    <div 
      className={`group relative border border-border rounded-md overflow-hidden hover:border-accent transition-all cursor-pointer card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${Number(number) * 100}ms` }}
    >
      <div className="p-6">
        <span className="text-accent block mb-4 font-bold tracking-[0.28em]">{`• ${number.padStart(2, '0')}`}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h4 className="text-lg text-muted-foreground mb-4">{subtitle}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <span className="pointer-events-none absolute bottom-4 right-4 text-foreground opacity-0 transition-all duration-300 ease-out -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open ${title} in a new tab`}
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <section id="projects-section" className="py-16 px-6 md:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-xl mb-2 flex items-center gap-4">
          <span className="inline-block dot-separator shrink-0">SIDE PROJECTS</span>
          <span className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" aria-hidden="true" />
        </h2>
        
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            SOME OF MY RECENT<br />WORKPIECES
          </h1>
          <button 
            onClick={() => navigateWithTransition(navigate, "/projects", location.pathname)}
            className="hidden md:block rounded-md border border-border bg-white/35 px-5 py-3 text-foreground backdrop-blur-xl hover:border-accent hover:text-accent transition-colors"
          >
            See More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            number="01" 
            title="Griff Duarte" 
            subtitle="Law firm website"
            description="A fully custom built WordPress website for a law firm"
            isVisible={isVisible}
            url="https://duarte.unique-development.nl/"
          />
          
          <ProjectCard 
            number="02" 
            title="Travelbugdesign" 
            subtitle="Custom WordPress theme"
            description="Custom Wordpress theme for blogging."
            isVisible={isVisible}
            url="https://travelbugdesign.com/"
          />
          
          <ProjectCard 
            number="03" 
            title="AI Language Coach"
            subtitle="AI learning platform"
            description="An AI-powered learning platform for NT2 students with conversations, feedback, XP, streaks and a skill map."
            isVisible={isVisible}
            url="https://ai-taalcoach-demo.vercel.app/"
          />
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => navigateWithTransition(navigate, "/projects", location.pathname)}
            className="rounded-md border border-border bg-white/35 px-5 py-3 text-foreground backdrop-blur-xl hover:border-accent hover:text-accent transition-colors"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
