import React from 'react';
import heroImage from '../assets/images/Hero.jpeg'
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-img bg-opacity-40" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Power Your Future with Solar Energy
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
          First MNRE registered solar vendor in Vikarabad district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-900 transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;