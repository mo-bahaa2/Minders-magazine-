import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, Heart, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Hide on scroll down (past 100px), show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkNavbar = scrolled;
  const logoSrc = isDarkNavbar
    ? "/Minders%20Logos/White/Untitled-3.png"
    : "/Minders%20Logos/Black/Minders.png";

  return (
    <>
      {/* Top Navbar (Desktop Only) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isDarkNavbar ? 'bg-minder-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="group flex items-center" data-cursor="hover">
            <motion.img
              key={logoSrc}
              src={logoSrc}
              alt="Minders Logo"
              className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-widest uppercase text-white">
            <a
              href="/#stories"
              className="relative group overflow-hidden"
              data-cursor="hover"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Stories</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
            <Link to="/favorites" className="relative group overflow-hidden" data-cursor="hover">
              <span>Favorites</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
            <Link to="/about" className="relative group overflow-hidden" data-cursor="hover">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-50 bg-minder-black/85 backdrop-blur-xl border border-white/10 rounded-full py-4 px-6 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <Link 
          to="/" 
          className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === '/' && location.hash !== '#stories' ? 'text-minder-yellow scale-110' : 'text-white/50 hover:text-white/80'}`}
        >
          <Home size={22} strokeWidth={location.pathname === '/' && location.hash !== '#stories' ? 2.5 : 2} />
        </Link>
        
        <a 
          href="/#stories" 
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${location.hash === '#stories' || location.pathname === '/archive' || location.pathname.startsWith('/story/') ? 'text-minder-yellow scale-110' : 'text-white/50 hover:text-white/80'}`}
        >
          <Compass size={22} strokeWidth={location.hash === '#stories' || location.pathname === '/archive' || location.pathname.startsWith('/story/') ? 2.5 : 2} />
        </a>
        
        <Link 
          to="/favorites" 
          className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === '/favorites' ? 'text-minder-yellow scale-110' : 'text-white/50 hover:text-white/80'}`}
        >
          <Heart size={22} strokeWidth={location.pathname === '/favorites' ? 2.5 : 2} />
        </Link>
        
        <Link 
          to="/about" 
          className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === '/about' ? 'text-minder-yellow scale-110' : 'text-white/50 hover:text-white/80'}`}
        >
          <Info size={22} strokeWidth={location.pathname === '/about' ? 2.5 : 2} />
        </Link>
      </motion.div>
    </>
  );
};