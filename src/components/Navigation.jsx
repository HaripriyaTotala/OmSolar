import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '/src/assets/images/logo.jpeg';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    ['Homes', 'residential-services'],
    ['Commercial', 'commercial-services'],
    ['Agricultural', 'agricultural-services'],
    ['Contact', 'contact'],
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
              <img
                src={logo}
                alt="Om-Solar Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map(([title, id]) => (
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
                  onClick={() => handleNavClick(id)}
                >
                  {title}
                </Link>
              ))}
              <button
                className="bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-900 cursor-pointer"
                onClick={() => handleNavClick('contact')}
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(([title, id]) => (
              <Link
                key={id}
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
                onClick={() => handleNavClick(id)}
              >
                {title}
              </Link>
            ))}
            <button
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-cyan-700 text-white hover:bg-cyan-900"
              onClick={() => handleNavClick('contact')}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;