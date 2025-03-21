import React, { useState, useEffect } from 'react';

const Career = () => {
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

    const element = document.getElementById('career-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="career-section" className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">Career</h2>
        
        <div className={`flex flex-col lg:flex-row gap-8 items-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="lg:w-2/3">
            <p className="mb-6">
              I am currently a student in the 3rd year of my study. I study full stack 
              web/software development at Yonder. The reason why I chose 
              this career is because I loved working with computers ever since I 
              was young. As I got older I became more and more interested in how 
              technology works, so I wanted nothing more than to do something 
              with computers/software after my high school career. I attended 
              Beatrix College in Tilburg for 4 years. I passed every year and made 
              some great friends along the way. I got my VMBO TL degree in 2022.
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <img 
              src="./Portfolio/foto van mezelf in silhouette.jpg" 
              alt="Career" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;