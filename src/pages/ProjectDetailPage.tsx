import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { navigateWithTransition } from "@/lib/navigation";

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
    liveUrl: "#",
    repoUrl: "#",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  "tijdelijk-zakelijk-internet": {
    title: "Tijdelijk Zakelijk Internet",
    description: "WordPress site for an internet provider built during internship.",
    tech: ["WordPress", "Elementor", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg", "/placeholder.svg"]
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
    liveUrl: "#",
    repoUrl: "#",
    images: ["/placeholder.svg"]
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
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const data = slug ? PROJECT_DETAILS[slug] : undefined;

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
              <div key={i} className="rounded-lg overflow-hidden border border-border bg-card">
                <img src={src} alt={`${data.title} screenshot ${i + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;