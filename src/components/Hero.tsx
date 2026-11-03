
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-10 px-6 md:pt-36 md:pb-16 md:px-10 lg:min-h-screen lg:px-16 flex flex-col lg:flex-row lg:items-center relative overflow-hidden">
      <div className="absolute right-[-12rem] top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute left-[-10rem] bottom-24 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" />
      <div className="lg:w-1/2 animate-slide-in-left">
        <div className="mb-8">
          <h2 className="text-xl font-normal mb-2 text-muted-foreground">
            <span className="inline-block dot-separator">WELCOME TO MY</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-2 text-foreground">PORTFOLIO!</h1>
          <p className="text-xl text-accent font-semibold">Creative Developer & Designer</p>
        </div>
        
        <Button asChild className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors mt-4 flex items-center gap-2 px-6 w-fit group rounded-md shadow-xl shadow-foreground/10">
          <a href="./Portfolio/cv.pdf" download="cv.pdf">
            <span className="relative w-4 h-4">
              <FileText className="h-4 w-4 absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2" />
              <Download className="h-4 w-4 absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
            </span>
            My Resume
          </a>
        </Button>
      </div>
      
      <div className="lg:w-1/2 mt-10 lg:mt-0 animate-slide-in-right">
        <div className="relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight">
            CRAFTING DIGITAL <br /> PROJECTS
          </h1>
          <div className="mt-5 text-sm md:text-base font-medium text-muted-foreground">
            <p className="mb-1 inline-block">
              🎓 4th Year Student Software Developer At{" "}
              <a
                href="https://www.yonder.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/yonder-link relative inline-block font-black text-accent"
              >
                Yonder
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover/yonder-link:scale-x-100" />
              </a>
              , Fulltime Team Member at{" "}
              <a
                href="https://www.mind-labs.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hero-link relative inline-block bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 bg-clip-text font-black text-transparent"
              >
                Mindlabs
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 transition-transform duration-300 group-hover/hero-link:scale-x-100" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
