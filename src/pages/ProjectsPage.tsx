import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  size?: "small" | "medium" | "large";
  isVisible: boolean;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, slug, size = "medium", isVisible, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
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
        <h3 className="text-xl font-bold mb-2 text-foreground title-drop-shadow">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
      <Link 
        to={`/projects/${slug}`} 
        className="absolute inset-0 z-30"
        aria-label={`View ${title} project`}
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition(navigate, `/projects/${slug}`, location.pathname);
        }}
      ></Link>
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
      description: "Wordpress website I made during my internship for a medical clinic made with Elementor Pro, Figma and various plugins",
      image: "./Portfolio/Infomedics.png",
      tags: ["Wordpress", "Elementor", "Figma"],
      size: "medium" as const,
      slug: "infomedics",
    },
    {
      title: "TijdelijkZakelijkInternet",
      description: "A wordpress website I made during my internship for a internet provider made with Wordpress and Elementor",
      image: "./Portfolio/TZI.png",
      tags: ["Wordpress", "Elementor", "Figma"],
      size: "small" as const,
      slug: "tijdelijk-zakelijk-internet",
    },
    {
      title: "Ethical Clothing webshop",
      description: "My first Laravel project for a webshop that sells ethical clothing with a fully functional MySQL database and PHP back-end",
      image: "./Portfolio/ethical clothes.png",
      tags: ["Laravel", "PHP", "MySQL"],
      size: "large" as const,
      slug: "ethical-clothing-webshop",
    },
    {
      title: "Democratic Movie Night",
      description: "A web application for democratic movie nights where you can vote for what movie to watch",
      image: "./Portfolio/Democratische Bioscoop.png",
      tags: ["React", "TypeScript","REST API", "UI/UX"],
      size: "small" as const,
      slug: "democratic-movie-night",
    },
    {
      title: "VTHoflaan",
      description: "A simple static website for an allotment garden association to display information and news rubrics",
      image: "./Portfolio/Tuin.png",
      tags: ["HTML", "CSS", "JavaScript"],
      size: "medium" as const,
      slug: "vthoflaan",
    },
    {
      title: "Furniture webstore",
      description: "First fully functional MERN full-stack web application for a furniture webshop school project",
      image: "./Portfolio/Woonwinkel.png",
      tags: ["React", "NextJS", "TypeScript", "MongoDB & ExpressJS", "Node.js"],
      size: "medium" as const,
      slug: "furniture-webstore",
    },
    {
      title: "Griff Duarte",
      description: "WordPress website for a Portuguese law firm built with ACF, WordPress and custom styling",
      image: "./Portfolio/Screenshot%202025-12-16%20at%2015.39.43.png",
      tags: ["Wordpress", "ACF", "PHP", "CSS", "JavaScript", "Bootstrap"],
      size: "small" as const,
      slug: "griff-duarte",
    },
        {
      title: "Garry Panzu",
      description: "Portfolio site for a client to showcase his cooking abilities and experience as a chef",
      image: "./Portfolio/Screenshot%202025-12-17%20at%2009.50.06.png",
      tags: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
      size: "medium" as const,
      slug: "garry-panzu",
    },
    {
      title: "ZZP Kompas",
      description: "A digital solution for entrepreneurs who want to gain insight or assistance about their financial situation ",
      image: "./Portfolio/Screenshot%202025-12-17%20at%2010.58.40.png",
      tags: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
      size: "medium" as const,
      slug: "zzp-kompas",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Top <span className="text-accent">Projects</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              A collection of my most recent and best works across various domains including web development and design. These are the works that I am currently the most proud of to showcase.
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
                else if (index === 8) gridClass = "col-span-6 md:col-span-2 lg:col-span-3"; // Small project
                
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
                      slug={project.slug}
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
