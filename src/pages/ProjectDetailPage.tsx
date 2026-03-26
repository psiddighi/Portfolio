import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { navigateWithTransition } from "@/lib/navigation";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectDetailData {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
}

const PROJECT_DETAILS: Record<string, ProjectDetailData> = {
  "infomedics": {
    title: "Infomedics",
    description: "WordPress site built during internship for a medical clinic, using Elementor Pro and Figma.",
    tech: ["WordPress", "Elementor Pro", "Figma"],
    liveUrl: "https://www.frompaidtopartner.nl/",
    repoUrl: "#",
    images: ["./Portfolio/Infomedics.png"]
  },
  "tijdelijk-zakelijk-internet": {
    title: "Tijdelijk Zakelijk Internet",
    description: "WordPress site for an internet provider built during internship.",
    tech: ["WordPress", "Elementor", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["./Portfolio/TZI.png"]
  },
  "ethical-clothing-webshop": {
    title: "Ethical Clothing Webshop",
    description: "Laravel webshop with MySQL backend and PHP controllers.",
    tech: ["Laravel", "PHP", "MySQL"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "democratic-movie-night": {
    title: "Democratic Movie Night",
    description: "Web app to vote for movies democratically.",
    tech: ["React", "TypeScript", "REST API", "UI/UX"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  "figma-app-design": {
    title: "Figma App Design",
    description: "App UI design for festival assignment.",
    tech: ["Figma"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  "vthoflaan": {
    title: "VTHoflaan",
    description: "Static website for an allotment garden association.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vthoflaan.nl/",
    repoUrl: "https://github.com/psiddighi/vthoflaan",
    images: ["./Portfolio/Tuin.png", "./Portfolio/Screenshot%202025-12-17%20at%2010.09.00.png", "./Portfolio/Screenshot%202025-12-17%20at%2010.11.11.png"]
  },
  "craft-app": {
    title: "Craft App",
    description: "Web app for a campaign against food waste.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  "furniture-webstore": {
    title: "Furniture Webstore",
    description: "MERN stack webstore project.",
    tech: ["React", "NextJS", "TypeScript", "MongoDB", "Express", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "griff-duarte": {
    title: "Griff Duarte",
    description: "WordPress website for a Portuguese law firm, with a refined UI using ACF custom components and a custom WordPress theme.",
    tech: ["WordPress", "ACF", "PHP", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://duarte.unique-development.nl/",
    repoUrl: "https://github.com/Unique-Design-B-V/griff-duarte",
    images: ["./Portfolio/Screenshot%202025-12-16%20at%2015.39.43.png", "./Portfolio/Screenshot%202025-12-16%20at%2015.51.38.png","./Portfolio/Screenshot%202025-12-16%20at%2015.58.04.png"]
  },
  "garry-panzu": {
    title: "Garry Panzu",
    description: "Portfolio site for a client to showcase his cooking abilities and experience as a chef.",
    tech: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
    liveUrl: "https://garrypanzuu.vercel.app/",
    repoUrl: "https://github.com/psiddighi/garrypanzu",
    images: ["./Portfolio/Screenshot%202025-12-17%20at%2009.50.06.png", "./Portfolio/Screenshot%202025-12-17%20at%2009.50.29.png", "./Portfolio/Screenshot%202025-12-17%20at%2009.50.48.png"]
  },
  "zzp-kompas": {
    title: "ZZP Kompas",
    description: "A digital solution for entrepreneurs seeking insight into or assistance with their financial situation. This project was part of the Yonder Challenge Week, a week-long event where legal students and developers collaborated to develop solutions for the challenges of three real-world companies.",
    tech: ["React", "NextJS", "TypeScript", "JavaScript", "Bootstrap"],
    liveUrl: "https://zzp-kompasso.vercel.app/",
    repoUrl: "https://github.com/psiddighi/zzp-kompasso",
    images: ["./Portfolio/Screenshot%202025-12-17%20at%2010.59.26.png", "./Portfolio/Screenshot%202025-12-17%20at%2010.58.53.png", "./Portfolio/Screenshot%202025-12-17%20at%2010.59.08.png"]
  },
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const data = slug ? PROJECT_DETAILS[slug] : undefined;

  useEffect(() => {
    if (lightboxOpen && carouselApi) {
      carouselApi.scrollTo(activeIndex);
    }
  }, [lightboxOpen, activeIndex, carouselApi]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-28 px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <p className="text-muted-foreground mb-6">We couldn’t find details for this project.</p>
            <Link to="/projects" className="text-accent underline" onClick={(e) => {
              e.preventDefault();
              navigateWithTransition(navigate, "/projects", location.pathname);
            }}>Back to Projects</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
            <Link to="/projects" className="text-muted-foreground hover:text-highlight transition-colors" onClick={(e) => {
              e.preventDefault();
              navigateWithTransition(navigate, "/projects", location.pathname);
            }}>Back to Projects</Link>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{data.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {data.tech.map((t, i) => (
              <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{t}</span>
            ))}
          </div>

          <div className="flex gap-4 mb-10">
            <a href={data.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded hover:opacity-90 transition-opacity">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a href={data.repoUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded hover:bg-muted transition-colors">
              <Github className="w-4 h-4" /> GitHub Repo
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.images.map((src, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden border border-border bg-card cursor-zoom-in"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveIndex(i);
                  setLightboxOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(i);
                    setLightboxOpen(true);
                  }
                }}
              >
                <img
                  src={src}
                  alt={`${data.title} screenshot ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          <Dialog
            open={lightboxOpen}
            onOpenChange={(open) => {
              setLightboxOpen(open);
            }}
          >
            <DialogOverlay />
            <DialogContent className="max-w-6xl w-[92vw] p-0 bg-transparent border-none shadow-none">
              <Carousel
                opts={{ startIndex: activeIndex }}
                setApi={(api) => {
                  setCarouselApi(api);
                }}
                className="w-full"
              >
                <CarouselContent>
                  {data.images.map((src, idx) => (
                    <CarouselItem key={idx} className="flex items-center justify-center">
                      <img
                        src={src}
                        alt={`${data.title} screenshot ${idx + 1}`}
                        className="max-h-[80vh] w-auto object-contain"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm" />
              </Carousel>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
