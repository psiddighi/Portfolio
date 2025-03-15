import React, { useState, useEffect } from 'react';

const Future = () => {
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

    const element = document.getElementById('future-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="future-section" className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-8 items-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="rounded-2xl overflow-hidden h-64 md:h-72 lg:h-80 shadow-lg">
              <img 
                src="./images/setup.jpg" 
                alt="Future" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Future</h2>
            <p className="mb-6">
              I plan to work as a web/software developer with one goal in mind: To 
              contribute to the tech and software industry with my ideas and 
              innovations. I'm looking forward to broaden my horizons and work my 
              way into the job market. I like to take advantage of every possible 
              opportunity to learn and grow and to realize my dream of becoming 
              an influential player in the technology field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;