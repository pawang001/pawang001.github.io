import React, { useState, useEffect } from 'react';

// You can use an icon library like 'react-icons' or SVG for the menu icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = React.useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Logic to update active link on scroll
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo or Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-mono font-bold tracking-wider text-gray-300 hover:opacity-80 transition-opacity duration-300">
              <span className="text-gray-500">&lt;</span>
              <span className="text-purple-400">Pawan</span>
              <span className="text-gray-500"> /&gt;</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.href
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-purple-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


