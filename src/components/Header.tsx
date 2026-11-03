import { Menu, Sun, Moon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

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

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigateWithTransition(navigate, path, location.pathname);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[80] border-b px-6 py-4 transition-all duration-500 md:px-10",
          "border-foreground/10 bg-background/55 text-foreground backdrop-blur-2xl",
          isScrolled && "bg-background/72 shadow-[0_18px_70px_rgba(57,44,28,0.08)]"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm font-black uppercase tracking-[0.28em] md:text-base"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("/");
            }}
          >
            Destrix
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-11 w-11 rounded-md border border-foreground/10 bg-white/25 transition-all duration-300 hover:bg-white/55"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className={cn("fullscreen-menu", isMenuOpen && "fullscreen-menu--open")} aria-hidden={!isMenuOpen}>
        <div className="fullscreen-menu__noise" />
        <div className="fullscreen-menu__orb fullscreen-menu__orb--one" />
        <div className="fullscreen-menu__orb fullscreen-menu__orb--two" />
        <nav className="fullscreen-menu__nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn("fullscreen-menu__link", location.pathname === item.path && "is-active")}
              style={{ animationDelay: isMenuOpen ? `${170 + index * 120}ms` : "0ms" }}
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(item.path);
              }}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="fullscreen-menu__footer">
          <span>Creative Developer & Designer</span>
          <a href="mailto:zakelijkps@gmail.com">zakelijkps@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Header;
