import { useState, useEffect } from "react";
import { Laptop, Paintbrush, Camera } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 mb-12 relative overflow-hidden rounded-lg">
        <img 
          src="IMG_2137.JPG" 
          alt="Technology Banner" 
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-background/25 flex items-center justify-center">
        </div>
      </div>
      {/* Circuit board background pattern - SVG overlay */}
      <div className="absolute top-0 left-0 w-full h-40 opacity-20 bg-gradient-to-b from-muted to-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400" className="text-gray-600">
          <path d="M0,0 L800,0 L800,400 L0,400 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M50,50 L750,50 M50,150 L750,150 M50,250 L750,250 M50,350 L750,350" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10"/>
          <path d="M50,50 L50,350 M150,50 L150,350 M250,50 L250,350 M350,50 L350,350 M450,50 L450,350 M550,50 L550,350 M650,50 L650,350 M750,50 L750,350" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10"/>
          <circle cx="150" cy="150" r="10" fill="none" stroke="currentColor"/>
          <circle cx="250" cy="250" r="15" fill="none" stroke="currentColor"/>
          <circle cx="350" cy="150" r="10" fill="none" stroke="currentColor"/>
          <circle cx="450" cy="250" r="15" fill="none" stroke="currentColor"/>
          <circle cx="550" cy="150" r="10" fill="none" stroke="currentColor"/>
          <circle cx="650" cy="250" r="15" fill="none" stroke="currentColor"/>
          <path d="M100,100 L200,100 L200,200 L100,200 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M300,200 L400,200 L400,300 L300,300 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M500,100 L600,100 L600,200 L500,200 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M700,200 L750,200 L750,300 L700,300 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="uppercase text-xl mb-12 text-center">
          <span className="inline-block border-b-2 border-foreground pb-2">ABOUT ME.</span>
        </h2>
        

        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Study & Skills */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="mb-8">
              <p className="text-xl mb-2">
                <span className="inline-block mr-2">👋</span> HI THERE, I STUDY
              </p>
              <h3 className="text-4xl font-bold mb-2">SOFTWARE<br />DEVELOPMENT</h3>
              <p className="text-xl mb-6">at <span className="text-yellow-400">Yonder</span></p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">SKILLSET</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <Laptop className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Web Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <Paintbrush className="w-8 h-8" />
                  </div>
                  <span className="text-lg">UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <Camera className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Photo/Video Editing</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Experience Card */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: "200ms" }}>
            <div className="bg-yellow-400 p-8 rounded-lg text-black">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block mr-2">✓</span> EXPERIENCE
              </h3>
              
              <div className="mb-6">
                <p className="mb-4">
                  I'm Parsa Siddighi, A Netherlands-based student Full-Stack developer, and I work on creative, clean and user friendly solutions on the web. 
                  I have more than 3+ of learning experience using Front-End and Back-End techniques combined with various design tools and half a year of working experience during an internship at a web development business where I mainly contributed to wordpress based websites. I am 20 years old and currently looking forward to graduating next year during my graduation internship
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                      <img 
                        src="1719273186949.jpg" 
                        alt="Parsa Siddighi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold">Parsa Siddighi</span>
                  </div>
                  
                  <a href="#" className="font-bold flex items-center">
                    Learn More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;