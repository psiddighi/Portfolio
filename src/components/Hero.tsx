
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2 animate-slide-in-left">
        <div className="mb-8">
          <h2 className="text-xl font-normal mb-2">
            <span className="inline-block dot-separator">WELCOME TO MY</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-2 text-gray-400">PORTFOLIO!</h1>
          <p className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Creative Developer & Designer</p>
        </div>
        
        <Button asChild className="bg-white text-black hover:bg-accent/90 transition-colors mt-4 flex items-center gap-2 px-6 w-fit group">
          <a href="/Resume Parsa Siddighi.pdf" download>
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
          <div className="mt-2 text-sm md:text-base font-medium text-gray-400">
            <p className="mb-1 inline-block">🎓 4th Year Student Software Developer At</p>
            <span className="inline-block">&nbsp;</span>
            <a href="https://www.yonder.nl/" target="_blank" className="text-orange-500 hover:underline inline-block">Yonder</a>
            <p className="mb-1 inline-block">, Intern At</p>
            <span className="inline-block">&nbsp;</span>
            <a href="https://unique-design.nl/" target="_blank" className="text-[#C3AE94] hover:underline inline-block">Unique Design.</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
