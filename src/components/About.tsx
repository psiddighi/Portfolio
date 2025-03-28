
import { useState, useEffect } from "react";

// Tech icons
import { SiHtml5, SiJavascript, SiPhp, SiMysql, SiBootstrap, SiCss3, SiLaravel, SiNpm, SiGithub, SiMongodb, SiWebpack, SiJquery, SiSass, SiTailwindcss, SiGit } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const About = () => {
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
    <section id="about-section" className="py-16 px-6 md:px-10 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg flex items-center gap-2">
              <span className="text-accent">•</span>
              <span>MY PERSONA</span>
            </h3>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">
              TELLING YOU EVERYTHING
              <br />
              YOU NEED TO KNOW
            </h2>
          </div>
        </div>

        {/* Polaroid Images */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="transform rotate-[-3deg]">
              <div className="bg-white p-3 pb-12 shadow-md w-56 h-72 flex flex-col items-center">
                <img 
                  src="./Portfolio/IMG_2311_2.jpg" 
                  alt="Coding workspace" 
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-black mt-3 text-center font-light">𝒯𝒽𝑒 𝑜𝓃𝑒 🚀</p>
              </div>
            </div>
            
            <div className="transform rotate-[2deg]">
              <div className="bg-white p-3 pb-12 shadow-md w-56 h-72 flex flex-col items-center">
                <img 
                  src="/Portfolio/bridge.jpeg" 
                  alt="Workspace" 
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-black mt-3 text-center font-light">𝒢𝑜 𝟤 𝓌𝑜𝓇𝓀 📚</p>
              </div>
            </div>
            
            <div className="transform rotate-[-1deg]">
              <div className="bg-white p-3 pb-12 shadow-md w-56 h-72 flex flex-col items-center">
                <img 
                  src="/Portfolio/setup.jpg" 
                  alt="Lifestyle" 
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-black mt-3 text-center font-light">𝐿𝒾𝒻𝑒𝓈𝓉𝓎𝓁𝑒 🍂</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <SiHtml5 className="text-4xl text-[#E34F26]" />
            <SiCss3 className="text-4xl text-[#1572B6]" />
            <SiJavascript className="text-4xl text-[#F7DF1E]" />
            <SiPhp className="text-4xl text-[#777BB4]" />
            <SiMysql className="text-4xl text-[#4479A1]" />
            <SiMongodb className="text-4xl text-[#47A248]" />
            <SiBootstrap className="text-4xl text-[#7952B3]" />
            <SiTailwindcss className="text-4xl text-[#06B6D4]" />
            <SiSass className="text-4xl text-[#CC6699]" />
            <SiLaravel className="text-4xl text-[#FF2D20]" />
            <SiJquery className="text-4xl text-[#0769AD]" />
            <SiWebpack className="text-4xl text-[#8DD6F9]" />
            <SiNpm className="text-4xl text-[#CB3837]" />
            <SiGit className="text-4xl text-[#F05032]" />
            <SiGithub className="text-4xl text-white" />
            <TbBrandVscode className="text-4xl text-[#007ACC]" />
          </div>
        </div>

        {/* Career Section */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Career</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-base md:text-lg space-y-4 leading-relaxed">
                I am currently a student in the 3rd year of my study. I study full stack web and
                software development at Yonder. The reason why I chose this career is
                because I loved working with computers ever since I was young. As I got older I
                became more and more interested in how technology works, so I wanted nothing
                more than to do something with computers/software after my high school career.
                I attended Beatrix College in Tilburg for 4 years. I passed every year and made
                some great friends along the way. I got my VMBO TL degree in 2022.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64">
                <img 
                  src="/Portfolio/foto van mezelf in silhouette.jpg" 
                  alt="Person profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Future Section */}
        <div>
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Future</h2>
              
              <p className="text-base md:text-lg space-y-4 leading-relaxed">
                I plan to work as a web/software developer with one goal in mind: To
                contribute to the tech and software industry with my ideas and innovations. I'm
                looking forward to broaden my horizons and work my way into the job market.
                I like to take advantage of every possible opportunity to learn and grow and to
                realize my dream of becoming an influential player in the technology field.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64">
                <img 
                  src="/Portfolio/setup.jpg" 
                  alt="Workspace setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
