import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  size?: "small" | "medium" | "large";
  isVisible: boolean;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, link, size = "medium", isVisible, index }: ProjectCardProps) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 h-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10 transition-opacity duration-300 group-hover:opacity-90 group-hover:bg-gradient-to-b group-hover:from-background/60 group-hover:via-background/70 group-hover:to-background/90"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
      {link && (
        <a 
          href={link} 
          className="absolute inset-0 z-30"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
        ></a>
      )}
    </div>
  );
};

const ProjectsPage = () => {
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

    const element = document.getElementById("projects-grid");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Infomedics",
      description: "Wordpress website for a medical clinic made with Elementor Pro, Figma and various plugins",
      image: "Infomedics.png",
      tags: ["Wordpress", "Elementor", "Figma"],
      size: "medium" as const,
    },
    {
      title: "TijdelijkZakelijkInternet",
      description: "A wordpress website for a internet provider made with Wordpress and Elementor",
      image: "TZI.png",
      tags: ["Wordpress", "Elementor", "Figma"],
      size: "small" as const,
    },
    {
      title: "Ethical Clothing webshop",
      description: "My first Laravel project for a webshop that sells ethical clothing",
      image: "ethical clothes.png",
      tags: ["Laravel", "PHP", "MySQL"],
      size: "large" as const,
    },
    {
      title: "Democratic Movie Night",
      description: "A web application for democratic movie nights where you can vote for what movie to watch",
      image: "Democratische Bioscoop.png",
      tags: ["React", "TypeScript", "UI/UX"],
      size: "small" as const,
    },
    {
      title: "Figma App Design",
      description: "A Figma app design for a festival assignment",
      image: "Figma festival app.png",
      tags: ["Figma"],
      size: "small" as const,
    },
    {
      title: "VTHoflaan",
      description: "A simple static website for a garden association to display information",
      image: "Tuin.png",
      tags: ["HTML", "CSS", "JavaScript"],
      size: "medium" as const,
    },
    {
      title: "Craft App",
      description: "A webapp for a campagne against food waste (school project)",
      image: "projectweek.png",
      tags: ["HTML", "CSS", "JavaScript"],
      size: "small" as const,
    },
    {
      title: "Furniture webstore",
      description: "First fully functional MERN full-stack web application for a furniture webshop school project",
      image: "Woonwinkel.png",
      tags: ["React", "TypeScript", "MongoDB & ExpressJS", "Node.js"],
      size: "medium" as const,
    },
    
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My <span className="text-accent">Projects</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              A collection of my work across various domains including web development, design, and software engineering.
            </p>
            
            <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
              {projects.map((project, index) => {
                // Define custom grid positions for specific projects to create a bento layout
                let gridClass = "";
                
                // First row
                if (index === 0) gridClass = "col-span-6 row-span-2 md:col-span-4 lg:col-span-6"; // Large feature project
                else if (index === 1) gridClass = "col-span-6 md:col-span-2 lg:col-span-3"; // Small project
                else if (index === 2) gridClass = "col-span-6 md:col-span-3 lg:col-span-3"; // Medium project
                
                // Second row
                else if (index === 3) gridClass = "col-span-6 md:col-span-3 lg:col-span-3"; // Small project
                else if (index === 4) gridClass = "col-span-6 row-span-2 md:col-span-3 lg:col-span-5"; // Medium project
                else if (index === 5) gridClass = "col-span-6 md:col-span-3 lg:col-span-4"; // Medium project
                
                // Third row
                else if (index === 6) gridClass = "col-span-6 md:col-span-2 lg:col-span-3"; // Small project
                else if (index === 7) gridClass = "col-span-6 md:col-span-2 lg:col-span-3"; // Small project
                else if (index === 8) gridClass = "col-span-6 md:col-span-2 lg:col-span-6"; // Medium project
                
                return (
                  <div key={index} className={`${gridClass} ${project.size === "large" ? "row-span-2" : project.size === "small" ? "" : "row-span-1"}`}>
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      size={project.size}
                      isVisible={isVisible}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;