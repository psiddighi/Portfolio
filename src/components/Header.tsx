import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 flex justify-between items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3 animate-fade-in">
        <a href="#" className="text-xl font-semibold">P.SIDDIGHI</a>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme} 
          className="rounded-full transition-all duration-300 hover:bg-accent/20"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <nav className={cn(
        "fixed md:static top-16 right-0 bg-background/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none w-full md:w-auto h-auto p-6 md:p-0 transition-all duration-300 ease-in-out z-50",
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
      )}>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <li className="animate-slide-in-top md:animate-slide-in-left" style={{ animationDelay: "100ms" }}>
            <a 
              href="/about" 
              className={`hover:text-highlight transition-colors link-underline ${location.pathname === '/about' ? 'text-highlight' : ''}`} 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate('/about');
              }} 
              style={{ pointerEvents: 'auto' }}
            >
              About
            </a>
          </li>
          <li className="animate-slide-in-top md:animate-slide-in-left" style={{ animationDelay: "200ms" }}>
            <a 
              href="/blog" 
              className={`hover:text-highlight transition-colors link-underline ${location.pathname === '/blog' ? 'text-highlight' : ''}`} 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate('/blog');
              }} 
              style={{ pointerEvents: 'auto' }}
            >
              Blog
            </a>
          </li>
          <li className="animate-slide-in-top md:animate-slide-in-left" style={{ animationDelay: "300ms" }}>
            <a 
              href="/projects" 
              className={`hover:text-highlight transition-colors link-underline ${location.pathname === '/projects' ? 'text-highlight' : ''}`} 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate('/projects');
              }} 
              style={{ pointerEvents: 'auto' }}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
