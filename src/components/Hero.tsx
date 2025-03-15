
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
        
        <Button className="bg-white text-black hover:bg-accent/90 transition-colors mt-4 flex items-center gap-2">
          <FileText className="h-4 w-4" />
          My Resume
        </Button>
      </div>
      
      <div className="lg:w-1/2 mt-10 lg:mt-0 animate-slide-in-right">
        <div className="relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight">
            CRAFTING DIGITAL <br /> PROJECTS
          </h1>
          <div className="mt-2 text-sm md:text-base font-medium text-gray-400">
            <p className="mb-1 inline-block">🎓 3rd Year Student Software Developer At</p>
            <span className="inline-block"> </span>
            <a href="#" className="text-orange-500 hover:underline inline-block">Yonder</a>
            <p className="mb-1 inline-block">, (former) Intern At</p>
            <span className="inline-block"> </span>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:underline inline-block">Allround Web</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
