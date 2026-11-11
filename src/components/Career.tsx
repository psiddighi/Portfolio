import { useState, useEffect, useRef } from 'react';

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const title = 'Career';

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

  useEffect(() => {
    const shouldShowImmediately =
      window.matchMedia('(max-width: 767px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (shouldShowImmediately) {
      setIsHeadingVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
    );

    const element = headingRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHeadingVisible) return;

    let index = 0;
    setTypedTitle('');

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedTitle(title.slice(0, index));

      if (index >= title.length) {
        window.clearInterval(typingTimer);
      }
    }, 95);

    return () => window.clearInterval(typingTimer);
  }, [isHeadingVisible]);

  return (
    <section id="career-section" className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={headingRef}
          className={`typing-heading from-left text-5xl font-bold mb-8 ${isHeadingVisible ? 'is-visible' : ''}`}
        >
          <span>{typedTitle}</span>
          <span className="typing-caret" aria-hidden="true" />
        </h2>
        
        <div className={`flex flex-col lg:flex-row gap-8 items-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="lg:w-2/3">
            <p className="mb-6">
              I am currently a graduated and certified developer. I studied full stack web and software development at Yonder for 4+ years. The reason why I chose this career is because I loved working with computers ever since I was young. As I got older I became more and more interested in how technology works, so I wanted nothing more than to do something with computers/software after my high school career. I attended Beatrix College in Tilburg for 4 years. I passed every year and made some great friends along the way. I got my VMBO TL degree in 2022, and got my MBO 4 degree in 2026.
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <img 
              src="./Portfolio/foto van mezelf in silhouette.jpg" 
              alt="Career" 
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
