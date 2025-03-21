import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiLaravel, SiWordpress, SiMongodb, SiWebpack, SiJquery, SiSass, SiNpm, SiGit } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaApple, FaNodeJs } from "react-icons/fa";
import { useEffect, useRef } from "react";

const TechStackCarousel = () => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // Define the tech icons for reusability
  const firstRowIcons = [
    { Icon: SiHtml5, name: "HTML", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS", color: "#1572B6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiPhp, name: "PHP", color: "#777BB4" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
  ];

  const secondRowIcons = [
    { Icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiWordpress, name: "WordPress", color: "#21759B" },
    { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
    { Icon: SiSass, name: "Sass", color: "#CC6699" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { Icon: SiNpm, name: "NPM", color: "#CB3837" },
    { Icon: SiGit, name: "Git", color: "#F05032" },
  ];

  // Function to render a tech icon
  const renderTechIcon = ({ Icon, name, color }: { Icon: any; name: string; color: string }) => (
    <div className="flex flex-col items-center" key={name}>
      <Icon className={`text-5xl filter grayscale hover:grayscale-0 transition-all duration-300 text-[${color}]`} />
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );

  return (
    <div className="mb-16 overflow-hidden">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold uppercase mr-4">Tech Stack</h2>
        <div className="flex-grow border-t border-white opacity-50"></div>
      </div>
      
      {/* First row - sliding left */}
      <div className="relative mb-8 overflow-hidden">
        <div 
          ref={firstRowRef}
          className="flex space-x-16 animate-slide-left"
          style={{ width: "fit-content" }}
        >
          {/* First set of icons */}
          <div className="flex space-x-16">
            {firstRowIcons.map(renderTechIcon)}
          </div>
          
          {/* Duplicate for infinite scroll effect */}
          <div className="flex space-x-16">
            {firstRowIcons.map(renderTechIcon)}
          </div>
          
          {/* Add a third set to ensure seamless looping */}
          <div className="flex space-x-16">
            {firstRowIcons.map(renderTechIcon)}
          </div>
        </div>
      </div>
      
      {/* Second row - sliding right */}
      <div className="relative overflow-hidden">
        <div 
          ref={secondRowRef}
          className="flex space-x-16 animate-slide-right"
          style={{ width: "fit-content" }}
        >
          {/* First set of icons */}
          <div className="flex space-x-16">
            {secondRowIcons.map(renderTechIcon)}
          </div>
          
          {/* Duplicate for infinite scroll effect */}
          <div className="flex space-x-16">
            {secondRowIcons.map(renderTechIcon)}
          </div>
          
          {/* Add a third set to ensure seamless looping */}
          <div className="flex space-x-16">
            {secondRowIcons.map(renderTechIcon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;