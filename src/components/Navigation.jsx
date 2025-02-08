import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '/src/assets/images/logo.jpeg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-15 items-center">
          <div className="flex-shrink-0">
            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
              <img 
                src={logo} 
                alt="Om-Solar Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center text-white space-x-4">
              {[
                ['Homes', 'residential-services'],
                ['Commercial', 'commercial-services'],
                ['Argricultural', 'agricultural-services'],
                ['Contact', 'contact'],
              ].map(([title, id]) => (
                <Link
                  key={id}
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-black' 
                      : 'text-white hover:text-black'
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 500);
                  }}
                >
                  {title}
                </Link>
              ))}
              <button
                className="bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-900 cursor-pointer"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;