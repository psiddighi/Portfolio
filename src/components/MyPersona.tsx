import React from 'react';

const MyPersona = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-xl mb-12 text-center">
          <span className="inline-block border-b-2 border-foreground pb-2">MY PERSONA</span>
        </h2>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            TELLING YOU<br />
            EVERYTHING<br />
            YOU NEED TO KNOW
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Photo Card 1 - Slightly tilted left */}
          <div className="bg-white p-4 pb-6 shadow-lg max-w-[280px] transform rotate-[-3deg] hover:rotate-0 transition-all duration-300">
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="./images/IMG_2311_2.jpg" 
                alt="The one" 
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-center text-black font-medium text-lg">𝒯𝒽𝑒 𝑜𝓃𝑒 🚀</p>
          </div>
          
          {/* Photo Card 2 - No tilt */}
          <div className="bg-white p-4 pb-6 shadow-lg max-w-[280px] transform hover:rotate-[2deg] transition-all duration-300">
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="./images/stage.jpg" 
                alt="Do 2 work" 
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-center text-black font-medium text-lg">𝒢𝑜 𝟤 𝓌𝑜𝓇𝓀 📚 </p>
          </div>
          
          {/* Photo Card 3 - Slightly tilted right */}
          <div className="bg-white p-4 pb-6 shadow-lg max-w-[280px] transform rotate-[3deg] hover:rotate-0 transition-all duration-300">
            <div className="relative mb-4 overflow-hidden">
              <img 
                src="./images/bridge.jpeg" 
                alt="Lifestyle" 
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-center text-black font-medium text-lg">𝐿𝒾𝒻𝑒𝓈𝓉𝓎𝓁𝑒 🍂 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPersona;