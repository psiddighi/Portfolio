import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  tone?: "light" | "dark";
  imageZoom?: "cover" | "contain";
  isVisible: boolean;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, slug, tone = "light", imageZoom = "cover", isVisible, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkTone = tone === "dark";

  return (
    <article
      className={`group relative aspect-square overflow-hidden rounded-lg border border-border/80 bg-card/60 shadow-[0_24px_80px_rgba(57,44,28,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/70 hover:bg-card/80 hover:shadow-[0_32px_110px_rgba(57,44,28,0.14)] ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:saturate-110 ${
          imageZoom === "contain"
            ? "object-contain object-top p-3 group-hover:scale-[1.015]"
            : "object-cover group-hover:scale-[1.045]"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-25" />

      <span className="absolute left-4 top-4 z-20 rounded-md border border-white/50 bg-background/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-foreground shadow-sm backdrop-blur-xl">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`absolute inset-x-0 bottom-0 z-20 flex h-[64%] flex-col overflow-hidden border-t p-4 shadow-[0_-18px_70px_rgba(57,44,28,0.14)] backdrop-blur-2xl transition-[height,background-color] duration-500 ease-out group-hover:h-[88%] ${
          isDarkTone
            ? "border-white/20 bg-neutral-950/82 text-white group-hover:bg-neutral-950/92"
            : "border-white/45 bg-background/92 text-foreground group-hover:bg-background/98"
        }`}
      >
        <div className="mb-2 flex shrink-0 flex-wrap gap-1.5 overflow-hidden">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-md border px-2 py-0.5 text-[0.64rem] font-semibold backdrop-blur-xl transition-colors duration-300 ${
                isDarkTone
                  ? "border-white/25 bg-white/8 text-white/72 group-hover:border-accent/45 group-hover:text-white"
                  : "border-border/80 bg-background/55 text-muted-foreground group-hover:border-accent/30 group-hover:text-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <h3 className="mb-1.5 line-clamp-1 text-[1.35rem] font-black leading-[0.92] tracking-[-0.06em] transition-all duration-300 group-hover:line-clamp-2 md:text-[1.55rem]">
            {title}
          </h3>
          <p className={`line-clamp-1 text-xs leading-snug transition-all duration-300 group-hover:line-clamp-none md:text-[0.82rem] ${isDarkTone ? "text-white/72" : "text-muted-foreground"}`}>
            {description}
          </p>
        </div>

        <div className={`mt-3 flex shrink-0 items-center justify-between border-t pt-3 ${isDarkTone ? "border-white/20" : "border-border/70"}`}>
          <span className={`text-[0.68rem] font-black uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-accent ${isDarkTone ? "text-white/62" : "text-muted-foreground"}`}>
            View project
          </span>
          <span
            className={`grid h-9 w-9 place-items-center rounded-md border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground ${
              isDarkTone
                ? "border-white/25 bg-white/10 text-white"
                : "border-border bg-background/55 text-foreground"
            }`}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
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
    </article>
  );
};

const ComingSoonCard = ({ isVisible, index }: { isVisible: boolean; index: number }) => (
  <article
    className={`group relative grid aspect-square place-items-center overflow-hidden rounded-lg border border-border/80 bg-white shadow-[0_24px_80px_rgba(57,44,28,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_32px_110px_rgba(57,44,28,0.14)] ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="px-6 text-center">
      <h3 className="text-3xl font-black lowercase leading-none tracking-[-0.055em] text-foreground md:text-4xl">
        coming soon... 👀
      </h3>
      <p className="mt-3 text-sm font-semibold text-muted-foreground">
        In development... 🛠️
      </p>
    </div>
  </article>
);

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
      size: "large" as const,
      slug: "infomedics",
      tone: "dark" as const,
    },
    {
      title: "TijdelijkZakelijkInternet",
      description: "A wordpress website I made during my internship for a internet provider made with Wordpress and Elementor",
      image: "./Portfolio/TZI.png",
      tags: ["Wordpress", "Elementor", "Figma"],
      size: "small" as const,
      slug: "tijdelijk-zakelijk-internet",
      tone: "light" as const,
    },
    {
      title: "Garry Panzu",
      description: "Portfolio site for a client to showcase his cooking abilities and experience as a chef",
      image: "./Portfolio/Screenshot%202025-12-17%20at%2009.50.06.png",
      tags: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
      size: "medium" as const,
      slug: "garry-panzu",
      tone: "light" as const,
    },
    {
      title: "Griff Duarte",
      description: "WordPress website for a Portuguese law firm built with ACF, WordPress and custom styling",
      image: "./Portfolio/Screenshot%202025-12-16%20at%2015.39.43.png",
      tags: ["Wordpress", "ACF", "PHP", "CSS", "JavaScript", "Bootstrap"],
      size: "small" as const,
      slug: "griff-duarte",
      tone: "dark" as const,
    },
    {
      title: "VTHoflaan",
      description: "A simple static website for an allotment garden association to display information and news rubrics",
      image: "./Portfolio/Tuin.png",
      tags: ["HTML", "CSS", "JavaScript"],
      size: "large" as const,
      slug: "vthoflaan",
      tone: "dark" as const,
    },
    {
      title: "ZZP Kompas",
      description: "A digital solution for entrepreneurs who want to gain insight or assistance about their financial situation ",
      image: "./Portfolio/Screenshot%202025-12-17%20at%2010.58.40.png",
      tags: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
      size: "medium" as const,
      slug: "zzp-kompas",
      tone: "dark" as const,
    },
    {
      title: "Lofi Spin",
      description: "Webpage/webapp for playing lofi music, with a visually pleasing interface",
      image: "./Portfolio/lofi-spin-1.png",
      tags: ["React", "Mongo", "Express", "VueJS", "NextJS", "Material UI", "shadcn/ui"],
      size: "small" as const,
      slug: "lofi-spin",
      tone: "dark" as const,
    },
    {
      title: "Travelbugdesign",
      description: "Custom Wordpress theme for blogging.",
      image: "./Portfolio/TravelBugDesing-Icon-Transparent1x.webp",
      tags: ["WordPress", "PHP", "Barba.js", "LenisJS", "React"],
      size: "small" as const,
      slug: "new-project",
      tone: "light" as const,
    },
    {
      title: "AI Language Coach",
      description: "AI-powered learning platform for NT2 students with realistic conversations, feedback, XP, levels, streaks and a skill map.",
      image: "./Portfolio/Screenshot%202026-11-03%20at%2015-15-37%20AI%20Taalcoach%20%C2%B7%20Op%20jouw%20tempo.png",
      tags: ["React", "Next.js", "Tailwind CSS", "OpenAI API"],
      size: "medium" as const,
      slug: "ai-language-coach",
      tone: "light" as const,
      imageZoom: "contain" as const,
    },
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
            
            <div id="projects-grid" className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, index) => {
                return (
                  <div key={index}>
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      tone={project.tone}
                      imageZoom={project.imageZoom}
                      isVisible={isVisible}
                      index={index}
                      slug={project.slug}
                    />
                  </div>
                );
              })}
              <ComingSoonCard isVisible={isVisible} index={projects.length} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
