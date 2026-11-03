import { useState, useEffect, useRef } from 'react';

const Future = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const title = 'Future';

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
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
    <section id="future-section" className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-8 items-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="rounded-2xl overflow-hidden h-64 md:h-72 lg:h-80 shadow-lg">
              <img 
                src="./Portfolio/setup.jpg" 
                alt="Future" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h2
              ref={headingRef}
              className={`typing-heading from-right text-4xl md:text-5xl font-bold mb-6 md:mb-8 ${isHeadingVisible ? 'is-visible' : ''}`}
            >
              <span>{typedTitle}</span>
              <span className="typing-caret" aria-hidden="true" />
            </h2>
            <p className="mb-6">
              After completing my MBO Level 4 education in Software and Web Development, I plan to study{" "}
              <strong className="font-black text-foreground">Nutrition and Dietetics at HAN University of Applied Sciences</strong>.
              I want to learn more about nutrition and combine this knowledge with my interests in{" "}
              <strong className="font-black text-foreground">sports and cooking</strong>.
            </p>
            <p className="mb-6">
              Alongside my studies, I will continue working independently on creative projects such as{" "}
              <strong className="font-black text-foreground">web development, photography, and videography</strong>, both as a
              freelancer and as a hobby. This allows me to keep developing my creative and technical skills while exploring a
              new direction in nutrition and health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
