
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            2025©Parsa Siddighi
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/psiddighi" target = "_blank" rel = "noreferrer"
              className="bg-muted p-2 rounded-md hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/parsa-siddighi/" target = "_blank" rel = "noreferrer"
              className="bg-muted p-2 rounded-md hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/psiddighi/" target = "_blank" rel = "noreferrer" 
              className="bg-muted p-2 rounded-md hover:bg-muted/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
