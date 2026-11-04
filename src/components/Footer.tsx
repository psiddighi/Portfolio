
import { Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/psiddighi",
    Icon: Github,
    className: "social-link--github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parsa-siddighi/",
    Icon: Linkedin,
    className: "social-link--linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/013.ps/",
    Icon: Instagram,
    className: "social-link--instagram",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-4 text-center md:grid-cols-3 md:text-left">
          <p className="text-muted-foreground md:justify-self-start">
            2026©Parsa Siddighi
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:col-start-3 md:justify-self-end">
            {socialLinks.map(({ label, href, Icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`social-link ${className}`}
                aria-label={label}
              >
                <span className="social-link__icon-wrap" aria-hidden="true">
                  <Icon className="social-link__icon" />
                </span>
                <span className="social-link__label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
